import { checklist } from "../../assets";

const ProjectAvatar = () => {
  const divClass =
    "absolute -bottom-10 md:top-0 -right-[22rem] md:right-8 md:w-72";
  const hoverClass =
    "hidden group-hover:block py-2 px-4 md:py-4 md:px-8 bg-p2 bg-opacity-50 rounded";
  const textClass = "text-white font-josefin text-sm md:text-base font-normal";

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
