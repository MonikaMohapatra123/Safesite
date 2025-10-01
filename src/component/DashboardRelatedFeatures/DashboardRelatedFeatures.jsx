import './DashboardRelatedFeatures.css';
import { FaGlobe, FaChartBar, FaExclamationTriangle, FaShieldAlt, FaUsers, FaEye } from 'react-icons/fa';

const iconMap = {
  FaGlobe: FaGlobe,
  FaChartBar: FaChartBar,
  FaExclamationTriangle: FaExclamationTriangle,
  FaShieldAlt: FaShieldAlt,
  FaUsers: FaUsers,
  FaEye: FaEye
};

function DashboardRelatedFeatures() {
  // Hardcoded data inside the component
  const data = {
    Heading: "Key Dashboard Features",
    Items: [
      { title: "Global Analytics", icon: "FaGlobe", link: "#" },
      { title: "Performance Metrics", icon: "FaChartBar", link: "#" },
      { title: "Risk Alerts", icon: "FaExclamationTriangle", link: "#" },
      { title: "Security Compliance", icon: "FaShieldAlt", link: "#" },
      { title: "User Management", icon: "FaUsers", link: "#" },
      { title: "Activity Monitoring", icon: "FaEye", link: "#" }
    ]
  };

  // Split items into two columns
  const mid = Math.ceil(data.Items.length / 2);
  const firstColumn = data.Items.slice(0, mid);
  const secondColumn = data.Items.slice(mid);

  return (
    <div className="dashboard-related-features-container">
      <h2 className="dashboard-related-features-heading">{data.Heading}</h2>
      <div className="dashboard-related-features-list">
        <div className="dashboard-features-column">
          {firstColumn.map((item, idx) => {
            const IconComponent = iconMap[item.icon];
            return (
              <a key={idx} className="dashboard-feature-row" href={item.link}>
                <IconComponent className="dashboard-feature-icon" />
                <span>{item.title} <span className="arrow">→</span></span>
              </a>
            );
          })}
        </div>
        <div className="dashboard-features-column">
          {secondColumn.map((item, idx) => {
            const IconComponent = iconMap[item.icon];
            return (
              <a key={idx} className="dashboard-feature-row" href={item.link}>
                <IconComponent className="dashboard-feature-icon" />
                <span>{item.title} <span className="arrow">→</span></span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DashboardRelatedFeatures;
