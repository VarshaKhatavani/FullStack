function CartTable({ items, handleDeleteItem }) {
  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map(
          ({
            id,
            imageSrc,
            imageAlt,
            title,
            price,
          }) => (
            <tr key={id} className="cart-row">
              <td>
                <img
                  className="product-thumb"
                  src={imageSrc}
                  alt={imageAlt}
                />
              </td>
              <td>{title}</td>
              <td>${price}</td>
              <td>
                <button onClick={() => handleDeleteItem(id)}>
                  Remove
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default CartTable