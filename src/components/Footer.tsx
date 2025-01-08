import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736343068/image_3_a2t4xy.png" alt="United BuildPro Logo" className="logo-image" />
          </div>
          <p>
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable services.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <img src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736320195/white-facebook-icon-png-facebook-logo-facebook-facebook-fortnite-logo-transparent-white-11562907815wcbclgonet_oa5kcg-removebg-preview_bkgscc.png" alt="Facebook" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736320196/hd-white-twitter-bird-logo-icon-png-701751694781835zcpqy8so3y_kk9fhi-removebg-preview_midxkp.png" alt="Twitter" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736319931/vimeo-icon-512x444-8h4tlxrv_ujbkir.png" alt="Vimeo" />
            </a>
            
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Useful Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Products</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Listings</a>
            </li>
            <li>
              <a href="#">Details</a>
            </li>
            <li>
              <a href="#">Enquiry Form</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-contact">
            <li>Email: unitedbuildpro@gmail.com</li>
            <li>Phone: +91 9731125090, 9731125090</li>
            <li>
              Address: #63/A, E Block, 2nd Stage, Dr. Rajkumar Road,
              Subramanya Nagar, Bangalore-560010
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© United BuildPro 2021 All rights reserved.</p>
        <p>
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
