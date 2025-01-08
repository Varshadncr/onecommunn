import React from 'react';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <span className="tagline">GREAT EXPERIENCE IN BUILDING</span>
          <h1>You Dream, <br /> We’ll Make It Real</h1>
          <p>
            All types of work – from designing and laying the Foundation
            finishing and commissioning. Tight deadlines, reasonable.
          </p>
          <button className="hero-btn">Contact us</button>
        </div>
        <div className="hero-image">
          <img src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736318571/image_2_l1nzl2.png" alt="Worker" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
