const NavbarMenu = () => {
  const divClass = "hidden md:flex items-center gap-4";
  const textClass =
    "cursor-pointer text-white font-josefin text-base font-medium hover:text-lg";

  // const clickHandler = (px) => window.scrollTo({ top: px, behavior: "smooth" });

  return (
    <>
      <ul className={divClass}>
        <li className="w-16 h-8 py-1">
          <p
            className={textClass}
          >
            About
          </p>
        </li>
        <li className="w-16 h-8 py-1">
          <p className={textClass}>Skills</p>
        </li>
        <li className="w-16 h-8 py-1">
          <p className={textClass}>Projects</p>
        </li>
        <li className="w-16 h-8 py-1">
          <p className={textClass}>Contact</p>
        </li>
      </ul>
    </>
  );
};

export default NavbarMenu;
