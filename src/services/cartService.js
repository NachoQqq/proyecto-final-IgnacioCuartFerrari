// Guardar el carrito en localStorage
export const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };
  
  // Obtener el carrito desde localStorage
  export const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  // Eliminar el carrito del localStorage
  export const clearCartFromLocalStorage = () => {
    localStorage.removeItem('cart');
  };