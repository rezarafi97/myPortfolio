import { SkillAvatar, SkillsList } from ".";

const SkillsContainer = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-around">
      <SkillAvatar />

      <SkillsList />
    </div>
  );
};

export default SkillsContainer;
