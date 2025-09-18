import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ size, image, title, description, tags=[], github, demo }) => {
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ boxShadow: "0px 0px 20px #915EFF", y: -5 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden flex flex-col" 
        style={{ width: size * 1.2, height: size }}
    >
        {image && (<div className="h-2/3 w-full overflow-hidden object-cover">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
        </div>)}
        <div className="flex-1 flex flex-col justify-between p-4">
            <div className="text-left">
                <h2 className="font-black text-white text-[15px] lg:text-[20px] xl:text-[25px]">{title}</h2>
                <p className="font-black text-gray-200 text-[10px] lg:text-[12px] xl:text-[14px] font-normal">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, i) => (
                    <span
                    key={i}
                    className="px-2 py-1 bg-[#402c77] text-gray-200 text-xs rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex flex-row gap-2 mt-4">
                {github && (<a
                    href={github}
                    target="_blank"
                    className="flex items-center"
                >
                    <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon={faGithub} className="text-[25px] text-[#915EFF]"/>
                    </div>
                </a>)}
                {demo && (<a
                    href={demo}
                    target="_blank"
                    className="flex items-center"
                >
                    <div className="flex items-center justify-center">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[25px] text-[#915EFF]"/>
                    </div>
                </a>)}
            </div>
        </div>
    </motion.div>
  );
};

export default ProjectCard;