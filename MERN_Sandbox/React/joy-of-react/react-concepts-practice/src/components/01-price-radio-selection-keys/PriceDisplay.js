import React from "react";
import styles from "./PriceDisplay.module.css";

function PriceDisplay({ price }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <div className={styles.wrapper}>
      {/* added key to div */}
      <div key={price} className={styles.animated}>
        {formattedPrice}
      </div>
    </div>
  );
}

export default PriceDisplay;

//  By adding keys, React can distinguish between different components.
// This way, React knows which parts of the UI to re-render.
