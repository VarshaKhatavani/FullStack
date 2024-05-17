import React from "react";
import "./reset.css";
import "./styles.css";

function RadioApp() {
  const [value, setValue] = React.useState("no");

  return (
    <form>
      <fieldset>
        <legend>Do you agree?</legend>
        <input
          type="radio"
          name="agreed-to-terms"
          id="agreed-yes"
          value="yes"
          checked={value === "yes"}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <label htmlFor="agreed-yes">Yes</label>
        <input
          type="radio"
          name="agreed-to-terms"
          id="agreed-no"
          value="no"
          checked={value === "no"}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <label htmlFor="agreed-no">No</label>
      </fieldset>
    </form>
  );
}

export default RadioApp;
