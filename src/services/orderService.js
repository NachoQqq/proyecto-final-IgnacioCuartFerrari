import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

/**
 * Función para controlar el stock de los productos antes de registrar la orden.
 * @param {Array} cartItems - Los productos que el usuario tiene en el carrito.
 * @returns {Promise} - Resuelve si el stock es suficiente, de lo contrario lanza un error.
 */
export const confirmOrderWithStockCheck = async (cartItems) => {
  for (const item of cartItems) {
    const productRef = doc(db, "products", item.id);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      const productData = productSnap.data();
      if (productData.stock < item.quantity) {
        throw new Error(`Insufficient stock for ${productData.title}`);
      }
    } else {
      throw new Error(`Product with ID ${item.id} not found`);
    }
  }
};

/**
 * Función para actualizar el stock después de registrar la orden.
 * @param {Array} cartItems - Los productos comprados.
 */
export const updateStock = async (cartItems) => {
  for (const item of cartItems) {
    const productRef = doc(db, "products", item.id);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      const productData = productSnap.data();
      const updatedStock = productData.stock - item.quantity;

      if (updatedStock >= 0) {
        await updateDoc(productRef, { stock: updatedStock });
      }
    }
  }
};