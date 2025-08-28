import { motion } from "motion/react";

import Typewriter from "../components/Typewriter";

function Intro() {
    return (
        <div>
            <div className="w-screen h-screen relative z-0 bg-cover bg-no-repeat bg-center bg-[url('/background1.png')]">
                <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
                    <h1 className="font-black text-[40px] text-[#915EFF]">*</h1>
                    <div>
                        <motion.div 
                            initial={{opacity: 0, y: -50}} 
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 1.5, type: "spring"}}
                        >
                            <div className="flex gap-3.5">
                                <h1 className="font-black text-[80px]">Hi, I'm </h1>
                                <motion.div initial={{ color: "#FFFFFF"}} animate={{ color: "#915EFF" }} transition={{ duration: 2, type: "spring", delay: 1 }}>
                                    <h1 className="font-black text-[80px]">Brendan</h1>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{opacity: 0, y: -50}} 
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 2, type: "spring"}}
                        >
                        <div className="absolute text-left items-start flex flex-row gap-2.5 leading-10">
                            <p className="text-white text-[35px] font-semibold font-black font-stretch-105%">I do</p>
                            <Typewriter/>
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;