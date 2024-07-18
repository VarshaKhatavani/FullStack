import React from "react";
import { ChevronUp, ChevronDown } from "react-feather";

import { convertToCelsius, convertToFahrenheit } from "../../utils/main";
import ToggleButton from "./ToggleButton";
import VisuallyHidden from "../../utils/VisuallyHidden";
import styles from "./Thermostat.module.css";

// Optimized by limiting the use of hooks

function Thermostat() {
  // const [celsius, setCelsius] = React.useState(25);
  // const [fahrenheit, setFahrenheit] = React.useState(77);

  const [temperature, setTemperature] = React.useState(25);

  const [mode, setMode] = React.useState("celsius");

  // React.useEffect(() => {
  //   const nextFahrenheit = convertToFahrenheit(celsius);
  //   setFahrenheit(nextFahrenheit);
  // }, [celsius]);

  // const displayedValue = mode === "celsius" ? celsius : fahrenheit;
  // console.log(displayedValue); // 25 || 77

  function toggleMode() {
    const nextMode = mode === "celsius" ? "fahrenheit" : "celsius";
    console.log(nextMode);

    setMode(nextMode);

    const nextTemperature = Math.round(
      nextMode === "celsius"
        ? convertToCelsius(temperature)
        : convertToFahrenheit(temperature)
    );

    setTemperature(nextTemperature);
  }

  function incrementTemperature() {
    setTemperature(temperature + 1);
  }
  function decrementTemperature() {
    setTemperature(temperature - 1);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Sugarfine</div>
      <div className={styles.digitalScreen}>{temperature}°</div>
      <div className={styles.controls}>
        <ToggleButton
          label="Mode"
          options={[
            {
              label: "C",
              value: "celsius",
            },
            {
              label: "F",
              value: "fahrenheit",
            },
          ]}
          selectedValue={mode}
          onChange={toggleMode}
        />
        <div className={styles.tempAdjustButtons}>
          <button className={styles.iconButton} onClick={decrementTemperature}>
            <ChevronDown size={32} />
            <VisuallyHidden>Decrease temperature</VisuallyHidden>
          </button>
          <button className={styles.iconButton} onClick={incrementTemperature}>
            <ChevronUp size={32} />
            <VisuallyHidden>Increase temperature</VisuallyHidden>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thermostat;
