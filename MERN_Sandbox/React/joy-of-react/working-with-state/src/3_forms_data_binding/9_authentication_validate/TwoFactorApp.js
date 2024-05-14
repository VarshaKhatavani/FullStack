import React from "react";
import "./reset.css";
import "./styles.css";

const CORRECT_CODE = "123456";

function TwoFactorApp() {
  const [code, setCode] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = code === CORRECT_CODE;
    alert(isCorrect ? "Correct!" : "InCorrect");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="auth-code">Enter authorization code:</label>
        <div className="row">
          <input
            id="auth-code"
            type="text"
            required={true}
            maxLength={6}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <button>Validate</button>
        </div>
      </form>
    </>
  );
}

export default TwoFactorApp;
