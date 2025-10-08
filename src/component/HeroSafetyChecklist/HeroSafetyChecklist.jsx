import React from "react";
import "./HeroSafetyChecklist.css";
import { GiPlantSeed } from "react-icons/gi";

const HeroSafetyChecklist = ({ data }) => {
  if (!data) return null;

  // For icon mapping (you can add more icons later if needed)
  const icons = {
    GiPlantSeed: <GiPlantSeed className="hero-safety-icon" />
  };

  return (
    <section className="hero-safety-section">
      <div className="hero-safety-content">
        <h2>
          {icons[data.HeroIcon]} {data.HeroHeading}
        </h2>
        <p>{data.HeroDescription}</p>
      </div>

      {/* ✅ Forward Curve (outward edge) */}
      <svg
        className="hero-safety-curve"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f4f8fb" />
            <stop offset="100%" stopColor="#f7f9fb" />
          </linearGradient>
        </defs>
        <rect width="100%" height="220" fill="url(#hero-grad)" />
        <path d="M0,40 L720,220 L1440,40 L1440,220 L0,220 Z" fill="#fff" />
      </svg>
    </section>
  );
};

export default HeroSafetyChecklist;
