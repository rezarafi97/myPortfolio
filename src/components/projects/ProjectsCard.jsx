import { useState } from "react";

import { projects } from "../../data";
import { Card } from ".";

const ProjectsCard = () => {
  const [index, setIndex] = useState(1);

  const divClass =
    "w-80 h-80 lg:w-96 lg:h-96 bg-white bg-opacity-50 rounded overflow-hidden";
  const textClass = "text-white font-josefin text-base font-normal";

  const prevHandler = () => {
    if (index > 1) {
      setIndex((prev) => prev - 1);
    }
  };

  const nextHandler = () => {
    if (index < projects.length) {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div className={divClass}>
        <Card p={projects[index - 1]} />
      </div>

      <div className="flex justify-center my-2 lg:my-4 gap-4">
        <button
          onClick={prevHandler}
          className={`${textClass} disabled:text-p2`}
          disabled={index === 1}
        >
          prev
        </button>
        <div>
          <span className={textClass}>{index} </span>
          <span className={textClass}>/ </span>
          <span className={textClass}>{projects.length}</span>
        </div>
        <button
          onClick={nextHandler}
          className={`${textClass} disabled:text-p2`}
          disabled={index === projects.length}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default ProjectsCard;
