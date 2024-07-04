import React from "react";

import { range } from "./utils";

function Grid({ numRows, numCols }) {
  console.info("Grid render");

  return (
    <div className="grid-wrapper">
      {range(numRows).map((rowIndex) => (
        <div key={rowIndex} className="row">
          {range(numCols).map((colIndex) => (
            <div key={colIndex} className="cell" />
          ))}
        </div>
      ))}
    </div>
  );
}

export default React.memo(Grid);

/**
 * React.memo is a higher-order component that is used to optimize the rendering
 * performance of React components.
 *
 * It helps to prevent unnecessary re-renders by performing a shallow comparison of the props.
 * If the props have not changed, the component will not re-render.
 */
