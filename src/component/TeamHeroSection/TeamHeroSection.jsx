import React, { useState } from 'react';
import './TeamHeroSection.css';

const TeamHeros = ({ data }) => {
  console.log('✅ FeaturesTeamHeros data:', data);

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
    <section className="features-TeamHeros-section">
      <div className="features-TeamHeros-container">
        {/* Left Content */}
        <div className="features-TeamHeros-left">
          <h1
            className="features-TeamHeros-heading"
            dangerouslySetInnerHTML={{ __html: data.HeroHeading }}
          ></h1>
          <p className="features-TeamHeros-description">{data.HeroDescription}</p>
          <div className="features-TeamHeros-buttons">
            {data.HeroButtons.map((btn, index) => (
              <button
                key={index}
                className={`features-TeamHeros-btn features-TeamHeros-btn-${btn.type}`}
                onClick={btn.type === 'secondary' ? handleViewImage : undefined}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="features-TeamHeros-right">
          <div className="features-TeamHeros-image-wrapper">
            <img
              src={data.HeroImage}
              alt="Features TeamHero"
              className="features-TeamHeros-image"
            />
          </div>
        </div>
      </div>

      {/* Modal for Image */}
      {showImageModal && (
        <div className="features-TeamHeros-image-modal">
          <div className="features-TeamHeros-image-content">
            <span
              className="features-TeamHeros-image-close"
              onClick={handleCloseImage}
            >
              &times;
            </span>
            <img
              src={data.HeroModalImage}
              alt="Modal Preview"
              className="features-TeamHeros-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamHeros;
