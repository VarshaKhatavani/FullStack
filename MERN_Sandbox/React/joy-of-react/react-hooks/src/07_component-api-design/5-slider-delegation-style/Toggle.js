import React from 'react';

function Toggle({
  label,
  checked,
  onClick,
}) {
  const id = React.useId();
  
  // This style updates the UI, to move the ball
  // and indicate whether it's toggled or not.
  const ballStyle = {
    transform: checked
      ? `translateX(100%)`
      : `translateX(0%)`,
  };
  
  return (
    <div className="wrapper">
      <label
        htmlFor={id}
        className="label"
      >
        {label}
      </label>
      <button
        id={id}
        className="toggle"
        type="button"
        aria-pressed={checked}
        onClick={onClick}
      >
        <span className="ball" style={ballStyle} />
      </button>
    </div>
  );
}

export default Toggle;