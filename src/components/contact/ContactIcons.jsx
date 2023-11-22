import { gmail, linkedin, phone, github01 } from "../../assets";

const ContactIcons = () => {
  const spanClass = "font-josefin text-white font-normal text-sm";

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
      <li className="flex gap-2 items-center">
        <img src={gmail} className="w-6 h-6 md:w-8 md:h-8" />
        <span className={spanClass}>
          <a href="mailto: rezarafi901@gmail.com">rezarafi901@gmail.com</a>
        </span>
      </li>
      <li className="flex gap-2 items-center">
        <img src={linkedin} className="bg-white rounded w-6 h-6 md:w-8 md:h-8" />
        <span className={spanClass}>
          <a href="https://www.linkedin.com/in/reza-rafi-375279174">
            www.linkedin.com/in/reza-rafi-375279174
          </a>
        </span>
      </li>
      <li className="flex gap-2 items-center">
        <img src={phone} className="bg-white rounded w-6 h-6 md:w-8 md:h-8" />
        <span className={spanClass}>
          <p className="cursor-pointer">+989021125155</p>
        </span>
      </li>
      <li className="flex gap-2 items-center">
        <img src={github01} className="w-6 h-6 md:w-8 md:h-8" />
        <span className={spanClass}>
          <a href="https://github.com/rezarafi97">github.com/rezarafi97</a>
        </span>
      </li>
    </ul>
  );
};

export default ContactIcons;
