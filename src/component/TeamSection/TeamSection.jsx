import React from "react";
import "./TeamSection.css";

const TeamSection = ({ data }) => {
  return (
    <div className="Team-container">
      <div className="Team-left">
        <video
          className="Team-video"
          src={data.Video}
          autoPlay
          loop
          muted
        />
      </div>

      <div className="Team-right">
        {data.Items.map((item, index) => (
          <div className="Team-item" key={index}>
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

export default TeamSection;
