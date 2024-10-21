// src/pages/Cart.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <section className="cart">
      <h1>Carrito de Compras</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}
      <h2>Total: ${totalPrice}</h2>
      <button>Pagar</button>
    </section>
  );
};

export default Cart;
