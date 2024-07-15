import React from "react";

import Counter from "./Counter";

import "../../utils/reset.css";
import "./styles.css";

function CounterApp() {
  return (
    <>
      <Counter initialVal={10} />
    </>
  );
}

export default CounterApp;
