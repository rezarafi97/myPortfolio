import { blob } from "../../assets";

const Introduction = () => {
  const listClass = "text-white font-nunito text-2xl font-semibold my-4";
  const spanClass = "text-p1 text-3xl font-bold";

  return (
    <div className="relative">
      <img src={blob} alt="blob" className="w-[65%] h-[65%]" />
      <ul className="absolute top-40 left-24">
        <li className={listClass}>
          I am <span className={spanClass}>Reza</span>
        </li>
        <li className={listClass}>
          I am <span className={spanClass}>Front End Developer</span>
        </li>
        <li className={listClass}>I develop modern, visually appealing</li>
        <li className={listClass}>and user-friendly web applications</li>
      </ul>
    </div>
  );
};

export default Introduction;
