import * as icons from "simple-icons";

const SkillIcon = ({ title, size = 24, className = "text-[#915EFF]" }) => {
    const iconName = "si" + title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    const icon = icons[iconName.replace(" ", "")];

    if (!icon) return <p className="text-white">{iconName}</p>;

    return (
        <span className={`inline-block h-${size} w-${size} ${className}`}>
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
