import React from "react";
import "./InspectionSection.css";

const InspectionSection = ({ data }) => {
  return (
    <div className="inspection-container">
      <div className="inspection-left">
        <video
          className="inspection-video"
          src={data.Video}
          autoPlay
          loop
          muted
        />
      </div>

      <div className="inspection-right">
        {data.Items.map((item, index) => (
          <div className="inspection-item" key={index}>
            <span className="checkmark">✔</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        <button className="signup-btn">{data.Button.text}</button>
      </div>
    </div>
  );
};

export default InspectionSection;
