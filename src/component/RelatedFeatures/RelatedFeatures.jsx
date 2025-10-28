import React from 'react';
import './RelatedFeatures.css';
import {
  FaGlobe,
  FaChartBar,
  FaExclamationTriangle,
  FaShieldAlt,
  FaUsers,
  FaEye,
  FaChartLine,
  FaCogs,
  FaBell,
  FaUsersCog,
  FaCloud,
  FaLock
} from 'react-icons/fa';

// ✅ Map all icon names used across all pages
const iconMap = {
  FaGlobe,
  FaChartBar,
  FaExclamationTriangle,
  FaShieldAlt,
  FaUsers,
  FaEye,
  FaChartLine,
  FaCogs,
  FaBell,
  FaUsersCog,
  FaCloud,
  FaLock
};

function RelatedFeatures({ data }) {
  if (!data || !data.Items) return null;

  // Split items into two columns for layout
  const mid = Math.ceil(data.Items.length / 2);
  const firstColumn = data.Items.slice(0, mid);
  const secondColumn = data.Items.slice(mid);

  return (
    <div className="related-features-container">
      {/* Section heading */}
      <h2 className="related-features-heading">{data.Heading}</h2>

      <div className="related-features-list">
        {/* ✅ First column */}
        <div className="features-column">
          {firstColumn.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || FaGlobe; // fallback if icon not found
            return (
              <a key={idx} className="feature-row" href={item.link || '#'} target="_blank" rel="noopener noreferrer">
                <IconComponent className="feature-icon" />
                <span>
                  {item.title} <span className="arrow">→</span>
                </span>
              </a>
            );
          })}
        </div>

        {/* ✅ Second column */}
        <div className="features-column">
          {secondColumn.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || FaGlobe; // fallback if icon not found
            return (
              <a key={idx} className="feature-row" href={item.link || '#'} target="_blank" rel="noopener noreferrer">
                <IconComponent className="feature-icon" />
                <span>
                  {item.title} <span className="arrow">→</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RelatedFeatures;
