const AboutMe = () => {
  const textClass = "text-white font-josefin text-base md:text-sm lg:text-base font-normal";
  const bgClass = "bg-gradient-to-tl from-p3 to-p1 py-4 px-8 rounded-3xl";

  return (
    <div className="w-full text-center md:w-1/2">
      <ul className={bgClass}>
        <li>
          <p className={textClass}>I am Reza Rafizadeh.</p>
        </li>
        <li>
          <p className={textClass}>I am 26 years old.</p>
        </li>
        <li>
          <p className={textClass}>I live in Tabriz.</p>
        </li>
        <li>
          <p className={textClass}>
            I have started my journey as a part of the web development community
            in August 2022.
          </p>
        </li>
        <li>
          <p className={textClass}>
            Since then i am working on myself to be more efficient and more
            reliable part of this community.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
