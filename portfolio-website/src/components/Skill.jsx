const Skill = ({ title }) => {
    return (
        <div className="bg-gray-800 text-center px-4 py-2 rounded-md shadow-md border border-gray-700 hover:bg-gray-700 transition-colors duration-300">
            <p className="font-black font-semibold text-white">{title}</p>
        </div>
    );
};

export default Skill;