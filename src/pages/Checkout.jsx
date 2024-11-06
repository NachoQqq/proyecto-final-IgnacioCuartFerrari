import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { confirmOrderWithStockCheck, updateStock } from '../services/orderService';

const Checkout = ({ cartItems, totalAmount }) => {
  const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleOrder = async () => {
    try {
      await confirmOrderWithStockCheck(cartItems);

      const order = {
        buyer,
        items: cartItems.map(item => ({
          id: item.id,
          title: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        date: new Date().toISOString(),
        total: totalAmount
      };

      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      alert(`Order placed! Your order ID is: ${docRef.id}`);

      await updateStock(cartItems);
    } catch (error) {
      setError(error.message);
      console.error("Order failed:", error.message);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleOrder(); }}>
        <input
          type="text"
          placeholder="Name"
          value={buyer.name}
          onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={buyer.phone}
          onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={buyer.email}
          onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
          required
        />
        <button type="submit">Place Order</button>
      </form>
      {orderId && <p>Your order ID: {orderId}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Checkout;