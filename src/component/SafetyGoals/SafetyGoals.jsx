import React from 'react';
import './SafetyGoals.css';

const SafetyGoals = ({ data }) => {
  if (!data) return null;

  return (
    <section className="sg-container">
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

      <div className="sg-divider"></div>

      <div className="sg-badges">
        {data.badges.map((badge, index) => (
          <img key={index} className="sg-badge-img" src={badge} alt={`Badge ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default SafetyGoals;
