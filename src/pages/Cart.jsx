// src/pages/Cart.jsx
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, total, removeItem }) => {
  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Subtotal: ${total}</h3>
            <h3>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
