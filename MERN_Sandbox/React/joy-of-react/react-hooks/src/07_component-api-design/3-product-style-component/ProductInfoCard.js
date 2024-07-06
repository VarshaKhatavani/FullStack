import React from 'react';

import styles from './ProductInfoCard.module.css';

function ProductInfoCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img
          className={styles.productPhoto}
          alt={product.imageAlt}
          src={product.imageSrc}
        />
        <h2>
          {product.title}
        </h2>
        <p className={styles.price}>
          ${product.price}
        </p>
        <button>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfoCard;