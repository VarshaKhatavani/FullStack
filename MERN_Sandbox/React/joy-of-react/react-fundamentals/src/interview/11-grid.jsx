import { range } from "../utils/range";
import "../interview/11-grid.css";

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {/* TODO */}
      {range(numRows).map((rowIndex) => (
        <div key={rowIndex} className="row">
          {/* {rowIndex} */}
          {range(numCols).map((colIndex) => (
            <div key={colIndex} className="cell">
              {/*{colIndex} */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
