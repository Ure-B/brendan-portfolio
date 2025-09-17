import { motion, useMotionValue } from "framer-motion";
import Skill from "./Skill";

const skills = [
  "Python", "React", "Redux", "D3", "Tailwind CSS", "HTML5", "CSS", "Javascript", "WebGl", "Threedotjs",
  "Nodedotjs", "Express", "MySQL", "MongoDB", "PostgreSQL", "Unity", "dotNet", "Git", "Docker", "PyTorch"
];

function Skills() {
  const repeatedSkills = [...skills];
  const x = useMotionValue(0);

  return (
    <div className="relative w-full overflow-hidden cursor-grab">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#060816] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#060816] to-transparent pointer-events-none z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -repeatedSkills.length * 95, right: 0 }}
        dragElastic={0.1}
        whileTap={{ cursor: "grabbing" }}
      >
        {repeatedSkills.map((skill, index) => (
          <div key={index} className="mr-4 flex-shrink-0">
            <Skill title={skill} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
