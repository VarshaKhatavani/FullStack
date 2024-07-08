import React from "react";

function ClockToggle({ handleToggle }) {
  console.info("ClockToggle render");

  return (
    <button className="clock-toggle" onClick={handleToggle}>
      Toggle clock
    </button>
  );
}

export default React.memo(ClockToggle);
