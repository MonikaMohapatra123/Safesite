import React from "react";
import "./DashboardSection.css";

const DashboardSection = ({ data }) => {
  return (
    <div className="Dashboard-container">
      <div className="Dashboard-left">
        <video
          className="Dashboard-video"
          src={data.Video}
          autoPlay
          loop
          muted
        />
      </div>

      <div className="Dashboard-right">
        {data.Items.map((item, index) => (
          <div className="Dashboard-item" key={index}>
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

export default DashboardSection;
