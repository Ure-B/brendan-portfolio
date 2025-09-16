import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Skill from "./Skill";

const skills = [
  "Python", "React", "Redux", "D3", "Tailwind CSS", "HTML5", "CSS", "Javascript", "WebGl", "Threedotjs",
  "Nodedotjs", "Express", "MySQL", "MongoDB", "PostgreSQL", "Unity", "dotNet", "Git", "Docker", "PyTorch"
];

export default function Skills({ width = 250 }) {
  const controls = useAnimation();
  const repeatedSkills = [...skills, ...skills]; // duplicate for seamless loop
  const totalWidth = repeatedSkills.length * 90; // approximate pixel width, adjust as needed
  const duration = 20;

  useEffect(() => {
    const animateLoop = async () => {
      while (true) {
        await controls.start({
          x: -totalWidth / 2,
          transition: { duration: duration, ease: "linear" },
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
      onMouseLeave={() => controls.start({
          x: -totalWidth / 2,
          transition: { duration: duration, ease: "linear" },
        })} // resume on leave
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
