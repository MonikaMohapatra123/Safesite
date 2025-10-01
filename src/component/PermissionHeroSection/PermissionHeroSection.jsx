import React, { useState } from 'react';
import './PermissionHeroSection.css';

const PermissionHeroSection = ({ data }) => {
  console.log('✅ FeaturesPermissionHeroSection data:', data);

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
    <section className="features-PermissionHeroSection-section">
      <div className="features-PermissionHeroSection-container">
        {/* Left Content */}
        <div className="features-PermissionHeroSection-left">
          <h1
            className="features-PermissionHeroSection-heading"
            dangerouslySetInnerHTML={{ __html: data.HeroHeading }}
          ></h1>
          <p className="features-PermissionHeroSection-description">{data.HeroDescription}</p>
          <div className="features-PermissionHeroSection-buttons">
            {data.HeroButtons.map((btn, index) => (
              <button
                key={index}
                className={`features-PermissionHeroSection-btn features-PermissionHeroSection-btn-${btn.type}`}
                onClick={btn.type === 'secondary' ? handleViewImage : undefined}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="features-PermissionHeroSection-right">
          <div className="features-PermissionHeroSection-image-wrapper">
            <img
              src={data.HeroImage}
              alt="Features TeamHero"
              className="features-PermissionHeroSection-image"
            />
          </div>
        </div>
      </div>

      {/* Modal for Image */}
      {showImageModal && (
        <div className="features-PermissionHeroSection-image-modal">
          <div className="features-PermissionHeroSection-image-content">
            <span
              className="features-PermissionHeroSection-image-close"
              onClick={handleCloseImage}
            >
              &times;
            </span>
            <img
              src={data.HeroModalImage}
              alt="Modal Preview"
              className="features-PermissionHeroSection-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};
 export default PermissionHeroSection;
