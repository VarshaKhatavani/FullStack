import React from "react";

import styles from "./Card.module.css";

function Card({ elevation = 2, children }) {
  /* TODO */
  const boxShadow = `var(--elevation-${elevation})`;
  return (
    <div className={styles.card} style={{ boxShadow }}>
      {children}
    </div>
  );
}

export default Card;
