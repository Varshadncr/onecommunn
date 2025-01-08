import React from 'react';
import '../styles/aboutsection.css';  // Import the custom CSS

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="image-container">
        <img src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736321298/img_jvwaxe.png" alt="About Us" />
      </div>
      <div className="text-container">
        <h2>About us</h2>
        <p>
          Everyone has a vision of their dream home or workspace — a space filled with special features and unique experiences. We at BuildApp A/C, are bringing those dreams to life! Our team of experts will help you create a work environment that works.
        </p>
        <p>
          Every project we undertake is a harmonious blend of our client's vision and our design expertise. We believe in making spaces not only functional but also aesthetically pleasing — creating a seamless integration of design and engineering.
        </p>
        <a href="#" className="btn">
          Know More
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
