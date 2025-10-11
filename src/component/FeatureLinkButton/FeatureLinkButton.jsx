// FeatureLinkButton.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./FeatureLinkButton.css";

const FeatureLinkButton = ({ to, text, color }) => {
  return (
    <Link
      to={to}
      className="acsc-link-button"
      style={{ color: color || "#06478b" }} // default color if no prop passed
    >
      <span className="acsc-link-text">{text}</span>
      <span className="acsc-link-icon"></span>
    </Link>
  );
};

export default FeatureLinkButton;
