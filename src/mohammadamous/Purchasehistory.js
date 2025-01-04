import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, orderBy } from "firebase/firestore";
import "./Purchasehistory.css";
import Footer from '../sanad/footer';

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

const Purchasehistory = () => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [date, setDate] = useState("");
  const [orders, setOrders] = useState([]);

  const handleSearch = async () => {
    try {
      if (!searchText.trim()) {
        alert("Please enter a product name to search.");
        setOrders([]);
        return;
      }

      let q = collection(db, "cart");
      q = query(q, where("title", "==", searchText.trim()));

      if (sortOption === "Asc") {
        q = query(q, orderBy("title", "asc"));
      } else if (sortOption === "Desc") {
        q = query(q, orderBy("title", "desc"));
      }

      const querySnapshot = await getDocs(q);
      const ordersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(ordersData);
    } catch (error) {
      console.error("Something went wrong while running the query:", error);
    }
  };

  return (
    <>
      <div className="purchasehistory-container">
        <h1 className="purchasehistory-title">Your Order History</h1>

        <table className="purchasehistory-table">
          <tbody>
            <tr>
              <td>
                <label>Search Product</label>
              </td>
              <td>
                <input
                  type="text"
                  className="purchasehistory-input"
                  placeholder="Insert Product Name"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Sorted by</label>
              </td>
              <td>
                <select
                  className="purchasehistory-select"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="Asc">Highest</option>
                  <option value="Desc">Lowest</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Date</label>
              </td>
              <td>
                <input
                  type="date"
                  className="purchasehistory-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button className="purchasehistory-button" onClick={handleSearch}>
                  Search
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="purchasehistory-list-title">Order List</h2>
        <ul className="purchasehistory-list">
          {orders.length === 0 && <p>No results found</p>}
          {orders.map((order) => (
            <li key={order.id} className="purchasehistory-list-item">
              <h3>{order.title}</h3>
              <img
                src={order.image}
                alt={order.title}
                style={{ width: "100px", height: "100px" }}
              />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Purchasehistory;
