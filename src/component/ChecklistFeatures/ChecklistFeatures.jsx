import './ChecklistFeatures.css';
import { 
  FaGlobe, 
  FaChartBar, 
  FaExclamationTriangle, 
  FaShieldAlt, 
  FaUsers, 
  FaEye 
} from 'react-icons/fa';

const iconMap = {
  FaGlobe: FaGlobe,
  FaChartBar: FaChartBar,
  FaExclamationTriangle: FaExclamationTriangle,
  FaShieldAlt: FaShieldAlt,
  FaUsers: FaUsers,
  FaEye: FaEye
};

function ChecklistFeatures({ data }) {
  if (!data) return null; // ✅ safety check

  const { Heading, Items } = data;

  // ✅ Split into two columns
  const mid = Math.ceil(Items.length / 2);
  const firstColumn = Items.slice(0, mid);
  const secondColumn = Items.slice(mid);

  return (
    <div className="checklist-features-container">
      <h2 className="checklist-features-heading">{Heading}</h2>
      <div className="checklist-features-list">
        {/* First Column */}
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

        {/* Second Column */}
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

export default ChecklistFeatures;
