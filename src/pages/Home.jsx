// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to BasketShop</h1>
      <p>Your one-stop shop for all basketball gear!</p>
      <Link to="/products">
        <button>Explore Products</button>  {/* Asegúrate de que use Link */}
      </Link>
    </div>
  );
};

export default Home;
