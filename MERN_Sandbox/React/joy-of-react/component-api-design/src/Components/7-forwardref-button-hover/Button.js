import React from "react";

import styles from "./Button.module.css";

function Button({ children, ...delegated }, ref) {
  return (
    <button className={styles.btn} ref={ref} {...delegated}>
      {children}
    </button>
  );
}

export default React.forwardRef(Button);
