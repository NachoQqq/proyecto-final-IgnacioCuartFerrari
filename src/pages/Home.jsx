// src/pages/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to BasketShop</h1>
        <p>Get ready to elevate your game! Find the best basketball gear for all levels. From pro players to beginners, we have what you need.</p>
        <button><a href="/products">Shop Now</a></button>
      </section>
      
      <section className="features">
        <h2>Why Choose BasketShop?</h2>
        <div className="feature-items">
          <div className="feature-item">
            <h3>Top Quality Gear</h3>
            <p>We offer only the highest quality equipment from trusted brands to ensure your peak performance.</p>
          </div>
          <div className="feature-item">
            <h3>Exclusive Collections</h3>
            <p>Discover unique and limited edition gear that you won’t find anywhere else.</p>
          </div>
          <div className="feature-item">
            <h3>Customer Satisfaction</h3>
            <p>Our customers love us! Join thousands of happy players who shop with us.</p>
          </div>
        </div>
      </section>
      
      <section className="promotion">
        <h2>Special Offers</h2>
        <p>Sign up today and get 15% off on your first purchase! Hurry, limited time offer.</p>
        <button><a href="/signup">Sign Up</a></button>
      </section>
    </div>
  );
};

export default Home;
