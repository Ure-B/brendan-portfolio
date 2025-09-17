import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div id="projects" className="w-full h-screen">
            <div className="absolute top-full left-[170px] mx-auto px-6 flex flex-col mt-260">
                <motion.div
                    initial={{opacity: 0, y: -50}} 
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 2, type: "spring"}} 
                    className="w-full flex flex-col gap-5 mb-10"
                >
                    <h1 className="font-black text-white text-left text-[20px] lg:text-[35px] xl:text-[55px]">Some things I've made</h1>
                    <div className="w-full border-b border-1 text-[#915EFF]"/>
                </motion.div>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col gap-5">
                        <ProjectCard 
                            size={250}
                            title="Recipe Buddy"
                            description="A web application created using the MERN stack that allows users to post, review, save and     search for recipes.
                            "
                            tags={["React", "MongoDB", "Node.js", "Express", "REST API", "JWT"]}
                            github="https://github.com/Ure-B/Recipe-Buddy"
                            demo=""
                        />
                        <ProjectCard 
                            size={250}
                            title="Cool Project"
                            description="An awesome project that does X, Y, and Z."
                            github=""
                            demo=""
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <ProjectCard 
                            size={250}
                            title="Cool Project"
                            description="An awesome project that does X, Y, and Z."
                            github=""
                            demo=""
                        />
                        <ProjectCard 
                            size={250}
                            title="Portfolio Website"
                            description="A personal portfolio, built to showcase my software engineering projects and skills."
                            tags={["React", "Tailwind CSS", "Framer Motion", "Three.js", "D3.js"]}
                            github="https://github.com/Ure-B/brendan-portfolio"
                            demo="https://brendanure.dev/"
                        />
                    </div>
                    <ProjectCard 
                            size={520}
                            image="constructionyard.PNG"
                            title="Construction Yard"
                            description="Transformed a basic WebGL engine into a full-stack, state-saving application, which is currently
                                        used to help teach CMPT 370 students at MacEwan University.
                                        "
                            tags={["WebGL", "React", "Node.js", "Express", "PostgreSQL", "AWS S3", "REST API", "JWT"]}
                            github="https://github.com/tehzwen/ConstructionYard"
                            demo="https://constructionyard.ca/"
                        />
                </div>
            </div>
        </div>
    );
}

export default Projects;