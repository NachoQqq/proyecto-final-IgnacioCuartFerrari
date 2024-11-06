import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Explore Products</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/checkout">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;