import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Skill from "./Skill";

const skills = [
  "React", "Redux", "D3.js", "Tailwind CSS", "HTML", "CSS", "JS",
  "Node.js", "Express", "PostgreSQL", "Unity", "C#", "Netcode"
];

export default function Skills({ width = 250 }) {
  const controls = useAnimation();
  const repeatedSkills = [...skills, ...skills]; // duplicate for seamless loop
  const totalWidth = repeatedSkills.length * 100; // approximate pixel width, adjust as needed

  useEffect(() => {
    const animateLoop = async () => {
      while (true) {
        await controls.start({
          x: -totalWidth / 2,
          transition: { duration: 20, ease: "linear" },
        });
        controls.set({ x: 0 }); // reset instantly to start
      }
    };
    animateLoop();
  }, [controls, totalWidth]);

  return (
    <motion.div
      className="overflow-hidden w-full"
      onMouseEnter={() => controls.stop()} // pause on hover
      onMouseLeave={() => controls.start()} // resume on leave
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={controls}
        style={{ display: "flex" }}
      >
        {repeatedSkills.map((skill, index) => (
          <div key={index} className="mr-4 flex-shrink-0">
            <Skill title={skill} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
