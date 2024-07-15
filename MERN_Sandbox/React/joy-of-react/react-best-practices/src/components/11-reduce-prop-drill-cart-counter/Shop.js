import React from 'react';

function Shop({ paintings, addToCart }) {
  return (
    <section className="shop">
      {paintings.map((painting) => (
        <article key={painting.id}>
          <figure>
            <img
              alt="abstract painting"
              src={painting.src}
            />
            <figcaption>
              <span className="painting-name">
                {painting.title}
              </span>
              {painting.caption}
            </figcaption>
            <button
              onClick={() => {
                addToCart(painting);
              }}
            >
              Add to cart (${painting.price})
            </button>
          </figure>
        </article>
      ))}
    </section>
  );
}

export default Shop;