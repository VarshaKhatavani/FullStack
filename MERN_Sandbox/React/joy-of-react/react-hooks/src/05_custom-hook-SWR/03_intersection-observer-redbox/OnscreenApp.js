import React from "react";
import useIsOnscreen from "./hooks/use-is-onscreen.js";

import "./reset.css";
import "./styles.css";

function OnscreenApp() {
  const [isOnscreen, elementRef] = useIsOnscreen();
  console.log(isOnscreen, elementRef);

  return (
    <>
      <header>Red box visible: {isOnscreen ? "YES" : "NO"}</header>
      <div className="wrapper">
        <div ref={elementRef} className="red box" />
      </div>
    </>
  );
}

export default OnscreenApp;
