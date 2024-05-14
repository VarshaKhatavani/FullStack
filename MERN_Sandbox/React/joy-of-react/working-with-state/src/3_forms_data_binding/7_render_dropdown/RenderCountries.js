import React from "react";
import "./reset.css";
import "./styles.css";

import { COUNTRIES } from "./data";

/*
  “COUNTRIES” is a dictionary-like object
  with the following shape:

  {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
  }
*/

function RenderCountries() {
  const [country, setCountry] = React.useState("");

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="country">Country:</label>
        <select id="country" name="country">
          {/* TODO: Options here! */}
        </select>
      </fieldset>

      <p className="country-display">Selected country: {country}</p>

      <button>Submit</button>
    </form>
  );
}

export default RenderCountries;
