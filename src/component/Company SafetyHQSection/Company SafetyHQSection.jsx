import React from 'react';
import './Company SafetyHQSection.css';

const CompanySafetyHQSection = ({
  image,
  title,
  subtitle,
  description,
  linkText,
  linkUrl
}) => {
  return (
    <section className="safetyhq-section">
      <div className="safetyhq-container">
        <div className="safetyhq-image">
          <img src={image} alt="Section visual" />
        </div>
        <div className="safetyhq-content">
          <h4>{subtitle}</h4>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={linkUrl} className="safetyhq-link">
            {linkText} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanySafetyHQSection;
