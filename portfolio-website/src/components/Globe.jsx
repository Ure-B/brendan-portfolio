import { useRef, useEffect } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

function Globe() {
    const svgRef = useRef();

    useEffect(() => {
        const width = 800;
        const height = 600;

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height);
        
        const projection = d3.geoOrthographic()
            .scale(200)
            .translate([width / 2, height / 2])
            .clipAngle(90);

        const path = d3.geoPath().projection(projection);

        Promise.all([
            d3.json("https://unpkg.com/world-atlas@2/countries-110m.json")
        ]).then(([world]) => {
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

            // Dot
            const myCoords = [-113.4937, 53.5461];
            const marker = svg.append("circle")
                .attr("r", 6)
                .attr("fill", "red")
                .attr("stroke", "white")
                .attr("stroke-width", 2);

            const label = svg.append("text")
                .text("Edmonton, AB, Canada")
                .attr("font-size", 24)
                .attr("font-family", "sans-serif")
                .attr("font-weight", "bold")
                .attr("fill", "white")
                .attr("stroke", "black")
                .attr("stroke-width", 0)
                .attr("text-anchor", "left")
                .attr("dy", "-0.8em");
            
            let rotationLambda = 0;
            let lastElapsed = 0;
            let currentSpeed = 0.1; // start at fast speed
            
            d3.timer((elapsed) => {
                const delta = elapsed - lastElapsed;
                lastElapsed = elapsed;
            
                // Calculate visibility
                const center = [rotationLambda, -20];
                const distance = d3.geoDistance(myCoords, center);
                const visible = distance >= Math.PI / 2;
            
                // Smooth fade in/out for marker
                const targetOpacity = visible ? 1 : 0;
                const currentOpacity = +marker.attr("opacity");
                const easedOpacity = currentOpacity + (targetOpacity - currentOpacity) * 0.1;
            
                const [x, y] = projection(myCoords);
                marker.attr("cx", x)
                    .attr("cy", y)
                    .attr("opacity", easedOpacity);
                label.attr("x", x + 8)
                    .attr("y", y)
                    .attr("opacity", easedOpacity);
            
                // Smooth speed interpolation
                const targetSpeed = visible ? 0.02 : 0.1; // slow if visible, fast if not
                currentSpeed += (targetSpeed - currentSpeed) * 0.05; // 0.05 = smoothing factor
            
                // Update rotation
                rotationLambda += currentSpeed * delta; // scale delta to reasonable rotation step
            
                projection.rotate([rotationLambda, -25]);
            
                // Update globe
                svg.selectAll("path.sphere").attr("d", path);
                svg.selectAll("path.country").attr("d", path);
            });    
        });
    }, []);

    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>
    );
}

export default Globe;