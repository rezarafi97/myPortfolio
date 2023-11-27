import { checklist } from "../../assets";

const ProjectAvatar = () => {
  const divClass =
    "absolute -bottom-10 md:top-10 -right-[22rem]";
  const hoverClass =
    "bg-opacity-0 group-hover:bg-opacity-50 py-2 px-4 md:py-4 md:px-8 bg-p2 rounded transition-opacity duration-1000 ease-out";
  const textClass = "opacity-0 group-hover:opacity-100 text-white font-josefin text-sm md:text-base font-normal transition-opacity duration-1000 ease-out";

  return (
    <div className="relative">
      <a href="https://github.com/rezarafi97">
        <img src={checklist} alt="Project Avatar" className="w-8 h-8" />
      </a>
      <div className={divClass}>
        <div className={hoverClass}>
          <p className={textClass}>
            Click icon to visit my learning and practicing projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectAvatar;
