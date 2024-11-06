import React from 'react';

function home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>Welcome to BasketHub</h1>
        <p>Your ultimate destination for high-quality basketball gear</p>
        <button className="explore-btn">Explore Now</button>
      </div>
      <section className="features">
        <div className="feature">
          <img src="https://example.com/feature-image1.jpg" alt="Premium Quality" />
          <h3>Premium Quality</h3>
          <p>Our products are crafted to deliver peak performance.</p>
        </div>
        <div className="feature">
          <img src="https://example.com/feature-image2.jpg" alt="Top Brands" />
          <h3>Top Brands</h3>
          <p>We feature brands that elevate your game to the next level.</p>
        </div>
        <div className="feature">
          <img src="https://example.com/feature-image3.jpg" alt="Fast Shipping" />
          <h3>Fast Shipping</h3>
          <p>Enjoy fast delivery to your doorstep, wherever you are.</p>
        </div>
      </section>
    </div>
  );
}

export default home;