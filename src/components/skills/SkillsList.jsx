import {
  css,
  html,
  javascript,
  typescript,
  react,
  redux,
  tailwindcss,
  bootstrap,
  nextjs,
  git,
  github,
} from "../../assets";

const SkillsList = () => {
  return (
    <ul className="w-full flex items-center flex-wrap gap-8">
      <li>
        <img src={html} alt="html" className="w-12 h-12" />
      </li>
      <li>
        <img src={css} alt="css" className="w-12 h-12" />
      </li>
      <li>
        <img src={tailwindcss} alt="tailwindcss" className="w-12 h-12" />
      </li>
      <li>
        <img src={bootstrap} alt="bootstrap" className="w-12 h-12" />
      </li>
      <li>
        <img src={javascript} alt="javascript" className="w-12 h-12" />
      </li>
      <li>
        <img src={typescript} alt="typescript" className="w-12 h-12" />
      </li>
      <li>
        <img src={git} alt="git" className="w-12 h-12" />
      </li>
      <li>
        <img src={github} alt="github" className="w-12 h-12" />
      </li>
      <li>
        <img src={react} alt="react" className="w-12 h-12" />
      </li>
      <li>
        <img src={redux} alt="redux" className="w-12 h-12" />
      </li>
      <li>
        <img src={nextjs} alt="nextjs" className="w-12 h-12" />
      </li>
    </ul>
  );
};

export default SkillsList;
