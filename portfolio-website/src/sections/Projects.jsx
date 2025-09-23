import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    const [projectCardProps, setProjectCardProps] = useState({ size: 100 });

    useEffect(() => {
        const updateProjectCardProps = () => {
            const width = window.innerWidth;

            if (width < 640) {
                // mobile
                setProjectCardProps({ size: 100 });
            } else if (width < 1024) {
                // tablet
                setProjectCardProps({ size: 175 });
            } else {
                // desktop
                setProjectCardProps({ size: 250 });
            }
        };

        updateProjectCardProps();
        window.addEventListener("resize", updateProjectCardProps);
        return () => window.removeEventListener("resize", updateProjectCardProps);
    }, []);

    return (
        <div
        id="projects"
        className="w-full min-h-screen relative px-4 sm:px-6 lg:px-12 xl:px-0"
        >
        <div className="relative xl:absolute xl:left-[170px] mx-auto flex flex-col mt-20 sm:mt-28 lg:mt-80 xl:mt-[100px]">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="w-full flex flex-col gap-5 mb-10"
            >
            <h1 className="font-black text-white text-left text-2xl sm:text-3xl lg:text-4xl xl:text-[55px]">
                Some things I've made
            </h1>
            <div className="w-full border-b border-1 border-[#915EFF]" />
            </motion.div>
            <div className="flex flex-col lg:flex-row gap-5">
            <ProjectCard
                size={(projectCardProps.size * 2) + 20}
                image="constructionyard.PNG"
                title="Construction Yard"
                description="Transformed a basic WebGL engine into a full-stack, state-saving application, which is currently
                            used to help teach CMPT 370 students at MacEwan University."
                tags={[
                "WebGL",
                "React",
                "Node.js",
                "Express",
                "PostgreSQL",
                "AWS S3",
                "REST API",
                "JWT",
                ]}
                github="https://github.com/tehzwen/ConstructionYard"
                demo="https://constructionyard.ca/"
            />
            <div className="flex flex-row lg:flex-col gap-5 w-full lg:w-auto">
                <ProjectCard
                size={projectCardProps.size}
                title="Recipe Buddy"
                description="A web application created using the MERN stack that allows users to post, review, save and search for recipes."
                tags={["React", "MongoDB", "Node.js", "Express", "REST API", "JWT"]}
                github="https://github.com/Ure-B/Recipe-Buddy"
                demo=""
                />
                <ProjectCard
                size={projectCardProps.size}
                title="Whacked!"
                description="An online multiplayer top-down shooter that is currently available for wishlist on Steam."
                tags={["C#", "Unity", "Netcode", "Steamworks SDK"]}
                github=""
                demo="https://store.steampowered.com/app/3745140/Whacked/"
                />
            </div>

            <div className="flex flex-row lg:flex-col gap-5 w-full lg:w-auto">
                <ProjectCard
                size={projectCardProps.size}
                title="AD Research"
                description="Develop cutting-edge deep learning models that analyze brain structure in correlation with Dementia, Alzheimer's, and ALS."
                tags={["Python", "PyTorch", "NumPy", "scikit-learn"]}
                github="https://github.com/Ure-B/ad-research"
                demo=""
                />
                <ProjectCard
                size={projectCardProps.size}
                title="Portfolio Website"
                description="A personal portfolio, built to showcase my software engineering projects and skills."
                tags={[
                    "React",
                    "Tailwind CSS",
                    "Framer Motion",
                    "Three.js",
                    "D3.js",
                ]}
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