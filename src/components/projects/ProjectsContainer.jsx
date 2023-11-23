import { ProjectAvatar, Intro, ProjectsCard } from ".";

const ProjectsContainer = () => {
  const divClass =
    "w-4/5 h-4/5 mx-auto flex flex-col justify-between items-center gap-6";

  return (
    <div className="bg-bgAbout w-screen h-screen">
      <div className="flex justify-center py-2 md:pt-4 md:pb-12">
        <p className="text-white font-bold text-xl font-nunito">Projects</p>
      </div>
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
