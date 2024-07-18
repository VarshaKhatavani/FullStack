import React from "react";

import Shop from "./Shop";
import Header from "./Header";
import CartButton from "./CartButton";

import "../../utils/reset.css";
import "./styles.css";

function CartCounterApp() {
  const [cartItems, setCartItems] = React.useState([]);

  function addToCart(item) {
    console.log(item);
    setCartItems([...cartItems, item]);
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

export default CartCounterApp;
