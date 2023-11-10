const NavbarMenu = () => {
  const listClass =
    "cursor-pointer text-white font-josefin text-base font-medium hover:text-lg";
  return (
    <>
      <ul className="hidden md:flex items-center gap-4">
        <li className="w-16 h-8 py-1">
          <p className={listClass}>About</p>
        </li>
        <li className="w-16 h-8 py-1">
          <p className={listClass}>Skills</p>
        </li>
        <li className="w-16 h-8 py-1">
          <p className={listClass}>Projects</p>
        </li>
        <li className="w-16 h-8 py-1">
          <p className={listClass}>Contact</p>
        </li>
      </ul>
    </>
  );
};

export default NavbarMenu;
