import './RelatedFeatures.css';
import { FaGlobe, FaChartBar, FaExclamationTriangle, FaShieldAlt, FaUsers, FaEye } from 'react-icons/fa';

const iconMap = {
  FaGlobe: FaGlobe,
  FaChartBar: FaChartBar,
  FaExclamationTriangle: FaExclamationTriangle,
  FaShieldAlt: FaShieldAlt,
  FaUsers: FaUsers,
  FaEye: FaEye
};

function RelatedFeatures({ data }) {
  if (!data || !data.Items) return null;

  // Split items into two columns
  const mid = Math.ceil(data.Items.length / 2);
  const firstColumn = data.Items.slice(0, mid);
  const secondColumn = data.Items.slice(mid);

  return (
    <div className="related-features-container">
      <h2 className="related-features-heading">{data.Heading}</h2>
      <div className="related-features-list">
        <div className="features-column">
          {firstColumn.map((item, idx) => {
            const IconComponent = iconMap[item.icon];
            return (
              <a key={idx} className="feature-row" href={item.link}>
                <IconComponent className="feature-icon" />
                <span>{item.title} <span className="arrow">→</span></span>
              </a>
            );
          })}
        </div>
        <div className="features-column">
          {secondColumn.map((item, idx) => {
            const IconComponent = iconMap[item.icon];
            return (
              <a key={idx} className="feature-row" href={item.link}>
                <IconComponent className="feature-icon" />
                <span>{item.title} <span className="arrow">→</span></span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RelatedFeatures;
