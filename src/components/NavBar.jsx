// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Importar los estilos aquí

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Explore Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About Us</Link>
    </nav>
  );
};

export default NavBar;
