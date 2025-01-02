import React, { useState } from "react";
import "./Navbar.css";
import logo from "/Users/tasbeehismaeel/Documents/my-project/src/assets/images/logo.png";
import cartIcon from "/Users/tasbeehismaeel/Documents/my-project/src/assets/images/cart-icon.png";
import profileIcon from "/Users/tasbeehismaeel/Documents/my-project/src/assets/images/profileIcon.png";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj3OKu_opXJJ1jP7svAg_Uosm-YUL8048",
  authDomain: "proteina-e82b6.firebaseapp.com",
  projectId: "proteina-e82b6",
  storageBucket: "proteina-e82b6.firebasestorage.app",
  messagingSenderId: "768271965202",
  appId: "1:768271965202:web:075116c611ad78e5c34ccb",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle search functionality
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const searchQuerySnapshot = query(
        collection(db, "items"),
        where("title", ">=", searchQuery),
        where("title", "<=", `${searchQuery}\uf8ff`) // Using title field for search
      );
      const querySnapshot = await getDocs(searchQuerySnapshot);
      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSearchResults(results);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "150px", height: "auto" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
            </ul>
            <form className="d-flex me-3" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by Title"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>

            <a href="/profile" className="profile-icon me-3">
              <img
                src={profileIcon}
                alt="Profile"
                style={{ width: "30px", height: "30px" }}
              />
            </a>

            <a href="/cart" className="cart-icon">
              <img
                src={cartIcon}
                alt="Cart"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </div>
        </div>
      </nav>

      <div className="search-results">
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <a href={`/product/${result.id}`}>{result.title}</a> 
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

  );
};

export default Navbar;
