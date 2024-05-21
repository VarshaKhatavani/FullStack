import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  let res = checkGuess(value, answer);
  console.log(res);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {" "}
          {/** className : cell misplaced, cell incorrect,cell correct */}
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
