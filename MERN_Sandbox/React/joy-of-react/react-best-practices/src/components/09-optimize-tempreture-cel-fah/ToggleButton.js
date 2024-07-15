import React from 'react';
import styles from './ToggleButton.module.css';

function ToggleButton({
  label,
  options,
  selectedValue,
  checked,
  onChange,
}) {
  const id = React.useId();
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.toggleLabel}>
        {label}
      </div>
      <div className={styles.toggleButton}>
        {options.map(({ label, value }) => {
          const optionId = `${id}-${label}`;
          const isSelected = value === selectedValue;
          
          return (
            <label
              key={optionId}
              className={`
                ${styles.option}
                ${isSelected ? styles.selectedOption : ''}
              `}
              htmlFor={optionId}
            >
              <input
                type="radio"
                id={optionId}
                name={id}
                value={value}
                checked={isSelected}
                onChange={onChange}
              />
              {label}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default ToggleButton;