import React from 'react';

import styles from './LinkButton.module.css';

function LinkButton({ href, children }) {
  // TODO: render an <a> tag if “href” is provided.
  
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

export default LinkButton;