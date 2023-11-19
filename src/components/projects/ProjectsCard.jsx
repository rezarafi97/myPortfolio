import { projects } from "../../data";

const ProjectsCard = () => {
  return (
    <>
      <img src={projects[0].imageURL} alt="ecommerce" className="w-full h-1/3" />
      <div className="flex flex-col justify-between h-2/3">
        <div className="py-4 px-8 ">
          <h3 className="font-nunito text-lg font-medium text-p2">
            {projects[0].title}
          </h3>
          <div className="w-full h-px bg-p2 bg-opacity-50 my-4"></div>
          <p className="font-josefin text-base font-normal text-p2">
          {projects[0].description}
          </p>
        </div>
        <div className="bg-p2 h-12 px-8 flex justify-between items-center">
          <a
            href={projects[0].demo}
            className="font-josefin text-base font-normal text-white hover:text-lg hover:font-medium"
          >
            view demo
          </a>
          <a
            href={projects[0].source}
            className="font-josefin text-base font-normal text-white hover:text-lg hover:font-medium"
          >
            source code
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
