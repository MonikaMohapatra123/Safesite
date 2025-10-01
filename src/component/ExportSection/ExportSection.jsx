import React from "react";
import "./ExportSection.css"; // same CSS, can rename file if needed

const ExportSection = ({ data }) => {
  return (
    <div className="Export-container">
      <div className="Export-left">
        <video
          className="Export-video"
          src={data.Video}
          autoPlay
          loop
          muted
        />
      </div>

      <div className="Export-right">
        {data.Items.map((item, index) => (
          <div className="Export-item" key={index}>
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

export default ExportSection;
