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
// import CartCounterApp from "./components/11-reduce-prop-drill-cart-counter/CartCounterApp";

//**** Controlled vs Uncontrolled components ****/
//import TemperatureApp from "./components/12-controlled-uncontrolled-temperture/TemperatureApp";
// import CounterApp from "./components/13-controlled-uncontrolled-counter/CounterApp";
// import ItemListApp from "./components/14-principleofleastpriviledge-listitem/ItemListApp";
// import TodoApp from "./components/15-centralized-app-todo/TodoApp";

// **** use Reducer  ****
// import TodoApp from "./components/16-usereducer-todo-refactor/TodoApp";
// import CartCounterReducerApp from "./components/17-usereducer-cart-counter-refactor/CartCounterReducerApp";
// import CounterReducerApp from "./components/18-usereducer-counter-refactor/CounterReducerApp";
// import GradientReducerApp from "./components/19-usereducer-gradient-generator-refactor/GradientReducerApp";
// import StateUpdateReducerApp from "./components/20-updatestate-without-mutate/StateUpdateReducerApp";

import AddNumbersReducerApp from "./components/21-Immer-add-numbers/AddNumbersReducerApp";
function App() {
  return (
    <>
      {/* <PriceDisplayApp /> */}
      {/* <DuplicatePriceApp /> */}
      {/* <BigCoinApp /> */}
      {/* <PiggyBankApp /> */}

      {/* ----- Preserving and Resetting State -----  */}
      {/* <CounterResetApp /> */}
      {/* <CounterPreserveApp /> */}

      {/* ----- Optimize ----- */}
      {/* <ComposeTweetApp /> */}
      {/* <CartTotalApp /> */}
      {/* <TemperatureApp /> */}

      {/* ----- prop drilling ----- */}
      {/* <NewsArticleApp /> */}
      {/* <CartCounterApp /> */}

      {/* ----- Controlled vs Uncontrolled components ----- */}
      {/* <TemperatureApp /> */}
      {/* <CounterApp /> */}
      {/* <ItemListApp /> */}
      {/* <TodoApp /> */}

      {/* ----- use reducer ----- */}
      {/* <TodoApp /> */}
      {/* <CartCounterReducerApp /> */}
      {/* <CounterReducerApp /> */}
      {/* <GradientReducerApp /> */}
      {/* <StateUpdateReducerApp /> */}

      {/* ----- Immer Introduced ----- */}
      {/* <StateUpdateReducerApp /> */}
      <AddNumbersReducerApp />
    </>
  );
}

export default App;
