import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Globe from "../components/Globe";
import { useState, useEffect } from "react";

function Contact() {
  const [globeProps, setGlobeProps] = useState({ scale: 225, w: 850, h: 550 });

  useEffect(() => {
    const updateGlobeProps = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // mobile
        setGlobeProps({ scale: 120, w: 500, h: 400, fontSize: 14 });
      } else if (width < 1024) {
        // tablet
        setGlobeProps({ scale: 200, w: 700, h: 450, fontSize: 18 });
      } else {
        // desktop
        setGlobeProps({ scale: 225, w: 850, h: 550, fontSize: 24 });
      }
    };

    updateGlobeProps();
    window.addEventListener("resize", updateGlobeProps);
    return () => window.removeEventListener("resize", updateGlobeProps);
  }, []);

  return (
    <div id="contact" className="w-full h-full mb-10 pt-25">
      <motion.div 
        initial={{opacity: 0, x: -150}} 
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 2.5, type: "spring"}}
      >
        <div className="flex flex-col gap-1 md:gap-2 items-center justify-center">
          <div className="mb-10">
            <h1 className="font-black text-white text-left text-2xl sm:text-3xl lg:text-4xl xl:text-[55px]">
              What's next?
            </h1>
            <div className="w-full border-b border-1 text-[#915EFF]" />
          </div>

          {/* Responsive Globe */}
          <Globe scale={globeProps.scale} w={globeProps.w} h={globeProps.h} fontSize={globeProps.fontSize} />

          <div>
            <p className="font-sans font-normal text-[20px] text-white">
              Reach out so we can connect!
            </p>
            <div className="w-full border-b border-2 mt-2 mb-3 text-[#915EFF]"></div>
            <div className="flex justify-center flex-row gap-5">
              <a href="https://github.com/Ure-B" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 text-white text-[40px] flex items-center justify-center">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/brendan-ure" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#060816] text-[24px]">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </a>
              <a href="mailto:brendandavid1@gmail.com" target="_blank" rel="noopener noreferrer">
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
