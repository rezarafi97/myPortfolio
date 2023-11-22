import { ProjectAvatar, Intro, ProjectsCard } from ".";

const ProjectsContainer = () => {
  const divClass =
    "w-4/5 mx-auto h-screen flex flex-col justify-around items-center";

  return (
    <div className="bg-bgAbout w-screen">
    <div className="flex justify-center py-2 md:py-4">
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
