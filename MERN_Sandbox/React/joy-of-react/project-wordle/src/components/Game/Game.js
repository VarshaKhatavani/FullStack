import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [inputGuessList, setInputGuessList] = React.useState([]);

  const handleSubmitGuess = (inputWord) => {
    setInputGuessList([...inputGuessList, inputWord]);
  };

  return (
    <>
      {/* Display Result */}
      <GuessResult guessList={inputGuessList} answer={answer} />
      {/* Input Form mentioned in this component  */}
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
