import React from "react";
import "./SafetyGoals.css";

const SafetyGoals = ({ data }) => {
  if (!data) return null;

  return (
    <section className="sg-container">
      {/* Top Background with Curve */}
      <div className="sg-top-bg">
        <svg
          className="sg-top-curve"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sg-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4f8fb" />
              <stop offset="100%" stopColor="#f7f9fb" />
            </linearGradient>
          </defs>
          <rect width="100%" height="220" fill="url(#sg-grad)" />
          <path d="M0,180 L720,20 L1440,180 L1440,220 L0,220 Z" fill="#fff" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="sg-content">
        <div className="sg-text-block">
          <h2 className="sg-heading">{data.heading}</h2>
          <p className="sg-description">{data.description}</p>
          <button className="sg-btn">{data.buttonText}</button>
        </div>

        <div className="sg-stats">
          {data.stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="sg-stat-item">
                <div className="sg-icon">{stat.icon}</div>
                <h3 className="sg-value">{stat.value}</h3>
                <p className="sg-text">{stat.text}</p>
              </div>
              {index === 0 && <div className="sg-vertical-line"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="sg-divider"></div>

      {/* Badges */}
      <div className="sg-badges">
        {data.badges.map((badge, index) => (
          <img
            key={index}
            className="sg-badge-img"
            src={badge}
            alt={`Badge ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SafetyGoals;
