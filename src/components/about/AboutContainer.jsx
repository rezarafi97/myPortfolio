import { MyAvatar, AboutMe } from ".";

const AboutContainer = () => {
  const divClass =
    "w-4/5 mx-auto h-screen flex flex-col md:flex-row justify-around md:justify-between items-center";

  return (
    <div className="bg-bgAbout w-screen">
      <div className="flex justify-center py-2 md:py-4">
        <p className="text-white font-bold text-xl font-nunito">About</p>
      </div>
      <div className={divClass}>
        <MyAvatar />

        <AboutMe />
      </div>
    </div>
  );
};

export default AboutContainer;
