import React from "react";
import { Link } from "react-router-dom";
import "./FeatureLinkButton.css";

const FeatureLinkButton = ({ to, text }) => {
  return (
    <Link to={to} className="acsc-link-button">
      <span className="acsc-link-text">{text}</span>
      <span className="acsc-link-icon"></span>
    </Link>
  );
};

export default FeatureLinkButton;
