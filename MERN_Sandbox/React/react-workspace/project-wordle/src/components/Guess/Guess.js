import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

// add Letters with class name
function GenerateStyledCell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  let result = checkGuess(value, answer);
  console.log("result");
  console.log(result);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <GenerateStyledCell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />

        // <span key={num} className="cell">
        //   {" "}
        //   {/** className : cell misplaced, cell incorrect,cell correct */}
        //   {value ? value[num] : undefined}
        // </span>
      ))}
    </p>
  );
}

export default Guess;
