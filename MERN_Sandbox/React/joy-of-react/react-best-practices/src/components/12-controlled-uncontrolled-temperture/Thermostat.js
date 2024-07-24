import React from "react";
import { ChevronUp, ChevronDown } from "react-feather";

import VisuallyHidden from "../../utils/VisuallyHidden";
import styles from "./Thermostat.module.css";

// as value state variable is used in temprature state variable as well
// removed temprature state variable

function Thermostat({ value, onChange }) {
  // const [temperature, setTemperature] = React.useState(value);

  // Sync the `temperature` state variable
  // with the `value` prop:
  // React.useEffect(() => {
  //   setTemperature(value);
  // }, [value]);

  function incrementTemperature() {
    const nextTemperature = value + 1;
    //setTemperature(nextTemperature);

    onChange(nextTemperature);
  }
  function decrementTemperature() {
    const nextTemperature = value - 1;
    //setTemperature(nextTemperature);

    onChange(nextTemperature);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Sugarfine</div>
      <div className={styles.digitalScreen}>{value}°</div>
      <div className={styles.controls}>
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
