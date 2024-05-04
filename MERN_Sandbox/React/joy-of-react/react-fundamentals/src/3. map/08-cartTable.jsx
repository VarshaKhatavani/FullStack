import React from "react";

const CartTable = ({ items }) => {
  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr className="cart-row">
          <td>
            <img
              className="product-thumb"
              src={items[0].imageSrc}
              alt={items[0].imageAlt}
            />
          </td>
          <td>{items[0].title}</td>
          <td>${items[0].price}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
