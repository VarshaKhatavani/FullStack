import React from "react";
import VisuallyHidden from "./VisuallyHidden";

import "./reset.css";
import "./styles.css";

function UselessMachineApp() {
  const id = React.useId();
  const [isOn, setIsOn] = React.useState(true);

  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={(event) => {
          setIsOn(event.target.checked);
        }}
      />
      <VisuallyHidden>
        <label htmlFor={id}>Toggle checkbox</label>
      </VisuallyHidden>
    </>
  );
}

export default UselessMachineApp;
