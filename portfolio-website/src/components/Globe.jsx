import { useRef, useEffect } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

function Globe({ scale }) {
    const svgRef = useRef();

    useEffect(() => {
        const width = 850;
        const height = 550;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        // Star Background
        const starCount = 250;
        const stars = d3.range(starCount).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 1.5
        }));

        svg.append("g")
            .attr("class", "stars")
            .selectAll("circle")
            .data(stars)
            .enter()
            .append("circle")
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", d => d.r)
            .attr("fill", "white")
            .attr("opacity", () => 0.4 + Math.random() * 0.6);
        
        const projection = d3.geoOrthographic()
            .scale(scale)
            .translate([width / 2, height / 2])
            .clipAngle(90);

        const path = d3.geoPath().projection(projection);

        d3.json("https://unpkg.com/world-atlas@2/countries-110m.json").then(world => {
            const countries = topojson.feature(world, world.objects.countries);

            // Globe
            svg.append("path")
                .datum({type: "Sphere"})
                .attr("class", "sphere")
                .attr("fill", "#060816")
                .attr("stroke", "#915EFF")
                .attr("stroke-width", 3);
            
            // Countries
            svg.append("g")
                .selectAll("path")
                .data(countries.features)
                .join("path")
                .attr("class", "country")
                .attr("fill", "#402c77")
                .attr("stroke", "#915EFF")
                .attr("stroke-width", 1);

            // Marker
            const myCoords = [-113.4937, 53.5461];
            const marker = svg.append("circle")
                .attr("r", 6)
                .attr("fill", "#ceb7ff")
                .attr("stroke", "#915eff")
                .attr("stroke-width", 2);
            
            // Glowing halo
            const halo = svg.append("circle")
                .attr("r", 10)
                .attr("fill", "none")
                .attr("stroke", "#ceb7ff")
                .attr("stroke-width", 2)
                .attr("opacity", 0);

            const labelGroup = svg.append("g");

            // Location
            const location = "Edmonton, AB, Canada";
            const label = labelGroup.append("text")
                .text(location)
                .attr("font-size", 24)
                .attr("font-weight", "bold")
                .attr("fill", "#ceb7ff")
                .attr("text-anchor", "left")
                .attr("dy", "-0.8em");

            const labelBg = labelGroup.insert("rect", "text")
                .attr("rx", 4)
                .attr("ry", 4)
                .attr("fill", "black")
                .attr("stroke", "#915eff")
                .attr("stroke-width", 0.5)
                .attr("opacity", 0);
            
            let rotationLambda = 0;
            let lastElapsed = 0;
            let currentSpeed = 0.1; 
            
            const timer = d3.timer((elapsed) => {
                const delta = elapsed - lastElapsed;
                lastElapsed = elapsed;

                // Star twinkle
                svg.selectAll("g.stars circle")
                    .attr("opacity", (d, i) => 0.1 + 0.6 * Math.abs(Math.sin(elapsed / 1000 + i)));
            
                // Check visibility of location
                const rotation = projection.rotate(); 
                const rotatedCoords = d3.geoRotation(rotation)(myCoords);
                const visible = rotatedCoords[0] > -90 && rotatedCoords[0] < 90;
            
                const targetOpacity = visible ? 1 : 0;
                const currentOpacity = +marker.attr("opacity");
                const easedOpacity = currentOpacity + (targetOpacity - currentOpacity) * 0.1;
            
                const [x, y] = projection(myCoords);
                labelGroup
                    .attr("transform", `translate(${x + 10},${y - 10})`)
                    .attr("opacity", easedOpacity);
                
                // Marker Pulse
                const pulse = 6 + Math.sin(elapsed / 300) * 2;
                marker
                    .attr("cx", x)
                    .attr("cy", y)
                    .attr("r", pulse)
                    .attr("opacity", easedOpacity);
                
                // Halo pulse
                const haloSize = 12 + Math.sin(elapsed / 300) * 6;
                const haloOpacity = 0.5 + Math.sin(elapsed / 300) * 0.5;
                
                halo
                    .attr("cx", x)
                    .attr("cy", y)
                    .attr("r", haloSize)
                    .attr("opacity", easedOpacity * haloOpacity);
                
                // Resize box for text
                const bbox = label.node().getBBox();
                labelBg.attr("x", bbox.x - 4)
                       .attr("y", bbox.y - 2)
                       .attr("width", bbox.width + 8)
                       .attr("height", bbox.height + 4);
            
                const targetSpeed = visible ? 0.02 : 0.1; 
                currentSpeed += (targetSpeed - currentSpeed) * 0.05; 
            
                rotationLambda += currentSpeed * delta; 
            
                projection.rotate([rotationLambda, -25]);
            
                svg.selectAll("path.sphere").attr("d", path);
                svg.selectAll("path.country").attr("d", path);
            });   

            return () => timer.stop(); 
        });
    }, [scale]);

    return (
        <div className="flex justify-center items-center">
            <svg ref={svgRef} className="w-[850px] h-[550px]"></svg>
        </div>
    );
}

export default Globe;