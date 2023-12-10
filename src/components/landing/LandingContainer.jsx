import { Introduction, Avatar } from ".";

const LandingContainer = () => {
  return (
    <div>
      <div className="h-[calc(100dvh)] flex justify-between items-center">
        <Introduction />
        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
