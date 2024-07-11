import React from "react";

import "../../utils/reset.css";
import "./styles.css";

function CounterResetApp() {
  const counterElem = <Counter />;

  return (
    <div>
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
