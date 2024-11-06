import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const seedData = async () => {
  const products = [
    {
      title: "Basketball Shoes",
      description: "High-performance shoes for the court.",
      price: 120,
      stock: 10,
      image: "https://example.com/shoes.jpg",
      category: "shoes"
    },
    {
      title: "Basketball Jersey",
      description: "Breathable and stylish jersey.",
      price: 60,
      stock: 15,
      image: "https://example.com/jersey.jpg",
      category: "apparel"
    },
    {
      title: "Basketball Cap",
      description: "Cool cap for basketball fans.",
      price: 25,
      stock: 20,
      image: "https://example.com/cap.jpg",
      category: "accessories"
    },
  ];

  products.forEach(async (product) => {
    try {
      await addDoc(collection(db, "products"), product);
      console.log(`${product.title} added`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
};

export default seedData;
