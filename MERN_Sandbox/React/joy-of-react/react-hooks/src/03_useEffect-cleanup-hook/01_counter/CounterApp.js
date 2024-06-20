import React from "react";
import Counter from "./Counter";

import "./reset.css";
import "./styles.css";

function CounterApp() {
  const [name, setName] = React.useState("Yuka");

  return (
    <>
      <Counter name={name} />
    </>
  );
}

export default CounterApp;
