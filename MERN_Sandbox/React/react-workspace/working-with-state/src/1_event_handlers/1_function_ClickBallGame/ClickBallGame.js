import React from "react";

import VisuallyHidden from "./VisuallyHidden";
import "./reset.css";
import "./styles.css";

function ClickBallGame() {
  const handleClick = () => {
    alert("you have click on red ball!");
  };

  return (
    <div className="wrapper">
      <button className="ball" onClick={handleClick}>
        <VisuallyHidden>Ball</VisuallyHidden>
      </button>
      <button className="ball-green" onClick={() => alert("you win!")}>
        <VisuallyHidden>Ball</VisuallyHidden>
      </button>
    </div>
  );
}

export default ClickBallGame;
