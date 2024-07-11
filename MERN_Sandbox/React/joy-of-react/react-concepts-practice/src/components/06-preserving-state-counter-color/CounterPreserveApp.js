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
