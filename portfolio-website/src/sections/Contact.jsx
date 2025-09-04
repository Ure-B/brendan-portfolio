import { motion } from "motion/react";

import Globe from "../components/Globe";

function Contact() {
    return (
        <div id="contact" className="w-screen h-screen pt-15">
            <motion.div 
                            initial={{opacity: 0, x: -150}} 
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 2.5, type: "spring"}}
            >
                <div className="flex flex-col gap-5 p-5 items-center justify-center">
                    <div>
                        <h1 className="font-black text-[40px] text-[#FFFFFF]">Contact</h1>
                        <p className="font-black text-[20px] text-[#A9A6C3]">Reach out so we can connect</p>
                    </div>
                    <Globe scale={225}/>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;