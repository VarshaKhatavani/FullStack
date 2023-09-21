import { useEffect, useState } from "react";

export default function Ueffect() {
  // Initializing state variable 'count' with an initial value of 0
  let [count, setCount] = useState(0);
  let [text, setText] = useState("");

  // Event handler function to increment 'count' when a button is clicked
  let handleClick = () => {
    setCount(count + 1);
  };

  let handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("inside useffect");
    document.title = `value of count is ${count}`;
  }, [count]);

  return (
    <>
      <h1>Hello, I am use effect component</h1>
      <div>
        <h3> Count is : {count}</h3>
        <button onClick={handleClick}>Increment Count</button>

        <h2>Form</h2>
        <input type="text" onChange={handleChange} value={text}></input>

        <h3>{text}</h3>
      </div>
    </>
  );
}
