import React from 'react';
import '../styles/howwework.css';

const HowWeWork: React.FC = () => {
  return (
    <div className="how-we-work">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-card-top">
              <h3 className="step-number">01</h3>
            </div>
            <div className="step-card-bottom">
              <h3 className="step-title">Collaborative Design Process</h3>
              <p className="step-description">
                We begin by understanding your vision, crafting tailored concepts with 2D/3D visuals and clear planning.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-card-top">
              <h3 className="step-number">02</h3>
            </div>
            <div className="step-card-bottom">
              <h3 className="step-title">Seamless Execution</h3>
              <p className="step-description">
                From construction to interiors, we deliver quality, precision, and timely results to bring your dream to life.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-card-top">
              <h3 className="step-number">03</h3>
            </div>
            <div className="step-card-bottom">
              <h3 className="step-title">Comprehensive Support</h3>
              <p className="step-description">
                We ensure a smooth handover with regular updates, valued feedback, and meticulous final touches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
