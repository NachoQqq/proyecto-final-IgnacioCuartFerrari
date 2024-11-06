import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { products } from './products';

const uploadProductsToFirestore = async () => {
  try {
    const productsCollection = collection(db, "products");
    for (const product of products) {
      await addDoc(productsCollection, product);
      console.log(`Uploaded: ${product.name}`);
    }
    console.log("All products uploaded successfully!");
  } catch (error) {
    console.error("Error uploading products: ", error);
  }
};

uploadProductsToFirestore();