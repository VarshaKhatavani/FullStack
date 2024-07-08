import React from 'react';

import styles from './List.module.css';

function List({ className = '', children, ...delegated }) {
  return (
    <ul
      {...delegated}
      className={`${styles.wrapper} ${className}`}
    >
      {children}
    </ul>
  )
}

export default List;