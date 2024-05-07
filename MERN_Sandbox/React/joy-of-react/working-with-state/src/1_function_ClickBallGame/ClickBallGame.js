import React from "react";

import VisuallyHidden from "./VisuallyHidden";
import "./reset.css";
import "./styles.css";

function ClickBallGame() {
  return (
    <div className="wrapper">
      <button className="ball">
        <VisuallyHidden>Ball</VisuallyHidden>
      </button>
    </div>
  );
}

export default ClickBallGame;
