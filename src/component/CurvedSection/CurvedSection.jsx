import React from "react";
import "./CurvedSection.css";

const CurvedSection = () => {
  return (
    <section className="cs-section">
      {/* --- Top Curve (Copied from SafetyGoals) --- */}
      <div className="cs-top-bg">
        <svg
          className="cs-top-curve"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cs-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4f8fb" />
              <stop offset="100%" stopColor="#f7f9fb" />
            </linearGradient>
          </defs>
          <rect width="100%" height="220" fill="url(#cs-grad)" />
          <path d="M0,180 L720,20 L1440,180 L1440,220 L0,220 Z" fill="#fff" />
        </svg>
      </div>

      {/* --- Main Content --- */}
      <div className="cs-container cs-row">
        {/* Left Content */}
        <div className="cs-left">
          <h2>Surpass Your Safety Goals</h2>
          <p>
            Do more to keep your employees safe with Safesite, <br />
            the most recommended safety management solution.
          </p>
          <button className="cs-btn">Sign Up For Free</button>
        </div>

        {/* Right Stats */}
        <div className="cs-right">
          <div className="cs-stat">
            <div className="cs-stat-icon">⬆</div>
            <h3>8 hrs</h3>
            <p>
              per week <strong>saved</strong> after <br /> using our platform
            </p>
          </div>

          <div className="cs-divider" />

          <div className="cs-stat">
            <div className="cs-stat-icon">⬇</div>
            <h3>57%</h3>
            <p>
              Proven <strong>reduction</strong> in <br /> workplace incidents
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurvedSection;
