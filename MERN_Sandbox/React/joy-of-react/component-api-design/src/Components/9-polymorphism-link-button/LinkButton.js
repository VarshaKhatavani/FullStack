import React from "react";

import styles from "./LinkButton.module.css";

function LinkButton({ href, children, ...delegated }) {
  // TODO: render an <a> tag if “href” is provided.

  const Tag = typeof href === "string" ? "a" : "button";

  return (
    <Tag href={href} className={styles.button} {...delegated}>
      {children}
    </Tag>
  );
}

export default LinkButton;
