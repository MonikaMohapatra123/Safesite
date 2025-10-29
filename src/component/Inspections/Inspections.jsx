
import React from "react";
import "./Inspections.css";
import FeatureLinkButton from "../../component/FeatureLinkButton/FeatureLinkButton";

const Inspections = ({ data }) => {
  if (!data) {
    return <div>No inspection feature data found.</div>;
  }

  return (
    <section className="features-inspections-section">
      <div className="features-inspections-container">
        {/* Left Section */}
        <div className="features-inspections-left">
          <h1
            className="features-inspections-heading"
            dangerouslySetInnerHTML={{ __html: data?.HeroHeading || "" }}
          ></h1>

          <p className="features-inspections-description">
            {data?.HeroDescription ||
              "Start managing your best safety program ever — in just 8 minutes."}
          </p>

          <div className="features-inspections-buttons">
            {/* ✅ Button (NOT clickable to other page) */}
            <button className="features-inspections-btn features-inspections-btn-primary">
              Get Started Free
            </button>

            {/* ✅ Clickable Link Component */}
            <FeatureLinkButton
              to="/features"
              text="All Features"
              color="#fff"
            />
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="features-inspections-right">
          <div className="features-inspections-image-wrapper">
            <img
              src={data?.HeroImage || "/banner-placeholder.png"}
              alt="Features Inspection"
              className="features-inspections-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspections;
