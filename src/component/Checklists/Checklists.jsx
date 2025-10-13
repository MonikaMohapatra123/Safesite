import React, { useState } from 'react';
import FeatureLinkButton from '../../component/FeatureLinkButton/FeatureLinkButton';
import './Checklists.css';

const Checklists = ({ data }) => {
  console.log('✅ Checklists data:', data);

  const [showImageModal, setShowImageModal] = useState(false);

  if (!data) {
    return <div>No checklist feature data found.</div>;
  }


  const handleCloseImage = () => {
    setShowImageModal(false);
  };

  return (
    <section className="checklists-section">
      <div className="checklists-container">
        {/* Left Content */}
        <div className="checklists-left">
          <h1
            className="checklists-heading"
            dangerouslySetInnerHTML={{ __html: data.HeroHeading }}
          ></h1>
          <p className="checklists-description">{data.HeroDescription}</p>
          <div className="checklists-buttons">
            {data.HeroButtons.map((btn, index) => {
              if (btn.type === 'secondary') {
                // Replace with FeatureLinkButton
                return (
                   <FeatureLinkButton to="/features" text="All Features" color="white" />
                );
              } else {
                // Keep primary as normal button
                return (
                  <button
                    key={index}
                    className={`checklists-btn checklists-btn-${btn.type}`}
                  >
                    {btn.text}
                  </button>
                );
              }
            })}
          </div>
        </div>

        {/* Right Image */}
        <div className="checklists-right">
          <div className="checklists-image-wrapper">
            <img
              src={data.HeroImage}
              alt="Checklists Feature"
              className="checklists-image"
            />
          </div>
        </div>
      </div>

      {/* Modal for Image */}
      {showImageModal && (
        <div className="checklists-image-modal">
          <div className="checklists-image-content">
            <span
              className="checklists-image-close"
              onClick={handleCloseImage}
            >
              &times;
            </span>
            <img
              src={data.HeroModalImage}
              alt="Modal Preview"
              className="checklists-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Checklists;
