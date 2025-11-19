import React from "react";
import "./Loader.css";


const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="spinner-container">
        <img src="./axiomos-logo.png" alt="loading" className="spinner-logo" />
      </div>
    </div>
  );
};

export default Loader;
