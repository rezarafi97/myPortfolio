import { NavbarLogo, NavbarMenu } from ".";

const NavbarContainer = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <NavbarLogo />

      <NavbarMenu />
    </div>
  );
};

export default NavbarContainer;
