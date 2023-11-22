import { SkillAvatar, SkillsList } from ".";

const SkillsContainer = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center py-2 md:py-4">
        <p className="text-white font-bold text-xl font-nunito">Skills</p>
      </div>
      <div className="h-[90vh] flex flex-col items-center justify-around">
        <SkillAvatar />

        <SkillsList />
      </div>
    </div>
  );
};

export default SkillsContainer;
