/**
 * How to preserve the state ? 
 *
 * In the CounterPreserveApp example, the Counter component is rendered conditionally,
 * but it does not change the key or cause the component to unmount and remount.
 * Therefore, the state of the Counter component is preserved across re-renders.
 * 
 * Key Principles for Preserving State : 
 
 1) Avoid Changing the Key Prop
 2) Consistent Conditional Rendering
 3) Lifting State Up (if necessary)
 */

import React from "react";

import "../../utils/reset.css";
import "./styles.css";

function CounterPreserveApp() {
  const [color, setColor] = React.useState(null);

  return (
    <div>
      {color ? <Counter color={color} /> : <Counter />}

      <label htmlFor="color-picker">
        Select color:
        <input
          id="color-picker"
          type="color"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
      </label>
    </div>
  );
}

function Counter({ color }) {
  const [count, setCount] = React.useState(0);

  return (
    <button style={{ color }} onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

export default CounterPreserveApp;
