import React from 'react';
import './RelatedFeatures.css';
import { 
  FaGlobe, FaChartBar, FaExclamationTriangle, FaShieldAlt, FaUsers, 
  FaEye, FaChartLine, FaCogs, FaBell, FaUsersCog, FaCloud, FaLock 
} from 'react-icons/fa';

const iconMap = {
  FaGlobe, FaChartBar, FaExclamationTriangle, FaShieldAlt, FaUsers, 
  FaEye, FaChartLine, FaCogs, FaBell, FaUsersCog, FaCloud, FaLock
};

function RelatedFeatures({ data }) {
  if (!data || !data.Items) return null;

  const mid = Math.ceil(data.Items.length / 2);
  const firstColumn = data.Items.slice(0, mid);
  const secondColumn = data.Items.slice(mid);

  return (
    <div className="rf-wrapper">
      <h2 className="rf-title">{data.Heading}</h2>

      <div className="rf-list">
        {/* First Column */}
        <div className="rf-col">
          {firstColumn.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || FaGlobe;
            return (
              <a key={idx} className="rf-feature" href={item.link || '#'} target="_blank" rel="noopener noreferrer">
                <IconComponent className="rf-icon" />
                <span>
                  {item.title} <span className="rf-arrow">→</span>
                </span>
              </a>
            );
          })}
        </div>

        {/* Second Column */}
        <div className="rf-col">
          {secondColumn.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || FaGlobe;
            return (
              <a key={idx} className="rf-feature" href={item.link || '#'} target="_blank" rel="noopener noreferrer">
                <IconComponent className="rf-icon" />
                <span>
                  {item.title} <span className="rf-arrow">→</span>
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
