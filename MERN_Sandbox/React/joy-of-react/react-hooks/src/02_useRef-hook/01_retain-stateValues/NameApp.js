import React from "react";
import "./reset.css";
import "./styles.css";

const INITIAL_STATE = { name: "Ivy" };
window.stateValues = [INITIAL_STATE];

function NameApp() {
  const [user, setUser] = React.useState(INITIAL_STATE);

  return (
    <>
      <button
        onClick={() => {
          const nextUser = {
            name: generateNewName(),
          };

          setUser(nextUser);
          // add values to state
          window.stateValues.push(nextUser);
        }}
      >
        Edit name
      </button>

      <div>{JSON.stringify(user, null, 2)}</div>
    </>
  );
}

const NAMES = [
  "Kai",
  "Ivy",
  "Ava",
  "Leo",
  "Ada",
  "Mae",
  "Mia",
  "Anna",
  "Cal",
  "Ram",
  "Sri",
  "Sai",
  "Adi",
  "Jay",
  "Ren",
  "Aoi",
  "Ryo",
];

function generateNewName() {
  return NAMES[Math.floor(Math.random() * NAMES.length)];
}

export default NameApp;
