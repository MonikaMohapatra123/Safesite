import React from "react";
import "./AboutValues.css";

const AboutValues = ({ data }) => {
  if (!data) return null;

  const { heading, subHeading, topImage, bottomImage, values } = data;

  return (
    <section className="our-values-section">
      <div className="values-header">
        <h2>{heading}</h2>
        <p>{subHeading}</p>
      </div>

      <div className="values-row">
        <div className="value-image">
          <img src={topImage} alt="Values Top" />
        </div>
        <div className="value-text-group">
          {values.slice(0, 3).map((item) => (
            <div key={item.number} className="value-item">
              <span className="value-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="values-row reverse">
        <div className="value-text-group">
          {values.slice(3, 6).map((item) => (
            <div key={item.number} className="value-item">
              <span className="value-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
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
