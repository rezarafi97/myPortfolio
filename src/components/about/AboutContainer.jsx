import { MyAvatar, AboutMe } from ".";

const AboutContainer = () => {
  const divClass =
    "w-4/5 mx-auto h-screen flex flex-col md:flex-row justify-around md:justify-between items-center";

  return (
    <div className="bg-bgAbout w-screen">
      <div className={divClass}>
        <MyAvatar />

        <AboutMe />
      </div>
    </div>
  );
};

export default AboutContainer;
