import React, { useState } from 'react';
import '../styles/clientfeedback.css';

const ClientFeedback: React.FC = () => {
  const feedbacks = [
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'Lee Barners',
      role: 'Selling Agent',
    },
    {
      quote:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      name: 'John Doe',
      role: 'Real Estate Broker',
    },
    {
      quote:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      name: 'Jane Smith',
      role: 'Home Buyer',
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="client-feedback-section">
      <h2 className="section-title">Clients Feedback</h2>
      <div className="slider-wrapper">
        {/* Feedback Cards */}
        <div
          className="feedback-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-card">
              <div className="quote-icon">&ldquo;</div>
              <p className="quote-text">{feedback.quote}</p>
              <div className="client-info">
                <div className="client-avatar"></div>
                <div>
                  <p className="client-name">{feedback.name}</p>
                  <p className="client-role">{feedback.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button className="nav-button prev-button" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="nav-button next-button" onClick={handleNext}>
          &#8250;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="dots-wrapper">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`dot ${currentIndex === index ? 'active-dot' : ''}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ClientFeedback;
