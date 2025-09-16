import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Skills from "../components/Skills";
import TiltCard from "../components/TiltCard";

function About() {
    return (
        <div id="about" className="w-full h-screen">
            <div className="absolute top-full left-[170px] mx-auto px-6 flex flex-col mt-60">
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col gap-5 max-w-230 text-left items-start">
                        <motion.div 
                            initial={{opacity: 0, y: -50}} 
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 2, type: "spring"}}
                        >
                            <h1 className="font-black text-white text-[20px] lg:text-[35px] xl:text-[55px]">A bit about me</h1>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0, y: -50}} 
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 2, type: "spring"}}
                            className="w-full"
                        >
                            <div className="w-full border-b border-1 text-[#915EFF]"/>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0, y: -50}} 
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 2, type: "spring"}}
                        >
                            <p className="font-black text-white lg:text-[20px] xl:text-[21px] font-normal">
                                As a recent Bachelor of Science graduate, I am seeking new grad opportunities in the tech industry with an innovative company where I can grow my coding skills. During my degree at MacEwan University, I transformed a basic WebGL graphics engine into a full-stack web application for my capstone project and worked as a research assistant developing deep learning models analyzing brain structure in relation to diseases like Dementia and ALS. In my spare time, I enjoy building personal projects, including websites and games, with one of my games currently available on Steam.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0}} 
                            whileInView={{opacity: 1}}
                            transition={{duration: 4, type: "spring"}}
                            className="flex flex-row gap-3 max-w-230 mt-3"
                        >
                            <motion.div
                                animate={{ opacity: [0.2, 1, 0.2], x: [-5, 0, -5] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="w-10 h-10 text-white text-[30px] flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </motion.div>
                            <Skills />
                            <motion.div
                                animate={{ opacity: [0.2, 1, 0.2], x: [5, 0, 5] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="w-10 h-10 text-white text-[30px] flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </motion.div>
                        </motion.div>
                    </div>
                     <motion.div 
                            initial={{opacity: 0, scale: 0, rotate: 90}} 
                            whileInView={{opacity: 1, scale: 1, rotate: 0}}
                            transition={{duration: 1.5, type: "spring"}}
                    >
                        <TiltCard/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;