import { me } from "../../assets";

const MyAvatar = () => {
  return (
    <div className="w-1/2">
      <img src={me} alt="me" className="w-96 h-96 rounded-full" />
    </div>
  );
};

export default MyAvatar;
