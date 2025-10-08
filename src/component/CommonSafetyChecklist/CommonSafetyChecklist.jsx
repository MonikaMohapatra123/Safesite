import React from "react";
import "./CommonSafetyChecklist.css";

const CommonSafetyChecklist = () => {
  return (
    <section className="commonSafetyChecklist">
      {/* Top Background with Curve */}
      <div className="top-bg">
        <svg
          className="top-curve"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4f8fb" />
              <stop offset="100%" stopColor="#f7f9fb" />
            </linearGradient>
          </defs>
          <rect width="100%" height="220" fill="url(#grad)" />
          <path d="M0,180 L720,20 L1440,180 L1440,220 L0,220 Z" fill="#fff" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="content-container">
        <div className="content-inner">
          {/* Left side - Single Image */}
          <div className="left-section">
            <img
              src="/safesite-1.png"
              alt="Safety Checklist"
              className="main-image"
            />
          </div>

          {/* Right side - Text and Buttons */}
          <div className="right-section">
            <h2>
              Can’t find what you are <br /> looking for?
            </h2>
            <p>Create new or upload your own templates.</p>
            <div className="btn-group">
              <button className="primary-btn">Create your Own</button>
              <a href="#upload" className="link-btn">
                Upload your Own →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom Info */}
        <div className="info-row">
          <div className="info-item">
            <span className="highlight">#1</span> FREE SAFETY MANAGEMENT APP
          </div>
          <div className="info-item">NO CREDIT CARD NEEDED</div>
          <div className="info-item">25,188 HAZARDS CLOSED DAILY</div>
        </div>

        {/* Badges */}
        <div className="badge-row">
          <img src="/badge-4.png" alt="badge" />
          <img src="/badge-5.png" alt="badge" />
          <img src="/badge-1.png" alt="badge" />
          <img src="/badge-2.png" alt="badge" />
        </div>
      </div>
    </section>
  );
};

export default CommonSafetyChecklist;
