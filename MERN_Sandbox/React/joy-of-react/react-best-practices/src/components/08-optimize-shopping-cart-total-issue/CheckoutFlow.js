import React from "react";

import { roundTo } from "./utils";
import CartTable from "./CartTable";
// import { current } from "immer";

function CheckoutFlow({ items, taxRate, handleDeleteItem }) {
  // **** Solution 1 ****

  // const [subtotal, setSubtotal] = React.useState(() =>
  //   calculateSubtotal(items)
  // );
  // const [taxes, setTaxes] = React.useState(subtotal * taxRate);
  // const [total, setTotal] = React.useState(subtotal + taxes);

  // React.useEffect(() => {
  //   setSubtotal(calculateSubtotal(items));
  // }, [items]);

  //  React.useEffect(() => {
  //    setTaxes(subtotal * taxRate);
  //  }, [subtotal, taxRate]);

  // React.useEffect(() => {
  //   setTotal(subtotal + taxes);
  // }, [subtotal, taxes]);

  // **** Solution 2 | Optimized ****

  const subtotal = calculateSubtotal(items);
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

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
            <td>
              {total > 0
                ? new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(roundTo(total, 2))
                : "$0.00"}
            </td>
            {/* <td> {total > 0 ? `$${roundTo(total, 2)}` : "0"}</td> */}
          </tr>
        </tbody>
      </table>
    </>
  );
}

function calculateSubtotal(items) {
  let subtotal = 0;

  items.forEach((item) => {
    subtotal += item.price;
  });

  return subtotal;
}

export default CheckoutFlow;
