import React from 'react';

import CartButton from './CartButton';

function Header({ numOfItemsInCart }) {
  return (
    <header>
      <h1>
        Pintor Famoso
        <span className="artist-title">
          Abstract Expressionist
        </span>
      </h1>
      <CartButton numOfItems={numOfItemsInCart} />
    </header>
  );
}

export default Header;