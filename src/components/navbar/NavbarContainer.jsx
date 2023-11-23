import { NavbarLogo, NavbarMenu } from ".";

const NavbarContainer = () => {
  return (
    <div className="absolute top-0 left-0 right-0">
      <div className="flex justify-between items-center py-4">
        <NavbarLogo />

        <NavbarMenu />
      </div>
    </div>
  );
};

export default NavbarContainer;
