import React from "react";

import VisuallyHidden from "../../utils/VisuallyHidden";
import styles from "./BigCoin.module.css";

function BigCoin({ numOfCoins, setNumOfCoins }) {
  return (
    <div className={styles.coinWrapper}>
      <button
        className={styles.coin}
        onClick={() => setNumOfCoins(numOfCoins + 2)}
      >
        <VisuallyHidden>Add 2 coins</VisuallyHidden>
        <img
          alt=""
          className={styles.coinImage}
          src="https://sandpack-bundler.vercel.app/img/toonie.png"
        />
      </button>
    </div>
  );
}

export default BigCoin;
