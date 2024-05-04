import React from "react";

const FriendlyGreeting = ({ name }) => {
  return (
    <p
      style={{
        fontSize: "1.5rem",
        textAlign: "center",
        color: "sienna",
      }}
    >
      Greetings, {name}!
    </p>
  );
};

/**
 * function FriendlyGreeting() {
  return (
    <p
      style={{
        fontSize: '1.25rem',
        textAlign: 'center',
        color: 'sienna',
      }}
    >
      Greetings, weary traveller!
    </p>
  );
}
 */
export default FriendlyGreeting;
