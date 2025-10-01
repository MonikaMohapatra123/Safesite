import React from "react";
import "./PermissionSection.css";

const PermissionSection = ({ data }) => {
  return (
    <div className="Permission-container">
      <div className="Permission-left">
        <video
          className="Permission-video"
          src={data.Video}
          autoPlay
          loop
          muted
        />
      </div>

      <div className="Permission-right">
        {data.Items.map((item, index) => (
          <div className="Permission-item" key={index}>
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

export default PermissionSection;
