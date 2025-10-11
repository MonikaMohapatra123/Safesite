import React from "react";
import "./RiskManagementSolutions.css";
import { FaCheckCircle } from "react-icons/fa";


const RiskManagementSolutions = () => {
  return (
    <section className="rms-container">
      <div className="rms-box">
        <h2 className="rms-title">
          Risk Management Program Solutions with Safesite
        </h2>

        <div className="rms-content">
          {/* Left Image */}
          <div className="rms-image-wrapper">
            <div className="rms-image-bg"></div>
            <img src="/safesite-5.png" alt="Worker" className="rms-image" />
            <div className="rms-label">Conduct Inspection</div>
          </div>

          {/* Right Text */}
          <div className="rms-text">
            <div className="rms-item">
              {/* <FaCheckCircle className="rms-icon" /> */}
              <div>
                <h4>Digitize your processes to save time</h4>
                <p>
                  Whether using or modifying our pre-built templates,
                  standardize your logging of incidents, inspections,
                  meetings, and more.
                </p>
              </div>
            </div>

            <div className="rms-item">
              {/* <FaCheckCircle className="rms-icon" /> */}
              <div>
                <h4>Centralize your records for instant access</h4>
                <p>
                  No more searching through scattered paper and email folders.
                  When OSHA asks, find records instantly in the desktop app.
                </p>
              </div>
            </div>

            <div className="rms-item">
              {/* <FaCheckCircle className="rms-icon" /> */}
              <div>
                <h4>Visualize the data for powerful analytics</h4>
                <p>
                  With an unrivaled dashboard and Safesite Score, get both
                  instant and deep visibility into your safety program(s).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskManagementSolutions;
