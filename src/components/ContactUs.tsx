import React from 'react';
import '../styles/contactus.css';

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-section">
      <h2 className="contact-title">Contact us</h2>
      <div className="contact-form-container">
        <form className="contact-form">
          {/* First Name Input */}
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name*"
              className="form-input"
              required
            />
            <span className="form-icon">
              <img src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736341582/Group_4891_pvvuvo.png" alt="User Icon" className="icon-img" />
            </span>
          </div>

          {/* Email and Phone Number Inputs */}
          <div className="form-row">
            <div className="form-group">
              <input
                type="email"
                placeholder="Mail Address"
                className="form-input"
                required
              />
              <span className="form-icon">
                <img src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736341580/Group_4896_c5vepu.png" alt="Email Icon" className="icon-img" />
              </span>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Phone Number"
                className="form-input"
                required
              />
              <span className="form-icon">
                <img src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736341580/Group_4901_l6zgw5.png" alt="Phone Icon" className="icon-img" />
              </span>
            </div>
          </div>

          {/* Message Input */}
          <div className="form-group">
            <textarea
              placeholder="Enter Message"
              className="form-textarea"
              required
            ></textarea>
            <span className="form-icon">
              <img src="https://res.cloudinary.com/da41qeo0g/image/upload/v1736341578/Speech_Bubble_l1klqb.png" alt="Message Icon" className="icon-img" />
            </span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit Request →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
