import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Skills from "../components/Skills";
import TiltCard from "../components/TiltCard";

function About() {
    const [tiltCardProps, setTiltCardProps] = useState({ w: 850, h: 550 });

    useEffect(() => {
        const updateTiltCardProps = () => {
            const width = window.innerWidth;

            if (width < 640) {
                // mobile
                setTiltCardProps({ w: 300, h: 300 });
            } else if (width < 1024) {
                // tablet
                setTiltCardProps({ w: 400, h: 400 });
            } else {
                // desktop
                setTiltCardProps({ w: 500, h: 500 });
            }
        };

        updateTiltCardProps();
        window.addEventListener("resize", updateTiltCardProps);
        return () => window.removeEventListener("resize", updateTiltCardProps);
    }, []);

    return (
        <div
        id="about"
        className="w-full min-h-screen pt-20 sm:pt-32 lg:pt-40 xl:pt-50 px-4 sm:px-6 lg:px-12 xl:pl-43"
        >
        <div className="mx-auto flex flex-col lg:flex-col xl:flex-row gap-10 lg:gap-16 xl:gap-20 items-center xl:items-start">
            <div className="flex flex-col gap-5 text-left items-start w-full xl:max-w-[50%]">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, type: "spring" }}
            >
                <h1 className="font-black text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[55px]">
                A bit about me
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, type: "spring" }}
                className="w-full"
            >
                <div className="w-full border-b border-1 border-[#915EFF]" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, type: "spring" }}
            >
                <p className="text-gray-200 text-sm sm:text-base lg:text-lg xl:text-[21px] font-normal leading-relaxed">
                As a recent Bachelor of Science graduate, I am seeking new grad
                opportunities in the tech industry with an innovative company
                where I can grow my coding skills. During my degree at MacEwan
                University, I transformed a basic WebGL graphics engine into a
                full-stack web application for my capstone project and worked as a
                research assistant developing deep learning models analyzing brain
                structure in relation to diseases like Dementia and ALS. In my
                spare time, I enjoy building personal projects, including websites
                and games, with one of my games currently available on Steam.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 4, type: "spring" }}
                className="flex flex-row gap-3 w-full mt-3 items-center justify-center xl:justify-start"
            >
                <motion.div
                animate={{ opacity: [0.2, 1, 0.2], x: [-5, 0, -5] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 text-white text-xl sm:text-2xl flex items-center justify-center"
                >
                <FontAwesomeIcon icon={faChevronLeft} />
                </motion.div>

                <Skills />

                <motion.div
                animate={{ opacity: [0.2, 1, 0.2], x: [5, 0, 5] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 text-white text-xl sm:text-2xl flex items-center justify-center"
                >
                <FontAwesomeIcon icon={faChevronRight} />
                </motion.div>
            </motion.div>
            </div>
            <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            >
            <TiltCard w={tiltCardProps.w} h={tiltCardProps.h}/>
            </motion.div>
        </div>
        </div>
    );
}

export default About;
