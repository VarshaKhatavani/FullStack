import React from "react";

import "./reset.css";
import "./styles.css";

function MouseCoordsApp() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = React.useState(true);

  React.useEffect(() => {
    if (isEnabled) {
      function handleMouseMove(event) {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
      window.addEventListener("mousemove", handleMouseMove);

      //cleanup function
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isEnabled]);

  function toggleMouseTracking() {
    setIsEnabled(!isEnabled);
  }

  return (
    <div className="wrapper">
      <button onClick={toggleMouseTracking}>
        Mouse Tracking: {isEnabled ? "On" : "Off"}
      </button>
      <p>
        {mousePosition.x} / {mousePosition.y}
      </p>
    </div>
  );
}

export default MouseCoordsApp;
