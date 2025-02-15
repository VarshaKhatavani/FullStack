import React from "react";
import "./reset.css";
import "./styles.css";
import LoginForm from "./LoginForm";

function UsernamePasswordApp() {
  return (
    <>
      <header>
        <LoginForm /> {/** ID :r1:-username :r1:-password */}
      </header>
      <main>
        <h1>Some Website</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </main>
      <footer>
        <LoginForm /> {/** ID :r3:-username :r3:-password */}
      </footer>
    </>
  );
}

export default UsernamePasswordApp;
