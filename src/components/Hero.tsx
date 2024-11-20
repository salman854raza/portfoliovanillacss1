import React from 'react';
import Navbar from './Navbar';
import './Hero.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <div id="hero">
      <Navbar />
      <div className="hero-container">
        <div className="hero-image-container">
          
          <Image 
            src="/salman.jpeg" 
            alt="Salman Raza" 
            className="hero-image"
            width={300}
            height={300}
          />
        </div>
        <div className="hero-text">
          <p>I&#39;m</p>
          <p>Salman</p>
          <p>Raza</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
