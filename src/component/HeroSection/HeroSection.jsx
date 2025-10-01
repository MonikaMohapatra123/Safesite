
import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = ({ data }) => {
  console.log('✅ HeroSection data:', data);

  const [showVideoModal, setShowVideoModal] = useState(false); // ✅ always runs!

  if (!data) {
    return <div>No hero data found.</div>;
  }

  const handleWatchVideo = () => {
    setShowVideoModal(true);
  };

  const handleCloseVideo = () => {
    setShowVideoModal(false);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <h1
            className="hero-heading"
            dangerouslySetInnerHTML={{ __html: data.HeroHeading }}
          ></h1>
          <p className="hero-description">{data.HeroDescription}</p>
          <div className="hero-buttons">
            {data.HeroButtons.map((btn, index) => (
              <button
                key={index}
                className={`hero-btn hero-btn-${btn.type}`}
                onClick={btn.type === 'secondary' ? handleWatchVideo : undefined}
              >
                {btn.text}
              </button>
            ))}
          </div>
          <div className="hero-rating">
            <span>{data.HeroRatingStars}</span>
            <small>{data.HeroRatingText}</small>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-video-wrapper">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', borderRadius: '8px' }}
            >
              <source src={data.HeroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {showVideoModal && (
        <div className="hero-video-modal">
          <div className="hero-video-content">
            <span className="hero-video-close" onClick={handleCloseVideo}>
              &times;
            </span>
            <video
              autoPlay
              muted
              controls
              playsInline
              style={{ width: '100%' }}
            >
              <source src={data.HeroModalVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
