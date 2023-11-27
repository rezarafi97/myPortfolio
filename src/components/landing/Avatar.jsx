import { avatar } from "../../assets";

const Avatar = () => {
  const hoverClass =
    "bg-opacity-0 group-hover:bg-opacity-50 py-4 px-8 bg-p2 rounded transition group-hover:transition-opacity";
  const textClass =
    "opacity-0 group-hover:opacity-100 text-white font-josefin text-base font-normal transition group-hover:transition-opacity";

  return (
    <div className="group relative">
      <img src={avatar} alt="avatar" className="w-56 h-56 lg:w-96 lg:h-96" />
      <div className="absolute -top-14">
        <div className={hoverClass}>
          <p className={textClass}>I overthink about my profession</p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
