import React from "react";

import "./reset.css";
import "./styles.css";

function WindowSizeApp() {
  const [windowDimensions, setWindowDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    function handleWindowSize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleWindowSize);
  }, []);

  return (
    <div className="wrapper">
      <p>
        {windowDimensions.width} / {windowDimensions.height}
      </p>
    </div>
  );
}

export default WindowSizeApp;
