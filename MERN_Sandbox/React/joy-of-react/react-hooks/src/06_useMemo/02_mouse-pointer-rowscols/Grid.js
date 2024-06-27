import React from 'react';

import { range } from './utils';

function Grid({ numRows, numCols }) {
  console.info('Grid render');
  
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

export default Grid;