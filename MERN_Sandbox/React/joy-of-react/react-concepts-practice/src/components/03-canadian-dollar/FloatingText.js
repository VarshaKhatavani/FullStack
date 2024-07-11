import React from 'react';
import styles from './FloatingText.module.css';

function FloatingText({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

export default FloatingText;