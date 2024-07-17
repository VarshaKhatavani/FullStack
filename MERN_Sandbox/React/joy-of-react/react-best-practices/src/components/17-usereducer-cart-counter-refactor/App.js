import React from 'react';

import Shop from './Shop';
import Header from './Header';
import CartButton from './CartButton';

function App() {
  const [cartItems, setCartItems] = React.useState(
    []
  );

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <>
      <Header
        actions={
          <CartButton
            numOfItems={cartItems.length}
          />
        }
      />

      <Shop
        paintings={DATA}
        addToCart={addToCart}
      />
    </>
  );
}

const DATA = [
  {
    id: 'summer-jubilee',
    title: 'Summer Jubilee',
    caption: 'Oil on canvas, 80" × 64"',
    src: '/img/painting-01.jpg',
    price: 12000,
  },
  {
    id: 'spectacular-end',
    title: 'A Spectacular End',
    caption: 'Oil on canvas, 40" × 32"',
    src: '/img/painting-02.jpg',
    price: 4000,
  },
  {
    id: 'crossing-the-chasm',
    title: 'Crossing The Chasm',
    caption: 'Oil on canvas, 32" × 24"',
    src: '/img/painting-03.jpg',
    price: 3600,
  },
  {
    id: 'underneath',
    title: 'Underneath',
    caption: 'Oil on canvas, 40" × 32"',
    src: '/img/painting-04.jpg',
    price: 3000,
  },
  {
    id: 'it-is-what-it-is',
    title: 'It Is What It Is',
    caption: 'Oil on canvas, 40" × 32"',
    src: '/img/painting-05.jpg',
    price: 6000,
  },
]

export default App;