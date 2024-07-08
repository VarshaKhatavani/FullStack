import React from 'react';

import styles from './Slider.module.css';

function Slider({ label, min, max, value, onChange }) {
  const id = React.useId();
  
  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
      <input
        type="range"
        id={id}
        className={styles.slider}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Slider;