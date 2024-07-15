import React from 'react';

import { roundTo } from './utils';
import CartTable from './CartTable';

function CheckoutFlow({ items, taxRate, handleDeleteItem }) {
  const [subtotal, setSubtotal] = React.useState(() => calculateSubtotal(items));
  const [taxes, setTaxes] = React.useState(subtotal * taxRate);
  const [total, setTotal] = React.useState(subtotal + taxes);
  
  return (
    <>
      <h1>Checkout</h1>
      
      <CartTable items={items} handleDeleteItem={handleDeleteItem} />
      
      <table className="checkout-totals">
        <tbody>
          <tr>
            <th scope="col">Subtotal</th>
            <td>${roundTo(subtotal, 2)}</td>
          </tr>
          <tr>
            <th scope="col">Taxes</th>
            <td>${roundTo(taxes, 2)}</td>
          </tr>
          <tr>
            <th scope="col">Total</th>
            <td>${roundTo(total, 2)}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function calculateSubtotal(items) {
  let subtotal = 0;
  
  items.forEach(item => {
    subtotal += item.price;
  });
  
  return subtotal;
}

export default CheckoutFlow;