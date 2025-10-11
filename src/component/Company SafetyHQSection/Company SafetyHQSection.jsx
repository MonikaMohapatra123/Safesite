import React from 'react';
import './Company SafetyHQSection.css';
import FeatureLinkButton from '../FeatureLinkButton/FeatureLinkButton'; 

const CompanySafetyHQSection = ({
  image,
  title,
  subtitle,
  description,
  linkText,
  linkHref
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
          {/* ✅ Conditionally render button if linkText and linkHref exist */}
          {linkText && linkHref && (
            <FeatureLinkButton to={linkHref} text={linkText} />
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanySafetyHQSection;
