// src/components/FeatureSection.jsx (AllCompanyManagement.jsx)
import React from 'react';
import FeatureLinkButton from '../FeatureLinkButton/FeatureLinkButton';  // ✅ Import your button component
import './AllCompanyManagement.css';

const AllCompanyManagement = ({ 
  tagline, 
  title, 
  description, 
  linkText, 
  linkHref,    // still receiving these props
  imageSrc, 
  imageAlt 
}) => {
  return (
    <section className="feature-section">
      <div className="feature-content">
        <p className="feature-tagline">{tagline}</p>
        <h2 >{title}</h2>
        <p className="feature-description">{description}</p>

        {/* ✅ Use reusable Link Button here */}
        {linkText && linkHref && (
          <FeatureLinkButton to={linkHref} text={linkText} />
        )}
      </div>

      <div className="feature-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  );
};

export default AllCompanyManagement;
