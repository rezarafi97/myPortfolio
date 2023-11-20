import { me } from "../../assets";

const MyAvatar = () => {
  const imgClass =
    "md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full md:mx-0";

  return (
    <div className="hidden md:block w-1/2">
      <img src={me} alt="me" className={imgClass} />
    </div>
  );
};

export default MyAvatar;
