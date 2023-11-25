import { LandingContainer } from "./components/landing";
import { NavbarContainer } from "./components/navbar";
import { AboutContainer } from "./components/about";
import { SkillsContainer } from "./components/skills";
import { ProjectsContainer } from "./components/projects";
import { ContactContainer } from "./components/contact";
import { Footer } from "./components/footer";
import { useState, useEffect } from "react";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(window.innerHeight);
  const [title, setTitle] = useState("");

  const scrollHandler = () => {
    setScrollY(window.scrollY);
  };

  const resizeHandler = () => {
    setVh(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);

      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    if (scrollY < vh) {
      setTitle("");
    } else if (scrollY > vh && scrollY < 2 * vh) {
      setTitle("About");
    } else if (scrollY > 2 * vh && scrollY < 3 * vh) {
      setTitle("Skills");
    } else if (scrollY > 3 * vh && scrollY < 4 * vh) {
      setTitle("Projects");
    } else if (scrollY > 4 * vh) {
      setTitle("Contact");
    }
  }, [scrollY, vh]);

  return (
    <div className="bg-gradient-to-br from-p3 to-p1 overflow-x-hidden">
      {title ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-4 text-p2 fixed top-7 right-0"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
          <div className="fixed top-4 right-4 bg-p2 px-4 py-2 rounded">
            <p className="text-white">{title}</p>
          </div>
        </>
      ) : null}
      <div className="container w-4/5 mx-auto relative">
        <NavbarContainer />

        <LandingContainer />
      </div>

      <AboutContainer />

      <div className="container w-4/5 mx-auto">
        <SkillsContainer />
      </div>

      <ProjectsContainer />

      <div className="container w-4/5 mx-auto">
        <ContactContainer />
      </div>

      <Footer />
    </div>
  );
};

export default App;
