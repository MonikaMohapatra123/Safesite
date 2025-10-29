import React, { useState } from "react";
import "./IndustriesConstructionHero.css";

const IndustriesConstructionHero = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  if (!data) return null;

  return (
    <section className="construction-hero-section">
      <div className="construction-hero-container">
        {/* ✅ Left Content */}
        <div className="construction-hero-left">
          <h1
            className="construction-hero-heading"
            dangerouslySetInnerHTML={{ __html: data?.HeroHeading || "" }}
          ></h1>
          <p className="construction-hero-description">
            {data?.HeroDescription || ""}
          </p>
        </div>

        {/* ✅ Right Image */}
        <div
          className="construction-hero-right"
          onClick={() => setShowModal(true)}
        >
          <div className="construction-hero-image-wrapper">
            <img
              src={data?.HeroImage || "/banner-placeholder.png"}
              alt="Construction Hero"
              className="construction-hero-image"
            />
          </div>
        </div>
      </div>

      {/* ✅ Modal for large image */}
      {showModal && (
        <div className="construction-hero-modal">
          <div className="construction-hero-modal-content">
            <span
              className="construction-hero-modal-close"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <img
              src={data?.HeroModalImage || data?.HeroImage}
              alt="Modal Preview"
              className="construction-hero-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustriesConstructionHero;
