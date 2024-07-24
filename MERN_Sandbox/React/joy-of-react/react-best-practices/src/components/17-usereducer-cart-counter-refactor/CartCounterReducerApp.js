import React from "react";

import Shop from "./Shop";
import Header from "./Header";
import CartButton from "./CartButton";

import "../../utils/reset.css";
import "./styles.css";

function reducer(cartItems, action) {
  switch (action.type) {
    case "add-to-cart":
      return [...cartItems, action.item];

    default:
      console.error("Unexpected Type :", action.type);
      break;
  }
}

function CartCounterReducerApp() {
  const [cartItems, dispatch] = React.useReducer(reducer, []);

  function addToCart(item) {
    dispatch({
      type: "add-to-cart",
      item,
    });
  }

  return (
    <>
      <Header actions={<CartButton numOfItems={cartItems.length} />} />

      <Shop paintings={DATA} addToCart={addToCart} />
    </>
  );
}

const DATA = [
  {
    id: "summer-jubilee",
    title: "Summer Jubilee",
    caption: 'Oil on canvas, 80" × 64"',
    src: "/Images/abstract-painting.png",
    price: 12000,
  },
  {
    id: "spectacular-end",
    title: "A Spectacular End",
    caption: 'Oil on canvas, 40" × 32"',
    src: "/Images/abstract-painting.png",
    price: 4000,
  },
  {
    id: "crossing-the-chasm",
    title: "Crossing The Chasm",
    caption: 'Oil on canvas, 32" × 24"',
    src: "/Images/abstract-painting.png",
    price: 3600,
  },
  {
    id: "underneath",
    title: "Underneath",
    caption: 'Oil on canvas, 40" × 32"',
    src: "/Images/abstract-painting.png",
    price: 3000,
  },
  {
    id: "it-is-what-it-is",
    title: "It Is What It Is",
    caption: 'Oil on canvas, 40" × 32"',
    src: "/Images/abstract-painting.png",
    price: 6000,
  },
];

export default CartCounterReducerApp;
