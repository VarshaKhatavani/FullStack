import React from "react";

import Counter from "./Counter";

import "../../utils/reset.css";
import "./styles.css";

function App() {
  return (
    <>
      <Counter initialVal={10} />
    </>
  );
}

export default App;
