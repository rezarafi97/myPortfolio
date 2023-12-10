import { Introduction, Avatar } from ".";

const LandingContainer = () => {
  return (
    <div>
      <div className="h-screen flex justify-between items-center">
        <Introduction />
        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
