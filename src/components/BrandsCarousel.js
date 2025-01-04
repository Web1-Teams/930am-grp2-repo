import React from "react";
import Slider from "react-slick";

import brandimage1 from '../assets/images/brandimage1.png'; 
import brandimage2 from '../assets/images/brandimage1.png';
import brandimage3 from '../assets/images/brandimage3.png';
import brandimage4 from '../assets/images/brandimage4.png';
import brandimage5 from '../assets/images/brandimage5.png';
import brandimage6 from '../assets/images/brandimage6.png';
import brandimage7 from '../assets/images/brandimage7.png';
import brandimage8 from '../assets/images/brandimage8.png';
import brandimage9 from '../assets/images/brandimage9.png';

const BrandsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const brands = [
    brandimage1,
    brandimage2,
    brandimage3,
    brandimage4,
    brandimage5,
    brandimage6,
    brandimage7,
    brandimage8,
    brandimage9,
  ];

  return (
    <div className="brands-carousel my-5">
      <h2 className="text-center mb-4">Brands we Offer</h2>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="brand-slide">
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              style={{ margin: "0 auto", maxHeight: "100px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandsCarousel;
