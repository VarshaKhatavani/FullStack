/**
 * Why same instance of Counter component maintain diffrent state ? 
 * 
 * State Isolation:
 * 
 * Each instance of the Counter component maintains its own state. 
 * When you click the button in one Counter instance, 
 * it only updates the state of that specific instance.

 * Even though the same JSX element (counterElem) is used twice, 
 * React treats each instance separately, 
 * so each Counter component has its own count state.
 * 
 *"When you have multiple instances of a component, 
 * React treats each one as a separate entity with its own state and lifecycle. 
 * This ensures that interactions with one instance do not interfere with another."
 * 
 */

import React from "react";

import "../../utils/reset.css";
import "./styles.css";

function CounterResetApp() {
  const counterElem = <Counter />;

  return (
    <div>
      {/* Render the same instance of Counter component twice */}
      {counterElem}
      {counterElem}
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default CounterResetApp;
