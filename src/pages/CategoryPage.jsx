import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(collection(db, "products"), where("category", "==", categoryId));
      const querySnapshot = await getDocs(q);
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="category-page">
      <h2>Products in {categoryId}</h2>
      <div className="products-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;