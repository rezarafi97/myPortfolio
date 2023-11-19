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
  const iconClass = "w-8 h-8 lg:w-12 lg:h-12";

  return (
    <ul className="w-full flex items-center justify-center flex-wrap gap-x-16 gap-8">
      <li>
        <img src={html} alt="html" className={iconClass} />
      </li>
      <li>
        <img src={css} alt="css" className={iconClass} />
      </li>
      <li>
        <img src={tailwindcss} alt="tailwindcss" className={iconClass} />
      </li>
      <li>
        <img src={bootstrap} alt="bootstrap" className={iconClass} />
      </li>
      <li>
        <img src={javascript} alt="javascript" className={iconClass} />
      </li>
      <li>
        <img src={typescript} alt="typescript" className={iconClass} />
      </li>
      <li>
        <img src={git} alt="git" className={iconClass} />
      </li>
      <li>
        <img src={github} alt="github" className={iconClass} />
      </li>
      <li>
        <img src={react} alt="react" className={iconClass} />
      </li>
      <li>
        <img src={redux} alt="redux" className={iconClass} />
      </li>
      <li>
        <img src={nextjs} alt="nextjs" className={iconClass} />
      </li>
    </ul>
  );
};

export default SkillsList;
