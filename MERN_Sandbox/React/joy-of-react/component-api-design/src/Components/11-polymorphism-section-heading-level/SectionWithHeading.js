import React from 'react';

function SectionWithHeading({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default SectionWithHeading;