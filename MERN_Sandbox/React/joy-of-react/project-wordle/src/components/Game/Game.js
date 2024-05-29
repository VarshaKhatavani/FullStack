import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");
  const [inputGuessList, setInputGuessList] = React.useState([]);

  const handleSubmitGuess = (inputWord) => {
    const nextGuesses = [...inputGuessList, inputWord];
    setInputGuessList(nextGuesses);

    console.log("nextGuesses....", nextGuesses);

    if (inputWord === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      {/* Display Result */}
      {gameStatus}
      <GuessResult guessList={inputGuessList} answer={answer} />
      {/* Input Form mentioned in this component  */}
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      {gameStatus === "won" && (
        <WonBanner noOfGuesses={inputGuessList.length} />
      )}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
