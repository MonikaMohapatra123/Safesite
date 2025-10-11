import React from "react";
import "./HeroFeatures.css";

const HeroFeaturesUs = ({ data }) => {
  if (!data) return null;

  return (
    <section
      className="hero-Features-section"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-Features-container">
        {/* ✅ Left Content */}
        <div className="hero-Features-left">
          <h2
            className="hero-Features-heading"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          <p className="hero-Features-description">{data.description1}</p>
          <p className="hero-Features-description">{data.description2}</p>
        </div>

        {/* ✅ Right Content */}
       
        
      
      </div>
    </section>
  );
};

export default HeroFeaturesUs;
