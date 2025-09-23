import Icons from "./Icons";

function Skill({ title }) {
    return (
        <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4 bg-gray-800 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-2xl border border-gray-700">
            <Icons title={title} size="h-4 w-4 sm:h-6 sm:w-6 md:h-6 md:w-6" />
            <p className="font-black font-semibold text-white text-xs sm:text-sm md:text-base">
                {title.replace("dot", ".")}
            </p>
        </div>
    );
}

export default Skill;