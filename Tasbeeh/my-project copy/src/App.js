import React from "react";
import Navbar from "./components/Navbar.js"; 
import BrandsCarousel from "./components/BrandsCarousel.js";
import IntroSection from "./components/IntroSection.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Filter from "./components/Filter.js";
import "./App.css"


function App() {
  return (
    <div className="App" >
      <Navbar/>     
      <IntroSection/>
      <Filter/>
      {/* add best seller component when merging with marah */}
      <BrandsCarousel/>

    </div>
  );
}

export default App;
