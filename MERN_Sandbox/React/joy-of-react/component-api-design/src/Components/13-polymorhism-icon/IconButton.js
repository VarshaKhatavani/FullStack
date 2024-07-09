import React from 'react';

import styles from './IconButton.module.css';

function IconButton({ }) {
  return (
    <button className={styles.wrapper}>
      <span className={styles.iconWrapper}>
        {/* Icon slot */}
      </span>
      <span className={styles.childrenWrapper}>
        {/* Children slot */}
      </span>
    </button>
  );
}

export default IconButton;