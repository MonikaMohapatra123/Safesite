import React from "react";
import "./HeroSectionBlog.css";

const HeroSectionBlog = ({ data }) => {
  if (!data) return null;

  return (
    <section className="hero-blog-section">
      <div className="hero-blog-container">
        <div className="hero-blog-image-wrapper">
          <img src={data.image} alt={data.title} className="hero-blog-image" />
        </div>
        <div className="hero-blog-content">
          <p className="hero-blog-meta">
            {data.tag} • {data.readTime} min read
          </p>
          <h2 className="hero-blog-title">{data.title}</h2>
          <p className="hero-blog-description">{data.description}</p>
          <div className="hero-blog-author">
            <div className="author-logo">
              {data.author.charAt(0).toUpperCase()}
            </div>
            <div className="author-details">
              <span>{data.author}</span>
              <span className="date">{data.date}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionBlog;
