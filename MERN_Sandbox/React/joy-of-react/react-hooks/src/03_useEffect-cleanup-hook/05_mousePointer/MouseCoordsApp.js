import React from "react";

import "./reset.css";
import "./styles.css";

function MouseCoordsApp() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="wrapper">
      <p>
        {mousePosition.x} / {mousePosition.y}
      </p>
    </div>
  );
}

export default MouseCoordsApp;
