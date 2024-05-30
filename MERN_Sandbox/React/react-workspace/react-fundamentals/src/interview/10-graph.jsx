import React from "react";
import "./10-graph.css";
import { range } from "../utils/range";

function Graph({ from, to }) {
  return (
    <div className="graph">
      {/* <div className="peg">0</div>
      <div className="peg">10</div>
      <div className="peg">20</div> */}
      {range(from, to, 5).map((num) => (
        <div className="peg">{num}</div>
      ))}
    </div>
  );
}

export default Graph;
