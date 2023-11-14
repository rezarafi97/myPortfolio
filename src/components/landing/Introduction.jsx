const Introduction = () => {
  const listClass = "text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl font-semibold my-4";
  const spanClass = "text-p1 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold";

  return (
    <div className="my-16 lg:my-0">
      <ul className="bg-gradient-to-tl from-p4 to-p5 py-4 px-8 rounded-3xl">
        <li className={listClass}>
          I am <span className={spanClass}>Reza</span>
        </li>
        <li className={listClass}>
          I am <span className={spanClass}>Front End Developer</span>
        </li>
        <li className={listClass}>I develop modern, visually appealing</li>
        <li className={listClass}>and user-friendly web applications</li>
      </ul>
    </div>
  );
};

export default Introduction;
