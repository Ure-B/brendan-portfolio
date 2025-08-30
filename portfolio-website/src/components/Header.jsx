import { motion } from "motion/react";

import NavElement from "./NavElement";

function Header() {
    return (
        <div>
            <nav className="fixed z-10 top-0 right-0 left-0 p-4 bg-[#060816]">
                <div className="flex justify-between pl-30 pr-25">
                    <a href="/brendan-portfolio" className="flex flex-row gap-3">
                        <img src="/brendan-portfolio/ProfilePic.png" alt="profile-pic" className="w-6"/>
                        <p className="text-white cursor-pointer text-[20px] font-extrabold font-sans font-stretch-105%">BRENDAN URE</p>
                    </a>
                    <ul className="flex gap-6">
                        <NavElement label="About" link="#about" delay={0}/>
                        <NavElement label="Projects" link="#projects" delay={0.2}/>
                        <NavElement label="Work" link="#work" delay={0.4}/>
                        <NavElement label="Contact" link="#contact" delay={0.6}/>
                        <motion.div initial={{ scale: 0, opacity: 0}} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, type: "spring", delay: 0.8 }}>
                            <motion.button whileTap={{ y: 2 }}>
                                <li>
                                    <a className="flex gap-2 cursor-pointer" target="_blank" href="/brendan-portfolio/ResumeBU.pdf">
                                        <p className="text-white text-[20px] font-semibold font-sans font-stretch-105%">Resume</p>
                                        <svg className="size-7.5 text-[#915EFF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
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