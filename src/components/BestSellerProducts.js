import React, { useState, useEffect } from "react";
import { db } from "../marah/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Card from "../marah/Card";

const BestSellerProducts = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBestSellers = async () => {
    try {
      const q = query(
        collection(db, "items"),
        where("isBestSeller", "==", true) 
      );

      const querySnapshot = await getDocs(q);

      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBestSellers(products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching best-seller products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBestSellers();
  }, []);

  return (
    <section id="best-sellers" className="p-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Best Seller Products</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="row">
            {bestSellers.length > 0 ? (
              bestSellers.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <Card
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                  />
                </div>
              ))
            ) : (
              <p className="text-center">No best-seller products available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellerProducts;
