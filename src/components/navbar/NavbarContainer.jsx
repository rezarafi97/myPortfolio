import { NavbarLogo, NavbarMenu } from ".";

const NavbarContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
      <NavbarLogo />

      <NavbarMenu />
    </div>
    </div>
  );
};

export default NavbarContainer;
