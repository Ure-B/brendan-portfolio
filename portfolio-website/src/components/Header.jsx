import { useState } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import NavElement from "./NavElement";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			<nav className="fixed z-10 top-0 right-0 left-0 p-4 bg-[#060816]">
				<div className="flex justify-between items-center px-4 md:px-8">
				{/* Logo / Name */}
				<a href="#intro" className="flex flex-row gap-3">
					<p className="text-white cursor-pointer text-[18px] sm:text-[20px] xl:text-[23px] font-extrabold font-sans tracking-wide">
					BRENDAN URE
					</p>
				</a>

				{/* Desktop Nav */}
				<ul className="hidden md:flex gap-6 items-center">
					<NavElement label="About" link="#about" delay={0} />
					<NavElement label="Projects" link="#projects" delay={0.2} />
					{/* <NavElement label="Work" link="#work" delay={0.4}/> */}
					<NavElement label="Contact" link="#contact" delay={0.6} />
					<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1, type: "spring", delay: 0.8 }}
					>
						<motion.button whileTap={{ y: 2 }}>
							<li>
								<a
									className="flex gap-2 cursor-pointer bg-[#060816]"
									target="_blank"
									href="ResumeBU.pdf"
								>
									<p className="text-white text-[18px] sm:text-[20px] xl:text-[23px] font-semibold font-sans tracking-wide">
									Resume
									</p>
									<div className="flex items-center justify-center">
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="text-[20px] sm:text-[22px] xl:text-[23px] text-[#915EFF]"
										/>
									</div>
								</a>
							</li>
						</motion.button>
					</motion.div>
				</ul>

				{/* Mobile Hamburger Button */}
				<button
					className="md:hidden text-white text-2xl"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
				</button>
				</div>

				{/* Mobile Dropdown Menu */}
				{menuOpen && (
				<motion.ul
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					className="flex flex-col items-center gap-6 mt-4 md:hidden bg-[#060816] pb-4"
				>
					<NavElement label="About" link="#about" delay={0} />
					<NavElement label="Projects" link="#projects" delay={0.2} />
					{/* <NavElement label="Work" link="#work" delay={0.4}/> */}
					<NavElement label="Contact" link="#contact" delay={0.6} />
					<li>
						<a
							className="flex gap-2 cursor-pointer bg-[#060816]"
							target="_blank"
							href="ResumeBU.pdf"
						>
							<p className="text-white text-[18px] font-semibold font-sans tracking-wide">
							Resume
							</p>
							<div className="flex items-center justify-center">
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
									className="text-[20px] text-[#915EFF]"
								/>
							</div>
						</a>
					</li>
				</motion.ul>
				)}
			</nav>
		</div>
	);
}

export default Header;