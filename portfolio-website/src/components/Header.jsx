import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import NavElement from "./NavElement";

function Header() {
    return (
        <div>
            <nav className="fixed z-10 top-0 right-0 left-0 p-4 bg-[#060816]">
                <div className="flex justify-between pl-30 pr-25">
                    <a href="#intro" className="flex flex-row gap-3">
                        {/* <img src="ProfilePic.png" alt="profile-pic" className="w-32 max-w-6 sm:w-0 md:w-0 lg:w-6 xl:w-6 h-auto"/> */}
                        <p className="text-white cursor-pointer lg:text-[20px] xl:text-[23px] font-extrabold font-sans font-stretch-105%">BRENDAN URE</p>
                    </a>
                    <ul className="flex gap-6">
                        <NavElement label="About" link="#about" delay={0}/>
                        <NavElement label="Projects" link="#projects" delay={0.2}/>
                        {/* <NavElement label="Work" link="#work" delay={0.4}/> */}
                        <NavElement label="Contact" link="#contact" delay={0.6}/>
                        <motion.div initial={{ scale: 0, opacity: 0}} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, type: "spring", delay: 0.8 }}>
                            <motion.button whileTap={{ y: 2 }}>
                                <li>
                                    <a className="flex gap-2 cursor-pointer bg-[#060816]" target="_blank" href="ResumeBU.pdf">
                                        <p className="text-white lg:text-[20px] xl:text-[23px] font-semibold font-sans font-stretch-105%">Resume</p>
                                        <div className="flex items-center justify-center">
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[23px] text-[#915EFF]"/>
                                        </div>
                                    </a>
                                </li>
                            </motion.button>
                        </motion.div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;