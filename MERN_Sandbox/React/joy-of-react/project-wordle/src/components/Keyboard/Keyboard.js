import React from "react";

const Rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getLettersStatus() {}

const Keyboard = ({ validatedGuesses }) => {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {Rows.map((letter) => {
          return <div className="letter correct">{letter}</div>;
        })}
      </div>
    </div>
  );
};

export default Keyboard;
