import React from "react";

function SectionWithHeading({ level, title, children }) {
  if (typeof level !== "number" || level < 0 || level > 6) {
    throw new Error(`Unrecognized heading level : ${level}`);
  }

  const HeadingTag = `h${level}`;

  return (
    <section>
      <HeadingTag>{title}</HeadingTag>
      {children}
    </section>
  );
}

export default SectionWithHeading;
