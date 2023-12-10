import { useState, useEffect } from "react";
import { Introduction, Avatar } from ".";

function getWindowDimensions() {
  const { innerHeight: height } = window;
  return {
    height,
  };
}

const LandingContainer = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="fixed">
        {windowDimensions.height}
      </div>
      <div className="h-screen flex justify-between items-center">
        <Introduction />
        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
