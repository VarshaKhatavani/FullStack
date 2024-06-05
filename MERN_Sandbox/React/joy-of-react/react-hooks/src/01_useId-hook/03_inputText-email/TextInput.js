import React from "react";

function TextInput({ id, label, type }) {
  // Here's the original code, violating the rule:
  //
  //   let appliedId = id;
  //   if (typeof appliedId === 'undefined') {
  //     appliedId = React.useId();
  //   }
  //
  // ...and here's the fixed code:

  // Note :  Do not use hooks in conditions as react will not understand
  // when to use & what to hold
  const generatedId = React.useId();
  const appliedId = id || generatedId;

  return (
    <div className="text-input">
      <label htmlFor={appliedId}>{label}</label>
      <input id={appliedId} type={type} />
    </div>
  );
}

export default TextInput;
