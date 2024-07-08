import React from "react";
import Grid from "./Grid";

import "./reset.css";
import "./styles.css";

function MousePositionApp() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const [numRows, setNumRows] = React.useState(12);
  const [numCols, setNumCols] = React.useState(12);

  const id = React.useId();

  React.useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <form>
        <div>
          <label htmlFor={`${id}-rows`}>Rows:</label>
          <input
            id={`${id}-rows`}
            type="range"
            value={numRows}
            onChange={(event) => setNumRows(event.target.value)}
            min={5}
            max={40}
          />
        </div>
        <p>
          {mousePosition.x} / {mousePosition.y}
        </p>
        <div>
          <label htmlFor={`${id}-cols`}>Columns:</label>
          <input
            id={`${id}-cols`}
            type="range"
            value={numCols}
            onChange={(event) => setNumCols(event.target.value)}
            min={5}
            max={40}
          />
        </div>
      </form>

      <Grid numRows={numRows} numCols={numCols} />
    </>
  );
}

export default MousePositionApp;
