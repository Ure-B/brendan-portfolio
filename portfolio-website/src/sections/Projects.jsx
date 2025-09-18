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
                            title="Whacked!"
                            description="An online multiplayer top-down shooter that is currently available for wishlist on Steam.
                            "
                            tags={["C#", "Unity", "Netcode", "Steamworks SDK"]}
                            github=""
                            demo="https://store.steampowered.com/app/3745140/Whacked/"
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <ProjectCard 
                            size={250}
                            title="AD Research"
                            description="Develop cutting-edge deep learning models that analyze brain structure in correlation with Dementia, Alzheimer's, and ALS.
                            "
                            tags={["Python", "PyTorch", "NumPy", "scikit-learn"]}
                            github="https://github.com/Ure-B/ad-research"
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
                </div>
            </div>
        </div>
    );
}

export default Projects;