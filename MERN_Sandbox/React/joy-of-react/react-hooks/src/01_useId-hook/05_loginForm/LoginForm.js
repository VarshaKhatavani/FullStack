import React from "react";

function LoginForm({ isLoggedIn, handleLogin }) {
  const id = React.useId();

  if (isLoggedIn) {
    return <p>You're already logged in!</p>;
  }

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form onSubmit={handleLogin}>
      <div className="row">
        <label htmlFor={`${id}-email`}>Email:</label>
        <input
          type="email"
          id={`${id}-email`}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="row">
        <label htmlFor={`${id}-password`}>Password:</label>
        <input
          type="password"
          id={`${id}-password`}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button>Log in</button>
    </form>
  );
}

export default LoginForm;
