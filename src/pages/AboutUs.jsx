import React from 'react';

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About BasketHub</h1>
      <p>
        At BasketHub, we believe in empowering basketball players with the highest quality gear.
        We are dedicated to providing the latest, most innovative products that help you achieve
        your best on the court.
      </p>
      <div className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To bring premium, accessible basketball gear to players of all levels, ensuring
            quality, performance, and style in every product.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be a leading basketball retailer recognized for passion, quality, and an
            unparalleled commitment to athletes around the world.
          </p>
        </div>
      </div>
      <h3>Follow us on:</h3>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  );
}

export default AboutUs;