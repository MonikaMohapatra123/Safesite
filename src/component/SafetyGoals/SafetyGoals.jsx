import React from "react";
import "./SafetyGoals.css";

const SafetyGoals = ({ data }) => {
  if (!data) return null;

  return (
    <section className="sg-container">

      {/* Top Background */}
      <div className="sg-top-bg">
        <svg
          className="sg-top-curve"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
        >
          <rect width="100%" height="220" fill="#f5f8fa" />
          <path
            d="M0,180 L720,20 L1440,180 L1440,220 L0,220 Z"
            fill="#fff"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="sg-content">

        {/* Left Content */}
        <div className="sg-text-block">
          <h2 className="sg-heading">{data.heading}</h2>
          <p className="sg-description">{data.description}</p>
          <button className="sg-btn">{data.buttonText}</button>
        </div>

        {/* Right Stats */}
        <div className="sg-stats">
          {data.stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="sg-stat-item">
                <div className="sg-icon">{stat.icon}</div>
                <div className="sg-value">{stat.value}</div>
                <p className="sg-text">{stat.text}</p>
              </div>

              {index === 0 && <div className="sg-vertical-line" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="sg-badges">
        {data.badges.map((badge, index) => (
          <img
            key={index}
            src={badge}
            alt={`badge-${index}`}
            className="sg-badge-img"
          />
        ))}
      </div>

      <div className="sg-divider" />

      {/* Bottom Highlights */}
      <div className="sg-bottom-highlights">
        <div className="sg-highlight-item">
          <span className="sg-check">✔</span>
          <span>#1 Free Safety Management App</span>
        </div>
        <div className="sg-highlight-item">
          <span className="sg-check">✔</span>
          <span>No Credit Card Needed</span>
        </div>
        <div className="sg-highlight-item">
          <span className="sg-check">✔</span>
          <span>21,000+ Hazards Closed Yearly</span>
        </div>
      </div>
    </section>
  );
};

export default SafetyGoals;
