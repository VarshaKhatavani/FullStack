import React from "react";

import BigCoin from "./BigCoin";
import FloatingText from "./FloatingText";
import styles from "./App.module.css";

import "../../utils/reset.css";
import "./styles.css";

const PIGGY_BANK_COST = 9;

function PiggyBankApp() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);
  const [numOfPiggyBanks, setNumOfPiggyBanks] = React.useState(0);

  function buyPiggyBank() {
    setNumOfCoins(numOfCoins - PIGGY_BANK_COST);
    setNumOfPiggyBanks(numOfPiggyBanks + 1);
  }

  return (
    <div className={styles.wrapper}>
      <main>
        <BigCoin numOfCoins={numOfCoins} setNumOfCoins={setNumOfCoins} />

        {numOfCoins > 0 && (
          <div className={styles.floatingNumWrapper}>
            <FloatingText key={numOfCoins}>+2</FloatingText>
          </div>
        )}

        <button
          disabled={numOfCoins < PIGGY_BANK_COST}
          className={styles.shopItem}
          onClick={buyPiggyBank}
        >
          Buy Piggy Bank
          {numOfPiggyBanks > 0 && `(${numOfPiggyBanks})`}
        </button>
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  );
}

export default PiggyBankApp;
