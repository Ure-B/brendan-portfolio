import Skill from "../components/Skill";
import Skills from "../components/Skills";

function About() {
    return (
        <div id="about" className="w-full h-screen">
            <div className="absolute top-full left-[170px] mx-auto px-6 flex flex-col mt-60">
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col gap-10 max-w-250 text-left items-start">
                        <h1 className="font-black text-white text-[20px] lg:text-[35px] xl:text-[40px]">A bit about me ...</h1>
                        <p className="font-black text-white lg:text-[20px] xl:text-[21px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dignissim nisi, varius consectetur ante. Cras non pulvinar felis, vitae condimentum tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam at ultricies mauris. Sed eget sodales odio. Duis non porta nisl, at consectetur ante. Integer volutpat neque et massa dictum tincidunt. Ut mauris justo, imperdiet ac nisl sed, faucibus sodales lorem. Sed vestibulum sit amet orci a elementum. Nullam eleifend feugiat tristique. Maecenas bibendum quis leo eget tincidunt. Morbi vel cursus dui.</p>
                        <Skills/>
                    </div>
                    <img className="relative w-96 h-96 rounded object-cover shadow-lg border rounded-md" src="background1.png" alt="profile_pic"/>
                </div>
            </div>
        </div>
    );
}

export default About;