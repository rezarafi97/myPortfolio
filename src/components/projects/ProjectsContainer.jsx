import { ProjectAvatar, Intro, ProjectsContent } from ".";

const ProjectsContainer = () => {
  const divClass =
    "w-4/5 mx-auto h-screen flex flex-col justify-around items-center";

  return (
    <div className="bg-bgAbout w-screen">
      <div className={divClass}>
        <div className="flex gap-4 items-center">
          <ProjectAvatar />
          <Intro />
        </div>
        
        <ProjectsContent />
      </div>
    </div>
  );
};

export default ProjectsContainer;
