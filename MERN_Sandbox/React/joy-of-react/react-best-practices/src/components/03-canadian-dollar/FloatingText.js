import React from "react";
import styles from "./FloatingText.module.css";

function FloatingText({ retriggerId, children }) {
  return (
    <div key={retriggerId} className={styles.wrapper}>
      {children}
    </div>
  );
}

export default FloatingText;
