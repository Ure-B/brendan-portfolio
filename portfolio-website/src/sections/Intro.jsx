import { motion } from "motion/react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from "react";

import Typewriter from "../components/Typewriter";
import InteractiveParticleSphere from "../components/InteractiveParticleSphere";

function Intro() {
    return (
        <div id="intro">
            <div className="w-full h-screen relative z-0 bg-cover bg-no-repeat bg-center bg-[url('/background1.png')]">
                <div className="absolute top-[120px] left-[150px] mx-auto px-6 flex flex-row items-start gap-5 z-20">
                    <h1 className="font-black text-[40px] text-[#915EFF]">*</h1>
                    <div className="flex flex-col">
                        <motion.div 
                            initial={{opacity: 0, y: -50}} 
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 1.5, type: "spring"}}
                        >
                            <div className="flex flex-row gap-3.5">
                                <h1 className="font-black lg:text-[80px] xl:text-[90px] text-[#FFFFFF]">Hi, I'm </h1>
                                <motion.div initial={{ color: "#FFFFFF"}} animate={{ color: "#915EFF" }} transition={{ duration: 2, type: "spring", delay: 1 }}>
                                    <h1 className="font-black lg:text-[80px] xl:text-[90px]">Brendan</h1>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0, y: -50}} 
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 2, type: "spring"}}
                        >
                        <div className="text-left items-start flex flex-row gap-2.5 leading-10">
                            <p className="text-white lg:text-[35px] xl:text-[40px] font-semibold font-black font-stretch-105%">I do</p>
                            <Typewriter/>
                        </div>
                        </motion.div>
                        <div className="text-left items-start flex flex-row gap-5 mt-10">
                            <motion.div 
                                initial={{opacity: 0, x: 80}} 
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 2, delay: 0.5, type: "spring"}}
                            >
                                <motion.div 
                                    whileHover={{y: -5}}
                                    whileTap={{ y: 5 }}
                                    transition={{duration: 0.5, type: "spring"}}
                                >
                                    <a href="#about">
                                        <button className="cursor-pointer bg-[#915EFF] font-black font-semibold text-white px-4 py-2 rounded-lg border-2 border-[#915EFF] lg:text-[15px] xl:text-[20px]">Learn More</button>
                                    </a>
                                </motion.div>
                            </motion.div>
                            <motion.div 
                                initial={{opacity: 0, x: 50}} 
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 2, delay: 0.7, type: "spring"}}
                            >
                                <motion.div 
                                    whileHover={{y: -5}}
                                    whileTap={{ y: 5 }}
                                    transition={{duration: 0.5, type: "spring"}}
                                >
                                    <a href="#projects">
                                        <button className="cursor-pointer bg-transparent font-black font-semibold text-[#915EFF] px-4 py-2 rounded-lg border-2 border-[#915EFF] lg:text-[15px] xl:text-[20px]">View Projects</button>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full pt-70 absolute inset-0 z-10">
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
                        <ambientLight intensity={1.0}/>
                        <pointLight position={[0.8, 0.8, 0.8]}/>
                        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={1} enableDamping={true} enablePan={false}/>
                        <Suspense fallback={<div>Loading component...</div>}>
                            <InteractiveParticleSphere position={[0, 0, 0]} radius={2.0} segments={24}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
};

export default Intro;