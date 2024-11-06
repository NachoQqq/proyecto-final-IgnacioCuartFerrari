import React from 'react';

const ProductCard = ({ product }) => {
  const { id, name, price, image, stock } = product;

  const handleAddToCart = () => {
    console.log(`${name} added to cart`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Stock: {stock}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;