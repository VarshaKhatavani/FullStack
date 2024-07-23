/**
* The produce function we get from Immer takes two arguments:

* The state we'd like to edit (currentState)
* A callback function ((draftState) => {})

* draftState is a special “wrapped” version of currentState. 
* I like to think of it as a shielded version: Immer is its guardian, and will make sure that the original object is never mutated, 
* no matter what we try to do to this wrapped version.
* 
* After running the code in our callback function, produce will resolve to a brand-new object, with all of the modifications applied.
*/

import React from "react";

import { current, produce } from "immer";

import "../../utils/reset.css";
import "./styles.css";

function AddNumbersReducerApp() {
  const [numbers, setNumbers] = React.useState([0, 1, 2]);

  function handleClick() {
    const nextState = produce(numbers, (draftState) => {
      const nextNumber = numbers.length;
      draftState.push(nextNumber);
      console.log("nextNumber...", nextNumber);

      // Note : you shouldn't ever need to use current in your final production code. It's a tool that exists purely to help you debug, while you're solving the problem at hand.
      console.log("draftState...", current(draftState)); // to console proxy values
    });
    console.log("nextState...", nextState);
    setNumbers(nextState);
  }

  return (
    <>
      <h2>Data contents:</h2>
      <div className="items">{JSON.stringify(numbers)}</div>

      <div className="actions">
        <button onClick={handleClick}>Add next number</button>
      </div>
    </>
  );
}

export default AddNumbersReducerApp;

/**
 * Performance :
 *
 * Fortunately, Immer doesn't do anything as mundane as a deep copy. It does something much more impressive.
 * Immer uses a technique known as structural sharing,
 * and it's made possible using Proxies.
 *
 * Specifically, proxies are special object wrappers that allow us to "intercept" mutations. We wrap the React state in a Proxy, and then when we try to mutate that object, the Proxy swoops in and converts our mutation into an immutable operation.
 *
 * Note :  If Immer was doing a typical “deep copy” operation, everything would be reconstructed from scratch. But thanks to this “structural sharing” magic with Proxies, we only reconstruct the parts of the state that change.
 *
 */
