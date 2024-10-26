// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ cartItemCount }) => {
  return (
    <nav className="navbar">
      <h1>BasketShop</h1>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Explore Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/cart">
          Cart 
          <span className="cart-count">({cartItemCount})</span>
        </Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
