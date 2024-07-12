import React from "react";

import BigCoin from "./BigCoin";
import FloatingText from "./FloatingText";
import styles from "./App.module.css";

import "../../utils/reset.css";
import "./styles.css";

function BigCoinApp() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);

  return (
    <div className={styles.wrapper}>
      <main>
        <BigCoin numOfCoins={numOfCoins} setNumOfCoins={setNumOfCoins} />
        <div className={styles.floatingNumWrapper}>
          <FloatingText retriggerId={numOfCoins}>+2</FloatingText>
        </div>
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  );
}

export default BigCoinApp;
