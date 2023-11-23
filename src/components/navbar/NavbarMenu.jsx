const NavbarMenu = () => {
  const divClass = "flex items-center gap-2 md:gap-4";
  const textClass =
    "cursor-pointer text-white font-josefin text-sm md:text-base font-medium hover:text-base hover:md:text-lg";

  const clickHandler = (px) => window.scrollTo({ top: px, behavior: "smooth" });

  return (
    <>
      <ul className={divClass}>
        <li className="w-16 h-8 py-1">
          <p
            className={textClass}
            onClick={() => clickHandler(window.innerHeight)}
          >
            About
          </p>
        </li>
        <li className="w-16 h-8 py-1">
          <p className={textClass} onClick={() => clickHandler(window.innerHeight * 2)}>Skills</p>
        </li>
        <li className="w-16 h-8 py-1">
          <p className={textClass} onClick={() => clickHandler(window.innerHeight * 3)}>Projects</p>
        </li>
        <li className="w-16 h-8 py-1">
          <p className={textClass} onClick={() => clickHandler(window.innerHeight * 4)}>Contact</p>
        </li>
      </ul>
    </>
  );
};

export default NavbarMenu;
