
// src/components/FeatureSection.jsx
import React from 'react';
import './AllCompanyManagement.css';


const AllCompanyManagement = ({ 
  tagline, 
  title, 
  description, 
  linkText, 
  imageSrc, 
  imageAlt, 
  linkHref 
}) => {
  return (
  
   
     <section className="feature-section">
      <div className="feature-content">
        <p className="feature-tagline">{tagline}</p>
        <h2 className="feature-title">{title}</h2>
        <p className="feature-description">{description}</p>
        <a href={linkHref} className="feature-link">
          {linkText} →
        </a>
      </div>
      <div className="feature-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </section>
   

  
  );
};

export default AllCompanyManagement;
