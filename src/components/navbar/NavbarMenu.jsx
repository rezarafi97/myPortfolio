import { useState } from "react";

const NavbarMenu = () => {
  const [state, setState] = useState(false);

  const divClass = `flex items-center gap-4 md:gap-8 transition-opacity ${
    state ? "opacity-100" : "opacity-0"
  } opacity-0 md:opacity-100`;
  const textClass =
    "cursor-pointer text-white font-josefin text-sm md:text-base font-medium hover:animate-bounce";
  const burger01Class = `w-6 h-[1.5px] bg-white my-1 transition-transform ${
    state ? "rotate-45 translate-y-1" : null
  }`;
  const burger02Class = `w-6 h-[1.5px] bg-white my-1 transition-opacity ${
    state ? "opacity-0" : null
  }`;
  const burger03Class = `w-6 h-[1.5px] bg-white my-1 transition-transform ${
    state ? "-rotate-45 -translate-y-2" : null
  }`;

  const clickHandler = (px) => window.scrollTo({ top: px, behavior: "smooth" });

  return (
    <>
      <ul className={divClass}>
        <li className="h-8 py-1">
          <p
            className={textClass}
            onClick={() => clickHandler(window.innerHeight)}
          >
            About
          </p>
        </li>
        <li className="h-8 py-1">
          <p
            className={textClass}
            onClick={() => clickHandler(window.innerHeight * 2)}
          >
            Skills
          </p>
        </li>
        <li className="h-8 py-1">
          <p
            className={textClass}
            onClick={() => clickHandler(window.innerHeight * 3)}
          >
            Projects
          </p>
        </li>
        <li className="h-8 py-1">
          <p
            className={textClass}
            onClick={() => clickHandler(window.innerHeight * 4)}
          >
            Contact
          </p>
        </li>
      </ul>
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setState((prev) => !prev)}
      >
        <div className={burger01Class}></div>
        <div className={burger02Class}></div>
        <div className={burger03Class}></div>
      </div>
    </>
  );
};

export default NavbarMenu;
