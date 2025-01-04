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
import Cart from "./jaber/cart/Cart"
import CheckoutForm from "./jaber/checkoutform/CheckoutForm"
import Signin from './asem/Signin';
import CreateAccount from './asem/CreateAccount';
import Purchasehistory from './mohammadamous/Purchasehistory';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item" element={<Items />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='/Purchasehistory' element={<Purchasehistory/>}/>

                <Route path="/CheckoutForm" element={<CheckoutForm />} />

                <Route path="/category/:categoryName" element={<CategoryPage />} />
                <Route
                    path="/Sidebar"
                    element={
                        <div className="d-flex">
                            <Sidebar />
                        </div>
                    }
                />
                <Route path='/Signin' element = {<Signin/>}/>
                <Route path='/CreateAccount' element = {<CreateAccount/>}/>
            </Routes>
        </Router>
    );
};

export default App;
