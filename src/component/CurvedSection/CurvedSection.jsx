import React from "react";
import "./CurvedSection.css";

const CurvedSection = () => {
  return (
    <section className="cs-section">
      {/* Top Curve */}
      <svg
        className="cs-top-curve"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        <path d="M0,220 Q720,-50 1440,220 L1440,300 L0,300 Z" fill="#f4f8fb" />
      </svg>

      {/* Row container */}
      <div className="cs-container cs-row">
        {/* Left: Content */}
        <div className="cs-left">
          <h2>Surpass Your Safety Goals</h2>
          <p>
            Do more to keep your employees safe with Safesite, <br />
            the most recommended safety management solution.
          </p>
          <button className="cs-btn">Sign Up For Free</button>
        </div>

        {/* Right: Stats */}
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
