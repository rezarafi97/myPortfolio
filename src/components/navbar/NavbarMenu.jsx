const NavbarMenu = () => {
  const divClass = "flex items-center gap-4 md:gap-8";
  const textClass =
    "cursor-pointer text-white font-josefin text-sm md:text-base font-medium hover:animate-bounce";

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
    </>
  );
};

export default NavbarMenu;
