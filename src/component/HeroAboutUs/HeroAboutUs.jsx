import React from "react";
import "./HeroAboutUs.css";

const HeroAboutUs = ({ data }) => {
  if (!data) return null;

  return (
    <section
      className="hero-about-section"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-about-container">
        {/* ✅ Left Content */}
        <div className="hero-about-left">
          <h2
            className="hero-about-heading"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          <p className="hero-about-description">{data.description1}</p>
          <p className="hero-about-description">{data.description2}</p>
        </div>

        {/* ✅ Right Content */}
        <div className="hero-about-right">
          <div className="hero-quote-card">
            <p className="hero-quote-text">
              <span className="hero-quote-mark">“</span>
              {data.quote}
            </p>
            <p className="hero-quote-name">— {data.name}</p>
            <p className="hero-quote-title">{data.title}</p>
            <div className="hero-quote-image">
              <img src={data.image} alt={data.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAboutUs;
