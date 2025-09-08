import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Globe from "../components/Globe";

function Contact() {
    return (
        <div id="contact" className="w-full mb-10">
            <motion.div 
                            initial={{opacity: 0, x: -150}} 
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 2.5, type: "spring"}}
            >
                <div className="flex flex-col gap-2 items-center justify-center">
                    <Globe scale={225}/>
                    <div>
                        <p className="font-sans font-normal text-[20px] text-white">Reach out so we can connect!</p>
                        <div className="w-full border-b border-2 mt-2 mb-3 text-[#915EFF]"></div>
                        <div className="flex justify-center flex-row gap-5">
                            <a href="https://github.com/Ure-B" target="_blank">
                                <div className="w-10 h-10 text-white text-[40px] flex items-center justify-center">
                                    <FontAwesomeIcon icon={faGithub} />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/brendan-ure" target="_blank">
                                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#060816] text-[24px]">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </div>
                            </a>
                            <a href="mailto:brendandavid1@gmail.com" target="_blank">
                                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#060816] text-[24px]">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;