// src/pages/Products.jsx
import React from 'react';
import './Products.css';
import ProductCard from '../components/ProductCard';
import products from '../data/productsData';

const Products = () => {
  return (
    <div className="products">
      <h2>Our Basketball Collection</h2>
      <div className="category-filters">
        <button>All</button>
        <button>Shoes</button>
        <button>Apparel</button>
        <button>Accessories</button>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
