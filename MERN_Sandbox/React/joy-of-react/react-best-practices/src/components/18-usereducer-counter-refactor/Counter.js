import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather";

function reducer(count, action) {
  switch (action.type) {
    case "increment":
      return count + 1;

    case "big-increment":
      return count + 10;

    case "reset":
      return action.initialVal;

    /**
     *  We could directly add logic here,
     * but using this it’s violating the reducer, by changing the value each time
     */
    case "randomize":
      return action.value;

    case "big-decrement":
      return count - 10;

    case "decrement":
      return count - 1;

    default:
      break;
  }
}

function Counter({ initialVal = 0 }) {
  const [count, dispatch] = React.useReducer(reducer, initialVal);

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={() => dispatch({ type: "increment" })}>
          <ChevronUp />
          <span className="visually-hidden">Increase slightly</span>
        </button>
        <button onClick={() => dispatch({ type: "big-increment" })}>
          <ChevronsUp />
          <span className="visually-hidden">Increase a lot</span>
        </button>
        <button onClick={() => dispatch({ type: "reset", initialVal })}>
          <RotateCcw />
          <span className="visually-hidden">Reset</span>
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "randomize",
              value: clamp(Math.ceil(Math.random() * 100), 1, 100),
            });
            // const nextCount = clamp(Math.ceil(Math.random() * 100), 1, 100);
            // setCount(nextCount);
          }}
        >
          <Hash />
          <span className="visually-hidden">Set to random value</span>
        </button>
        <button onClick={() => dispatch({ type: "big-decrement" })}>
          <ChevronsDown />
          <span className="visually-hidden">Decrease a lot</span>
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          <ChevronDown />
          <span className="visually-hidden">Decrease slightly</span>
        </button>
      </div>
    </div>
  );
}

const clamp = (val, min = 0, max = 1) => {
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.max(min, Math.min(max, val));
};

export default Counter;
