import { MyAvatar, AboutMe } from ".";

const AboutContainer = () => {
  return (
    <div className="h-screen flex justify-between items-center">
      <MyAvatar />

      <AboutMe />
    </div>
  );
};

export default AboutContainer;
