import React from "react";
import WindowSize from "./WindowResize";
import "./reset.css";
import "./styles.css";

function WindowSizeApp() {
  const [isTrackingWindowSize, setIsTrackingWindowSize] = React.useState(true);

  function toggleWindowSize() {
    setIsTrackingWindowSize(!isTrackingWindowSize);
  }

  return (
    <div className="wrapper">
      <button onClick={toggleWindowSize}>Toggle Window Size</button>
      {isTrackingWindowSize && <WindowSize />}
    </div>
  );
}

export default WindowSizeApp;
