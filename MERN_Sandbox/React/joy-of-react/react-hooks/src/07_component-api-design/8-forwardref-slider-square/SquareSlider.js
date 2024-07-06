import React from 'react';

import Slider from './Slider';
import styles from './SquareSlider.module.css';

function SquareSlider(props) {
  return (
    <Slider {...props} className={styles.squareSlider} />
  );
}

export default SquareSlider;