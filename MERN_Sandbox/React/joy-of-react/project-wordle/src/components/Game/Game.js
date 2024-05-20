import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [inputWord, setInputWord] = React.useState("");

  const handleInput = (e) => {
    e.preventDefault();
    console.log(inputWord);
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleInput}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={inputWord}
          onChange={(e) => {
            let userInput = e.target.value;
            setInputWord(userInput.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default Game;
