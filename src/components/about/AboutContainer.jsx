import { MyAvatar, AboutMe } from ".";

const AboutContainer = () => {
  const divClass =
    "w-4/5 mx-auto h-3/4 flex flex-col md:flex-row justify-around md:justify-between items-center";
    const textClass = "text-white font-bold text-xl font-nunito"

  return (
    <div className="bg-bgAbout w-screen h-screen">
      <div className="flex justify-center py-2 md:py-4">
        <p className={textClass}>About</p>
      </div>
      <div className={divClass}>
        <MyAvatar />

        <AboutMe />
      </div>
    </div>
  );
};

export default AboutContainer;
