import React, { useState } from 'react';
import './HeroDashboard.css';

const HeroDashboard = ({ data }) => {
  console.log('✅ HeroDashboard data:', data);

  const [showImageModal, setShowImageModal] = useState(false);

  if (!data) {
    return <div>No hero dashboard data found.</div>;
  }

  const handleViewImage = () => {
    setShowImageModal(true);
  };

  const handleCloseImage = () => {
    setShowImageModal(false);
  };

  return (
    <section className="hero-dashboard-section">
      <div className="hero-dashboard-container">
        {/* Left Content */}
        <div className="hero-dashboard-left">
          <h1
            className="hero-dashboard-heading"
            dangerouslySetInnerHTML={{ __html: data.HeroHeading }}
          ></h1>
          <p className="hero-dashboard-description">{data.HeroDescription}</p>
          <div className="hero-dashboard-buttons">
            {data.HeroButtons.map((btn, index) => (
              <button
                key={index}
                className={`hero-dashboard-btn hero-dashboard-btn-${btn.type}`}
                onClick={btn.type === 'secondary' ? handleViewImage : undefined}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-dashboard-right">
          <div className="hero-dashboard-image-wrapper">
            <img
              src={data.HeroImage}
              alt="Hero Dashboard"
              className="hero-dashboard-image"
            />
          </div>
        </div>
      </div>

      {/* Modal for Image */}
      {showImageModal && (
        <div className="hero-dashboard-image-modal">
          <div className="hero-dashboard-image-content">
            <span
              className="hero-dashboard-image-close"
              onClick={handleCloseImage}
            >
              &times;
            </span>
            <img
              src={data.HeroModalImage}
              alt="Modal Preview"
              className="hero-dashboard-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroDashboard;
