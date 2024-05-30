import React from "react";

const Button = ({ status, children }) => {
  let themeColor;

  if (status === "Cancel") {
    themeColor = "red";
  } else if (status === "Confirm") {
    themeColor = "green";
  } else {
    throw new Error("Unrecognized color");
  }

  return (
    <div>
      <button
        style={{
          border: "2px solid",
          color: themeColor,
          borderColor: themeColor,
          background: "white",
          borderRadius: 4,
          padding: 16,
          margin: 8,
        }}
      >
        {children}
      </button>
    </div>
  );
};

/**
 *  <div>
      <button
        style={{
          border: "2px solid",
          color: "red",
          borderColor: "red",
          background: "white",
          borderRadius: 4,
          padding: 16,
          margin: 8,
        }}
      >
        Cancel
      </button>
      <button
        style={{
          border: "2px solid",
          color: "black",
          borderColor: "black",
          background: "white",
          borderRadius: 4,
          padding: 16,
          margin: 8,
        }}
      >
        Confirm
      </button>
    </div>
 * 
 */

export default Button;
