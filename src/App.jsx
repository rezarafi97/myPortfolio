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

  // useEffect(() => {
  //   console.log("scrollY: " + scrollY);

  //   console.log("vh: " + vh);
  // }, [scrollY, vh]);

  return (
    <div className="bg-gradient-to-br from-p3 to-p1 overflow-x-hidden">
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
