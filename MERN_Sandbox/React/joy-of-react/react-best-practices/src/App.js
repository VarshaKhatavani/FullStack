// **** Use of Key ****

// import PriceDisplayApp from "./components/01-price-radio-selection-keys/PriceDisplayApp";
// import DuplicatePriceApp from "./components/02-price-radio-selection-classname/DuplicatePriceApp";

// **** Use of State Variable  ****
// import BigCoinApp from "./components/03-canadian-dollar/BigCoinApp";
// import PiggyBankApp from "./components/04-canadian-dollar-piggybank/PiggyBankApp";

// **** Preserving and Resetting State ****
// import CounterResetApp from "./components/05-resetting-state-counter/CounterResetApp";
// import CounterPreserveApp from "./components/06-preserving-state-counter-color/CounterPreserveApp";

// **** Optimize ****

// import ComposeTweetApp from "./components/07-optimize-compose-tweet-char-count/ComposeTweetApp";
// import CartTotalApp from "./components/08-optimize-shopping-cart-total-issue/CartTotalApp";
// import TemperatureApp from "./components/09-optimize-tempreture-cel-fah/TemperatureApp";

// **** prop drilling ****
// import NewsArticleApp from "./components/10-lifting-content-news-website/NewsArticleApp";
import CartCounterApp from "./components/11-reduce-prop-drill-cart-counter/CartCounterApp";

function App() {
  return (
    <>
      {/* <PriceDisplayApp /> */}
      {/* <DuplicatePriceApp /> */}
      {/* <BigCoinApp /> */}
      {/* <PiggyBankApp /> */}

      {/* <CounterResetApp /> */}
      {/* <CounterPreserveApp /> */}

      {/* Optimize */}
      {/* <ComposeTweetApp /> */}
      {/* <CartTotalApp /> */}
      {/* <TemperatureApp /> */}

      {/* <NewsArticleApp /> */}
      <CartCounterApp />
    </>
  );
}

export default App;
