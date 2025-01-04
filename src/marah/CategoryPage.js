import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Card from "./Card";
import NavBar from "../components/Navbar";
import PriceFilter from "../components/Filter";

const CategoryPage = () => {
  const { categoryName } = useParams(); 
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]); 

  useEffect(() => {
    const fetchItemsByCategory = async () => {
      try {
        const q = query(
          collection(db, "items"),
          where("category", "==", categoryName)
        );
        const querySnapshot = await getDocs(q);
        const itemsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsData);
        setFilteredItems(itemsData); 
      } catch (error) {
        console.error("Error fetching category items: ", error);
      }
    };

    fetchItemsByCategory();
  }, [categoryName]);

  const handlePriceFilter = (priceRange) => {
    if (!priceRange) {
      setFilteredItems(items);
      return;
    }

    const [minPrice, maxPrice] = priceRange.split("-").map(Number);
    const filtered = items.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setFilteredItems(filtered);
  };

  return (
    <>
    <div>
      <NavBar />
      <div className="container mt-3">
        <PriceFilter onFilter={handlePriceFilter} />
        <div className="row">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <Card
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default CategoryPage;
