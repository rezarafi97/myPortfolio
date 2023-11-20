import { ProjectAvatar, Intro, ProjectsCard } from ".";

const ProjectsContainer = () => {
  const divClass =
    "w-4/5 mx-auto h-screen flex flex-col justify-around items-center";

  return (
    <div className="bg-bgAbout w-screen">
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
