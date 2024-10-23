// src/pages/Products.jsx
import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import './Products.css';


const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Zapatillas Nike', description: 'Las mejores para jugar', price: 120, image: '/assets/sneaker1.jpg' },
    { id: 2, name: 'Balón Spalding', description: 'Balón profesional', price: 60, image: './assets/ball.jpg' },
    // Más productos...
  ];

  return (
    <section className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </section>
  );
};

export default Products;
