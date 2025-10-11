import React from "react";
import "./AboutValues.css";

const AboutValues = ({ data }) => {
  if (!data) return null;

  const { heading, subHeading, topImage, bottomImage, values } = data;

  return (
    <section className="our-values-section">
      {/* Header Section */}
      <div className="values-header">
        <h2>{heading}</h2>
        <p>{subHeading}</p>
      </div>

      {/* Row 1 — Image Left / Text Right */}
      <div className="values-row">
        <div className="value-image">
          <img src={topImage} alt="Values Top" />
        </div>
        <div className="value-text-group">
          {values.slice(0, 3).map((item) => (
            <div key={item.number} className="value-item">
              <div className="value-title-line">
                <span className="value-number">{item.number}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Text Left / Image Right */}
      <div className="values-row reverse">
        <div className="value-text-group">
          {values.slice(3, 6).map((item) => (
            <div key={item.number} className="value-item">
              <div className="value-title-line">
                <span className="value-number">{item.number}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="value-image">
          <img src={bottomImage} alt="Values Bottom" />
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
