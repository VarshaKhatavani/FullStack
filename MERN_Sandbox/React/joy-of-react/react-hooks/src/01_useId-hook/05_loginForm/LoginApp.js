import React from "react";
import "./reset.css";
import "./styles.css";
import LoginForm from "./LoginForm";

function LoginApp() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function handleLogin(event) {
    // NOTE: In a real application, we'd perform a
    // network request here, to validate the login.
    // We'll see how to do this later in this module.
    event.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <>
      <LoginForm isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      {isLoggedIn && (
        <button
          onClick={(event) => {
            setIsLoggedIn(false);
          }}
        >
          Log Out
        </button>
      )}
    </>
  );
}

export default LoginApp;
