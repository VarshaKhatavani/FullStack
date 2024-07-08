import React from "react";

import styles from "./List.module.css";

const VALID_TAGS = ["ul", "ol"];

function List({ as: Tag = "ul", className = "", children, ...delegated }) {
  // or add { as : Tag } inside param

  if (!VALID_TAGS.includes(Tag)) {
    throw new Error(`Unrecognized tag: ${Tag}. Expected: ${VALID_TAGS}`);
  }

  return (
    <Tag {...delegated} className={`${styles.wrapper} ${className}`}>
      {" "}
      {children}
    </Tag>
  );
}

export default List;
