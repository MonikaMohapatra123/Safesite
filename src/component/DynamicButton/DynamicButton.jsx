import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DynamicButton.css'; // import your css

const DynamicButton = ({ label, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button className="hero-btn-primary" onClick={handleClick}>
      {label}
    </button>
  );
};

export default DynamicButton;
