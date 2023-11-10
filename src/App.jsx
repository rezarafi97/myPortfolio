import { LandingContainer } from "./components/landing";
import { NavbarContainer } from "./components/navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-p3 to-p1">
      <div className="container w-4/5 mx-auto">
        <NavbarContainer />

        <LandingContainer />
      </div>
    </div>
  );
};

export default App;
