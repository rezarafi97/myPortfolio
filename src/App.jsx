import { LandingContainer } from "./components/landing";
import { NavbarContainer } from "./components/navbar";
import { AboutContainer } from "./components/about";
import { SkillsContainer } from "./components/skills";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-p3 to-p1 overflow-x-hidden">
      <div className="container w-4/5 mx-auto">
        <NavbarContainer />

        <LandingContainer />
      </div>

      <AboutContainer />

      <div className="container w-4/5 mx-auto">
        <SkillsContainer />
      </div>
    </div>
  );
};

export default App;
