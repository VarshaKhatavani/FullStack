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
        {items.map(({ imageSrc, imageAlt, title, price, inStock }) => {
          return (
            <tr className="cart-row">
              <td>
                <img
                  width={200}
                  height={200}
                  className="product-thumb"
                  src={imageSrc}
                  alt={imageAlt}
                />
              </td>
              <td>{title}</td>
              <td>${price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;
