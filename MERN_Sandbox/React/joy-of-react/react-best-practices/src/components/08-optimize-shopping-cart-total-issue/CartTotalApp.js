import React from "react";

import CheckoutFlow from "./CheckoutFlow";

import "../../utils/reset.css";
import "./styles.css";

function CartTotalApp() {
  const [items, setItems] = React.useState([
    {
      id: "hk123",
      imageSrc:
        "https://sandpack-bundler.vercel.app/img/shopping-cart-coffee-machine.jpg",
      imageAlt: "A pink drip coffee machine with the “Hello Kitty” logo",
      title: "“Hello Kitty” Coffee Machine",
      price: 89.99,
    },
    {
      id: "co999",
      imageSrc:
        "https://sandpack-bundler.vercel.app/img/shopping-cart-can-opener.jpg",
      imageAlt: "A black can opener",
      title: "Safety Can Opener",
      price: 19.95,
    },
    {
      id: "cnl333",
      imageSrc:
        "https://sandpack-bundler.vercel.app/img/shopping-cart-night-light.png",
      imageAlt:
        "A kid-friendly nightlight sculpted to look like a dog astronaut",
      title: "Astro-pup Night Light",
      price: 130.0,
    },
    {
      id: "scb777",
      imageSrc:
        "https://sandpack-bundler.vercel.app/img/shopping-cart-backpack.jpg",
      imageAlt: "A pink backpack with a unicorn illustration",
      title: "Magical Unicorn Backpack",
      price: 74.98,
    },
  ]);

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <CheckoutFlow
        items={items}
        taxRate={0.15}
        handleDeleteItem={handleDeleteItem}
      />
    </>
  );
}

export default CartTotalApp;
