import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Items from './marah/AddItems';
import Sidebar from './marah/Sidebar';
import Home from "./components/Home";
import './App.css';
import CategoryPage from "./marah/CategoryPage";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item" element={<Items />} />
                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route
                    path="/Sidebar"
                    element={
                        <div className="d-flex">
                            <Sidebar />
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
