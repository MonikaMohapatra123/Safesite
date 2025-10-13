import React from "react";
import "./HeroSectionBlog.css";

const HeroSectionBlog = ({ data }) => {
  if (!data) return null;

  return (
    <section className="hero-blog-section">
      <div className="hero-blog-container">
        {/* Left Image */}
        <div className="hero-blog-image-wrapper">
          <img src={data.image} alt={data.title} className="hero-blog-image" />
        </div>

        {/* Right Content */}
        <div className="hero-blog-content">
          <p className="hero-blog-meta">
            {data.tag} • {data.readTime} min read
          </p>
          <h2 className="hero-blog-title">{data.title}</h2>
          <p className="hero-blog-description">{data.description}</p>

          <div className="hero-blog-author">
            <div className="author-logo">E</div>
            <div className="author-details">
              <span>BY TEAM SAFESITE</span>
              <span className="date">JULY 29, 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionBlog;
