import React from "react";
import useMousePosition from "./hooks/use-mouse-position";

import "./reset.css";
import "./styles.css";

// TODO: Pull the mouse-position logic into
// the use-mouse-position.js file!

function MousePositionApp() {
  const mousePosition = useMousePosition();

  return (
    <div className="wrapper">
      <p>
        {mousePosition.x} / {mousePosition.y}
      </p>
    </div>
  );
}

export default MousePositionApp;
