import React from "react";
import "./AboutWorkWithUs.css";

const WorkWithUs = ({ data }) => {
  if (!data) return null;

  return (
    <section className="work-with-us">
      {/* --- Top Curve (Same as CurvedSection) --- */}
      <div className="work-top-bg">
        <svg
          className="work-top-curve"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="work-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4f8fb" />
              <stop offset="100%" stopColor="#f7f9fb" />
            </linearGradient>
          </defs>
          <rect width="100%" height="220" fill="url(#work-grad)" />
          <path d="M0,180 L720,20 L1440,180 L1440,220 L0,220 Z" fill="#fff" />
        </svg>
      </div>

      {/* --- Main Content --- */}
      <div className="work-container">
        <div className="work-left">
          <img src={data.image} alt="Team" className="team-image" />
        </div>

        <div className="work-right">
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
          <button className="work-btn">{data.buttonText}</button>
        </div>
      </div>

      <hr className="divider" />
    </section>
  );
};

export default WorkWithUs;
