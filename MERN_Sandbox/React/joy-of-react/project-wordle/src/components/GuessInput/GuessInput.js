import React from "react";

const GuessInput = ({ handleSubmitGuess, gameStatus }) => {
  const [inputWord, setInputWord] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // calling parent function
    handleSubmitGuess(inputWord); // passing data in parent component
    setInputWord("");
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          disabled={gameStatus !== "running"}
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
};

export default GuessInput;
