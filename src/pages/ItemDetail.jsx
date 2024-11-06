import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const itemDoc = doc(db, "products", id);
      const itemSnapshot = await getDoc(itemDoc);
      if (itemSnapshot.exists()) {
        setItem({ id: itemSnapshot.id, ...itemSnapshot.data() });
      }
    };

    fetchItem();
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>Stock: {item.stock}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ItemDetail;