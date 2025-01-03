import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj3OKu_opXJJ1jP7svAg_Uosm-YUL8048",
  authDomain: "proteina-e82b6.firebaseapp.com",
  projectId: "proteina-e82b6",
  storageBucket: "proteina-e82b6.firebasestorage.app",
  messagingSenderId: "768271965202",
  appId: "1:768271965202:web:075116c611ad78e5c34ccb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Products = () => {
  const [filter, setFilter] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "items"));
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <section id="products" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Explore our Products</h2>

        <div className="text-center mb-4">
          <label htmlFor="product-filter" className="form-label me-2">
            Filter by Category:
          </label>
          <select
            id="product-filter"
            className="form-select w-auto d-inline-block"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Protein">Protein</option>
            <option value="Vitamins">Vitamins</option>
            <option value="Supplements">Supplements</option>
          </select>
        </div>

        <div className="row">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-primary">${product.price}</p>
                    <p className="text-muted">Category: {product.category}</p>
                    <button className="btn btn-outline-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
