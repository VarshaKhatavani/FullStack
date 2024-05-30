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
      {Rows.map((row, index) => {
        return (
          <div className="keyboard-row" key={index}>
            {row.map((letter) => {
              return (
                <div key={letter} className="letter">
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
