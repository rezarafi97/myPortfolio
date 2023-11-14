import { Introduction, Avatar } from ".";

const LandingContainer = () => {
  return (
    <div className="h-[91vh] flex justify-between items-center">
      <Introduction />
      <div className="hidden md:block">
        <Avatar />
      </div>
    </div>
  );
};

export default LandingContainer;
