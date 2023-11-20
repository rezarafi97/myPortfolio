import { avatar } from "../../assets";

const Avatar = () => {
  const hoverClass =
    "hidden group-hover:block py-4 px-8 bg-p2 bg-opacity-50 rounded";
  const textClass = "text-white font-josefin text-base font-normal";

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
