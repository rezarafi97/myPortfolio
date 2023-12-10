import { SkillAvatar, SkillsList } from ".";

const SkillsContainer = () => {
  return (
    <div className="h-[calc(100dvh)]">
      <div className="h-[90vh] flex flex-col items-center justify-around">
        <SkillAvatar />

        <SkillsList />
      </div>
    </div>
  );
};

export default SkillsContainer;
