import * as icons from "simple-icons";

function SkillIcon({ title }) {
    const iconName = "si" + title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    const icon = icons[iconName.replace(" ", "")];

    if (!icon) return <p className="text-white">{iconName}</p>;

    return (
        <span className="w-6 h-6 text-[#915EFF]">
        <svg
            className="fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>{title}</title>
            <path d={icon.path} />
        </svg>
        </span>
    );
};

export default SkillIcon;
