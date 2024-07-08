import React from "react";

import Slider from "./Slider";
import styles from "./SquareSlider.module.css";

function SquareSlider(props, ref) {
  console.log(props);
  console.log(ref);
  return <Slider {...props} ref={ref} className={styles.squareSlider} />;
}

export default React.forwardRef(SquareSlider);
