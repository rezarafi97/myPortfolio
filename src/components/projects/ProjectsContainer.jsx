import { ProjectAvatar, Intro, ProjectsCard } from ".";

const ProjectsContainer = () => {
  const divClass =
    "w-4/5 h-screen mx-auto flex flex-col justify-around items-center gap-6";

  return (
    <div className="bg-bgAbout w-screen h-screen">
      <div className={divClass}>
        <div className="flex gap-4 items-center group">
          <ProjectAvatar />

          <Intro />
        </div>

        <ProjectsCard />
      </div>
    </div>
  );
};

export default ProjectsContainer;
