import { Introduction, Avatar } from ".";

const LandingContainer = () => {
  return (
    <div className="h-[91vh] flex justify-between items-center">
      <Introduction />
      <Avatar />
    </div>
  );
};

export default LandingContainer;
