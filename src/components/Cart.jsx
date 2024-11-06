import React, { useState, useEffect } from 'react';
import { saveCartToLocalStorage, getCartFromLocalStorage, clearCartFromLocalStorage } from '../services/cartService';
import './Cart.css'; // Asegúrate de tener un archivo CSS para los estilos.

const Cart = () => {
  const [cartItems, setCartItems] = useState(getCartFromLocalStorage());
  
  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
    clearCartFromLocalStorage();
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <p>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.id)} className="remove-button">Remove</button>
              </li>
            ))}
          </ul>
          <p className="total-amount">Total: ${totalAmount.toFixed(2)}</p>
          <button onClick={handleClearCart} className="clear-cart-button">Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;