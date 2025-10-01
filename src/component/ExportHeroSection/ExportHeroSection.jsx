import React, { useState } from 'react';
import './ExportHeroSection.css';

const ExportHeroSection = ({ data }) => {
  console.log('✅ FeaturesExportHeroSection data:', data);

  const [showImageModal, setShowImageModal] = useState(false);

  if (!data) {
    return <div>No TeamHero feature data found.</div>;
  }

  const handleViewImage = () => {
    setShowImageModal(true);
  };

  const handleCloseImage = () => {
    setShowImageModal(false);
  };

  return (
    <section className="features-ExportHeroSection-section">
      <div className="features-ExportHeroSection-container">
        {/* Left Content */}
        <div className="features-ExportHeroSection-left">
          <h1
            className="features-ExportHeroSection-heading"
            dangerouslySetInnerHTML={{ __html: data.HeroHeading }}
          ></h1>
          <p className="features-ExportHeroSection-description">{data.HeroDescription}</p>
          <div className="features-ExportHeroSection-buttons">
            {data.HeroButtons.map((btn, index) => (
              <button
                key={index}
                className={`features-ExportHeroSection-btn features-ExportHeroSection-btn-${btn.type}`}
                onClick={btn.type === 'secondary' ? handleViewImage : undefined}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="features-ExportHeroSection-right">
          <div className="features-ExportHeroSection-image-wrapper">
            <img
              src={data.HeroImage}
              alt="Features TeamHero"
              className="features-ExportHeroSection-image"
            />
          </div>
        </div>
      </div>

      {/* Modal for Image */}
      {showImageModal && (
        <div className="features-ExportHeroSection-image-modal">
          <div className="features-ExportHeroSection-image-content">
            <span
              className="features-ExportHeroSection-image-close"
              onClick={handleCloseImage}
            >
              &times;
            </span>
            <img
              src={data.HeroModalImage}
              alt="Modal Preview"
              className="features-ExportHeroSection-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ExportHeroSection;
