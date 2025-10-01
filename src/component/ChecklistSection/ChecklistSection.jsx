import React from "react";
import "./ChecklistSection.css"; // same CSS, can rename file if needed

const ChecklistSection = ({ data }) => {
  return (
    <div className="checklist-container">
      <div className="checklist-left">
        <video
          className="checklist-video"
          src={data.Video}
          autoPlay
          loop
          muted
        />
      </div>

      <div className="checklist-right">
        {data.Items.map((item, index) => (
          <div className="checklist-item" key={index}>
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

export default ChecklistSection;
