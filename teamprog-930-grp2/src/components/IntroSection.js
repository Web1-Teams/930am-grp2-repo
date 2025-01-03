import React from 'react';
import { Carousel } from 'react-bootstrap';

const IntroSection = () => (
  <div className="position-relative" style={{marginTop:0}}>
    <Carousel className="my-5" interval={3000} pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://shorturl.at/LRCUF"
          alt="First slide"
          style={{ height: '75vh', objectFit: 'cover', opacity: '0.7' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://shorturl.at/EBBgt"
          alt="Second slide"
          style={{ height: '75vh', objectFit: 'cover', opacity: '0.7' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://shorturl.at/z2UcR"
          alt="Third slide"
          style={{ height: '75vh', objectFit: 'cover', opacity: '0.7' }}
        />
      </Carousel.Item>
    </Carousel>

    <div className="position-absolute top-50 start-50 translate-middle text-center text-light" 
      style={{
        maxWidth: '90%', 
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        padding: '30px', 
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
      }}>
      <h1 className="display-4 fw-bold mb-4">Welcome to Our Website, Protein!</h1> 
      <p className="lead mb-4">We're excited to have you here. Explore and enjoy our products!</p>
      <div className="d-flex justify-content-center gap-3">
        <a href="#signup" className="btn btn-primary btn-lg">Get Started</a>
        <a href="#login" className="btn btn-secondary btn-lg">Log In</a> 
      </div>
    </div>
  </div>
);

export default IntroSection;
