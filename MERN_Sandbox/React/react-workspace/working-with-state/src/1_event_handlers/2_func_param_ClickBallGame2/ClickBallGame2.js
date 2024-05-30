import React from "react";
import "./reset.css";
import "./styles.css";
import VisuallyHidden from "./VisuallyHidden";

function ClickBallGame2() {
  function handleClick(type) {
    if (type === "win") {
      alert("You win!");
    } else {
      alert("You lose :(");
    }
  }

  return (
    <div className="wrapper">
      <button className="ball" onClick={() => handleClick("win")}>
        <VisuallyHidden>Ball</VisuallyHidden>
      </button>
      <button className="bomb" onClick={handleClick}>
        <span role="img" aria-label="bomb">
          💣
        </span>
      </button>
    </div>
  );
}

export default ClickBallGame2;
