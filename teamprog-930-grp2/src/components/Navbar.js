import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import cartIcon from "../assets/images/cart-icon.png";
import profileIcon from "../assets/images/profileIcon.png";
import adminIcon from "../assets/images/image.png"; 
import { db } from "../marah/firebase";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const searchQuerySnapshot = query(
        collection(db, "items"),
        where("title", ">=", searchQuery),
        where("title", "<=", `${searchQuery}\uf8ff`) 
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

  const handleAdminLogin = () => {
    const correctPassword = "martas"; 
    if (adminPassword === correctPassword) {
      setIsAdminModalOpen(false);
      setAdminPassword("");
      window.location.href = "/item"; 
    } else {
      alert("Incorrect password. Please try again.");
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

            <a href="/cart" className="cart-icon me-3">
              <img
                src={cartIcon}
                alt="Cart"
                style={{ width: "30px", height: "30px" }}
              />
            </a>

      
            <img
              src={adminIcon}
              alt="Admin"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={() => setIsAdminModalOpen(true)}
            />
          </div>
        </div>
      </nav>

      {isAdminModalOpen && (
        <div className="admin-modal">
          <div className="modal-content">
            <h5>Enter Admin Password</h5>
            <input
              type="password"
              className="form-control"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              className="btn btn-primary mt-3"
              onClick={handleAdminLogin}
            >
              Login
            </button>
            <button
              className="btn btn-secondary mt-3"
              onClick={() => setIsAdminModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

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
