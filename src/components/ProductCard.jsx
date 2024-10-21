// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css'; // Para el componente de las tarjetas

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;  // Exportar por defecto
