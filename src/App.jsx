import { LandingContainer } from "./components/landing";
import { NavbarContainer } from "./components/navbar";
import { AboutContainer } from "./components/about";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-p3 to-p1">
      <div className="container w-4/5 mx-auto">
        <NavbarContainer />

        <LandingContainer />

        <AboutContainer />
      </div>
    </div>
  );
};

export default App;
