import React from "react";
import { ShoppingCart } from "react-feather";

function CartButton({ numOfItems }) {
  return (
    <span className="cart-button">
      <ShoppingCart />
      {numOfItems > 0 && (
        <span className="cart-number" key={numOfItems}>
          {numOfItems}
        </span>
      )}
    </span>
  );
}

export default CartButton;
