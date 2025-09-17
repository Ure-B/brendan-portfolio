import Icons from "./Icons";

function Skill({ title }) {
  return (
    <div className="flex flex-row items-center gap-3 bg-gray-800 px-4 py-2 rounded-2xl border border-gray-700">
      <Icons title={title} size={6} />
      <p className="font-black font-semibold text-white">{title.replace("dot", ".")}</p>
    </div>
  );
};

export default Skill;