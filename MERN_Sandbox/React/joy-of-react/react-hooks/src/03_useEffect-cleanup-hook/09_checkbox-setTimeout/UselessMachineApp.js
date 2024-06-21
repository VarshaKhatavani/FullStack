import React from "react";
import VisuallyHidden from "./VisuallyHidden";

import "./reset.css";
import "./styles.css";

function UselessMachineApp() {
  const id = React.useId();
  const [isOn, setIsOn] = React.useState(true);

  React.useEffect(() => {
    // controlling if it's checked then do not update
    if (isOn) {
      return;
    }

    const timeOutId = window.setTimeout(() => {
      console.log("checked");
      setIsOn(true);
    }, 500);

    return () => {
      window.clearTimeout(timeOutId);
    };
  }, [isOn]);
  // [isOn == false] not possible so solution : line no 13

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
