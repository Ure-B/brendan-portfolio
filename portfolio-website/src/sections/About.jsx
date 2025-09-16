import { motion } from "framer-motion";

import Skill from "../components/Skill";
import Skills from "../components/Skills";
import TiltCard from "../components/TiltCard";

function About() {
    return (
        <div id="about" className="w-full h-screen">
            <div className="absolute top-full left-[170px] mx-auto px-6 flex flex-col mt-60">
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col gap-10 max-w-230 text-left items-start">
                        <motion.div 
                            initial={{opacity: 0, y: -50}} 
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 2, type: "spring"}}
                        >
                            <h1 className="font-black text-white text-[20px] lg:text-[35px] xl:text-[40px]">A bit about me ...</h1>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0, y: -50}} 
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 3, type: "spring"}}
                        >
                            <p className="font-black text-white lg:text-[20px] xl:text-[21px] font-normal">
                                As a recent Bachelor of Science graduate, I am seeking new grad opportunities in the tech industry with an innovative company where I can grow my coding skills. During my degree at MacEwan University, I transformed a basic WebGL graphics engine into a full-stack web application for my capstone project and worked as a research assistant developing deep learning models analyzing brain structure in relation to diseases like Dementia and ALS. In my spare time, I enjoy building personal projects, including websites and games, with one of my games currently available on Steam.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0}} 
                            whileInView={{opacity: 1}}
                            transition={{duration: 4, type: "spring"}}
                            className="max-w-230"
                        >
                            <Skills/>
                        </motion.div>
                    </div>
                     <motion.div 
                            initial={{opacity: 0, scale: 0, rotate: 90}} 
                            whileInView={{opacity: 1, scale: 1, rotate: 0}}
                            transition={{duration: 1.5, type: "spring"}}
                    >
                        <TiltCard/>
                    </motion.div>
                    {/* <img className="relative w-100 h-100 rounded object-cover shadow-lg border rounded-md" src="background1.png" alt="profile_pic"/> */}
                </div>
            </div>
        </div>
    );
}

export default About;