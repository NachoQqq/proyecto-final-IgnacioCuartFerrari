// src/pages/AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About BasketShop</h2>
      <p>BasketShop is dedicated to helping basketball players of all levels find the perfect gear to elevate their game. With a focus on quality and customer satisfaction, we aim to be your go-to store for all things basketball.</p>
      
      <section className="values">
        <h3>Our Mission</h3>
        <p>Our mission is to inspire and equip basketball players around the world by providing top-quality products that support peak performance and enjoyment of the game.</p>
        
        <h3>Our Values</h3>
        <ul>
          <li><strong>Quality:</strong> We offer only the best brands and materials.</li>
          <li><strong>Community:</strong> Supporting local players and global fans alike.</li>
          <li><strong>Customer Satisfaction:</strong> Our goal is to ensure every customer leaves satisfied.</li>
        </ul>
      </section>
      
      <section className="social-media">
        <h3>Connect With Us</h3>
        <p>Follow us on social media for updates, new products, and exclusive offers:</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
