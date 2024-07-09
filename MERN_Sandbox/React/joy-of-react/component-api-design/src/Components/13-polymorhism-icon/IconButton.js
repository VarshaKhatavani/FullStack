import React from "react";

import styles from "./IconButton.module.css";

// {/* access component through props  */}
function IconButton({ icon: Icon, children }) {
  console.log(Icon);

  // const newIcon = React.cloneElement(icon, {
  //   strokeWidth: 1,
  // });

  return (
    <button className={styles.wrapper}>
      <span className={styles.iconWrapper}>
        {/* Icon slot : {newIcon} {Icon} */}
        <Icon size={25} color="orange" strokeWidth={1.3} />
      </span>
      <span className={styles.childrenWrapper}>
        {/* Children slot */} {children}
      </span>
    </button>
  );
}

export default IconButton;
