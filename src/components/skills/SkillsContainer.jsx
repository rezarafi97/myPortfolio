import { SkillAvatar, SkillsList } from ".";

const SkillsContainer = () => {
  const textClass = "text-white font-bold text-xl font-nunito";

  return (
    <div className="h-screen">
      <div className="flex justify-center py-2 md:py-4">
        <p className={textClass}>Skills</p>
      </div>
      <div className="h-[90vh] flex flex-col items-center justify-around">
        <SkillAvatar />

        <SkillsList />
      </div>
    </div>
  );
};

export default SkillsContainer;
