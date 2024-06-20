import React from "react";

import "./reset.css";
import "./styles.css";

function MouseCoordsApp() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  return (
    <div className="wrapper">
      <p>
        {mousePosition.x} / {mousePosition.y}
      </p>
    </div>
  );
}

export default MouseCoordsApp;
