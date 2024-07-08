import React from "react";

import Button from "./Button";

import "./reset.css";
import "./styles.css";

function ButtonHoverApp() {
  const buttonRef = React.useRef();

  function logRef() {
    console.log("Captured ref:", buttonRef.current);
  }

  return (
    <Button ref={buttonRef} onMouseEnter={logRef} onFocus={logRef}>
      Hover or Focus Me
    </Button>
  );
}

export default ButtonHoverApp;
