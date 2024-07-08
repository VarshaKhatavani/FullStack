import React from "react";
import "./reset.css";
import "./styles.css";
import { getAllPrimes } from "./PrimeCalculator";

function PrimeNumApp() {
  // We hold the user's selected number in state.
  const [selectedNum, setSelectedNum] = React.useState(100);
  const [allPrimes, setAllPrimes] = React.useState([]);

  console.log("Prime Calculator");

  // We calculate all of the prime numbers between 0 and the
  // user's chosen number, `selectedNum`:
  console.log(selectedNum);

  React.useEffect(() => {
    setAllPrimes(getAllPrimes(selectedNum));
  }, [selectedNum]);

  return (
    <>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          id="num"
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // To prevent computers from exploding,
            // we'll max out at 100k
            const num = Math.min(100_000, Number(event.target.value));
            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  );
}

// Helper function that calculates whether a given
// number is prime or not.
export default PrimeNumApp;
