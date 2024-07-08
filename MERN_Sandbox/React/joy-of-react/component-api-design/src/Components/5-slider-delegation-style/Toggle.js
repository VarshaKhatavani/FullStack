import React from "react";

function Toggle({ label, checked, onClick, className = "", ...delegated }) {
  const id = React.useId();
  //console.log(delegated); // className : "green-toggle"

  // This style updates the UI, to move the ball
  // and indicate whether it's toggled or not.
  const ballStyle = {
    transform: checked ? `translateX(100%)` : `translateX(0%)`,
  };

  return (
    <div className="wrapper">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <button
        id={id}
        className={`toggle ${className} `} /* "toggle green-toggle" */
        type="button"
        aria-pressed={checked}
        onClick={onClick}
        {...delegated}
      >
        <span className="ball" style={ballStyle} />
      </button>
    </div>
  );
}

export default Toggle;
