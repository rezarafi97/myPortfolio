import { avatar } from "../../assets";

const Avatar = () => {
  return (
    <div className="group relative">
      <img src={avatar} alt="avatar" className="w-56 h-56 lg:w-96 lg:h-96 mx-auto" />
      <div className="absolute -top-14">
        <div className="hidden group-hover:block py-4 px-8 bg-p2 bg-opacity-50 rounded">
          <p className="text-white font-josefin text-base font-normal">
            I overthink about my profession
          </p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
