import React from "react";
import "./reset.css";
import "./styles.css";

import BigCoin from "./BigCoin";

function CanadianDollarApp() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);

  return (
    <div className="wrapper">
      <main>
        <BigCoin numOfCoins={numOfCoins} setNumOfCoins={setNumOfCoins} />
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  );
}

export default CanadianDollarApp;
