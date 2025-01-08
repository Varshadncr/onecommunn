import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <img src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736318570/image_1_lwgdxm.png" alt="United BuildPro Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
