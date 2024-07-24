import React from "react";

import Counter from "./Counter";

import "../../utils/reset.css";
import "./styles.css";

function CounterReducerApp() {
  return (
    <>
      <Counter initialVal={10} />
    </>
  );
}

export default CounterReducerApp;
