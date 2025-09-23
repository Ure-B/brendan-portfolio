import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ size, image, title, description, tags = [], github, demo }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ boxShadow: "0px 0px 20px #915EFF", y: -5 }}
      transition={{ duration: 1.5, type: "spring" }}
      className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden flex flex-col"
      style={{ width: size * 1.2, height: size }}
    >
      {image && (
        <div className="h-6/10 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content container is scrollable */}
      <div className="flex-1 flex flex-col justify-between p-4 overflow-y-auto scrollbar-thin">
        {/* Title & Description */}
        <div className="text-left">
          <h2 className="font-black text-white text-[10px] sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {title}
          </h2>
          <p className="font-normal text-gray-200 text-[6px] sm:text-sm md:text-base lg:text-sm xl:text-md mt-1">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-[#402c77] text-gray-200 text-[6px] sm:text-xs md:text-sm lg:text-xs xl:text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-row gap-3 mt-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FontAwesomeIcon className="text-[#915EFF] text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl" icon={faGithub} />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FontAwesomeIcon className="text-[#915EFF] text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl" icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
