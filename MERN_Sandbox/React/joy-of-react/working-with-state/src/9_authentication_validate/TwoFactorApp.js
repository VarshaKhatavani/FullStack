import React from "react";
import "./reset.css";
import "./styles.css";

const CORRECT_CODE = "123456";

function TwoFactorApp() {
  return (
    <>
      <label htmlFor="auth-code">Enter authorization code:</label>
      <div className="row">
        <input id="auth-code" type="text" required={true} maxLength={6} />
        <button>Validate</button>
      </div>
    </>
  );
}

export default TwoFactorApp;
