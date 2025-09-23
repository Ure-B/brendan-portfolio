import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";

import Typewriter from "../components/Typewriter";
import InteractiveParticleSphere from "../components/InteractiveParticleSphere";

function Intro() {
    const [sphereConfig, setSphereConfig] = useState({ radius: 1.4, segments: 16 });
    const [showCanvas, setShowCanvas] = useState(true);

    useEffect(() => {
        const updateSize = () => {
        if (window.innerWidth < 640) {
            setSphereConfig({ radius: 1.4, segments: 16 }); // mobile
            setShowCanvas(false);
        } else if (window.innerWidth < 1024) {
            setSphereConfig({ radius: 1.8, segments: 20 }); // tablet
            setShowCanvas(false);
        } else {
            setSphereConfig({ radius: 2.2, segments: 24 }); // desktop
            setShowCanvas(true);
        }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div id="intro">
        {/* ✅ dynamic height: auto for small screens, full screen only on large */}
        <div className="w-full min-h-[300px] sm:min-h-[600px] md:min-h-[400px] lg:h-screen relative z-0 bg-no-repeat bg-cover bg-top sm:bg-center " style={{ backgroundImage: "url('/background1.png')" }}>
            
            {/* Content */}
            <div className="absolute top-[80px] sm:top-[100px] left-6 sm:left-12 md:left-20 lg:left-[170px] xl:left-[170px] mx-auto px-4 sm:px-6 flex flex-row items-start gap-5 z-20">
            <div className="flex flex-col">
                
                {/* Heading */}
                <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, type: "spring" }}
                >
                <div className="flex flex-row gap-2 sm:gap-3.5 flex-wrap">
                    <h1 className="font-black text-[30px] sm:text-[30px] md:text-[50px] lg:text-[80px] xl:text-[90px] text-white">
                    Hi, I'm
                    </h1>
                    <motion.div
                    initial={{ color: "#FFFFFF" }}
                    animate={{ color: "#915EFF" }}
                    transition={{ duration: 2, type: "spring", delay: 1 }}
                    >
                    <h1 className="font-black text-[30px] sm:text-[30px] md:text-[50px] lg:text-[80px] xl:text-[90px]">
                        Brendan
                    </h1>
                    </motion.div>
                </div>
                </motion.div>

                {/* Subheading */}
                <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, type: "spring" }}
                >
                <div className="text-left flex flex-row gap-2 sm:gap-2.5 items-center flex-wrap leading-tight sm:leading-10">
                    <p className="text-white text-[20px] sm:text-[20px] md:text-[28px] lg:text-[35px] xl:text-[45px] font-semibold">
                    I do
                    </p>
                    <Typewriter />
                </div>
                </motion.div>

                {/* Buttons */}
                <div className="text-left flex flex-row gap-3 sm:gap-5 mt-4 lg:mt-10 xl:mt-10 flex-wrap">
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, type: "spring" }}
                >
                    <motion.div
                    whileHover={{ y: -5 }}
                    whileTap={{ y: 5 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    >
                    <a href="#about">
                        <button className="cursor-pointer bg-[#915EFF] font-black text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg border-2 border-[#915EFF] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                        Learn More
                        </button>
                    </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 3, type: "spring" }}
                >
                    <motion.div
                    whileHover={{ y: -5 }}
                    whileTap={{ y: 5 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    >
                    <a href="#projects">
                        <button className="cursor-pointer bg-transparent font-black text-[#915EFF] px-2 sm:px-4 py-1 sm:py-2 rounded-lg border-2 border-[#915EFF] text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                        View Projects
                        </button>
                    </a>
                    </motion.div>
                </motion.div>
                </div>
            </div>
            </div>

            {/* Background Canvas */}
            {showCanvas && (
            <div className="w-full h-full pt-20 absolute inset-0 z-10">
                <Canvas
                dpr={window.devicePixelRatio}
                linear
                camera={{ position: [-4.5, 0, 0] }}
                onCreated={({ gl }) => {
                    const canvas = gl.domElement;
                    canvas.addEventListener("webglcontextlost", (e) => {
                    console.warn("WebGL context lost");
                    e.preventDefault();
                    });
                    canvas.addEventListener("webglcontextrestored", () => {
                    console.log("WebGL context restored");
                    });
                }}
                >
                <ambientLight intensity={1.0} />
                <pointLight position={[0.8, 0.8, 0.8]} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableDamping={true}
                    autoRotate={true}
                    autoRotateSpeed={1}
                />
                <Suspense fallback={<div>Loading component...</div>}>
                    <InteractiveParticleSphere
                    position={[0, 0, 0]}
                    radius={sphereConfig.radius}
                    segments={sphereConfig.segments}
                    />
                </Suspense>
                </Canvas>
            </div>
            )}
        </div>
        </div>
    );
}

export default Intro;