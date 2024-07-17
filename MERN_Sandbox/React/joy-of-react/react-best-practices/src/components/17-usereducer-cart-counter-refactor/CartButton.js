import React from 'react';
import { ShoppingCart } from 'react-feather';

function CartButton({ numOfItems }) {
  return (
    <a href="/" className="cart-button">
      <ShoppingCart />
      {numOfItems > 0 && (
        <span
          key={numOfItems}
          className="cart-number"
        >
          {numOfItems}
        </span>
      )}
    </a>
  );
}

export default CartButton;