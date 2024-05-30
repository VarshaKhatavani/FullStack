export function checkGuess(guess, answer) {
  console.log("guess...", guess);
  console.log("answer...", answer);
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = "✓";

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  console.log(guessChars); // ['D', 'U', 'B', 'A', 'I']
  const answerChars = answer.split("");
  console.log(answerChars); //  ['P', 'I', 'A', 'N', 'O']

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: "correct",
      };

      // [
      //   { letter: "L", status: "correct", },
      //   { letter: "I", status: "correct", },
      //   { letter: "G", status: "correct", },
      //   { letter: "H", status: "correct", },
      //   { letter: "T", status: "correct", },
      // ];

      /** Iteration 1: D != P, no match.
          Iteration 2: U != I, no match.
          Iteration 3: B != A, no match.
          Iteration 4: A != N, no match.
          Iteration 5: I != O, no match.
          No correct letters found, result remains []. */

      answerChars[i] = SOLVED_CHAR; /*["✓", "✓", "✓", "✓", "✓"];*/
      /*["L", "I", "✓", "✓", "✓"];*/
      guessChars[i] = SOLVED_CHAR; /*["✓", "✓", "✓", "✓", "✓"];*/
      /*["H", "E", "✓", "✓", "✓"];*/
    }
  }

  console.log(result);
  console.log(answerChars);
  console.log(guessChars);

  console.log("Incorrect and missplaced............");

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = "incorrect";
    // check if entered letters are available in answer arrays
    // if available then sends index of that letter
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    console.log(misplacedIndex);
    if (misplacedIndex >= 0) {
      status = "misplaced";
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }
    console.log(answerChars); // check if char is misplaced found in string
    //  ["✓", "✓", "✓", "✓", "✓"];

    /**Iteration 1: D is not found in answerChars, marked as incorrect.
    Iteration 2: U is not found in answerChars, marked as incorrect.
    Iteration 3: B is not found in answerChars, marked as incorrect.
    Iteration 4: A is found at index 2 in answerChars, marked as misplaced, answerChars updated to ['P', 'I', '✓', 'N', 'O'].
    Iteration 5: I is found at index 1 in answerChars, marked as misplaced, answerChars updated to ['P', '✓', '✓', 'N', 'O']. */

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }
  console.log(result);

  return result;
}
