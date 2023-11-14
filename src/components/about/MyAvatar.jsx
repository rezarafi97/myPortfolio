import { me } from "../../assets";

const MyAvatar = () => {
  const imgClass =
    "w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full mx-auto md:mx-0";

  return (
    <div className="hidden md:block w-1/2">
      <img src={me} alt="me" className={imgClass} />
    </div>
  );
};

export default MyAvatar;
