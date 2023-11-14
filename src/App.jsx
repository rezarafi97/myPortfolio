import { LandingContainer } from "./components/landing";
import { NavbarContainer } from "./components/navbar";
import { AboutContainer } from "./components/about";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-p3 to-p1 overflow-x-hidden">
      <div className="container w-4/5 mx-auto">
        <NavbarContainer />

        <LandingContainer />
      </div>
      
      <AboutContainer />
    </div>
  );
};

export default App;
