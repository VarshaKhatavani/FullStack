import React from "react";
import "./reset.css";
import "./styles.css";

import { COUNTRIES } from "./data";

const countryNames = Object.entries(COUNTRIES);
console.log(countryNames);

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
        <select
          id="country"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
          required={true}
        >
          <option value="">-- Select Country --</option>
          <optgroup label="Countries">
            {
              /* TODO: Options here! */
              countryNames.map(([id, label]) => {
                return (
                  <option value={id} key={id}>
                    {label}
                  </option>
                );
              })
            }
          </optgroup>
        </select>
      </fieldset>
      <p className="country-display">Selected country: {COUNTRIES[country]}</p>
      <button>Submit</button>
    </form>
  );
}

export default RenderCountries;
