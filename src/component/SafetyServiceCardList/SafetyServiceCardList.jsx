import React, { useEffect } from "react";
import "./SafetyServiceCardList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as RouterLink } from "react-router-dom";

/* Scroll to top link */
const Link = ({ to, children, ...rest }) => {
  const handleClick = () => window.scrollTo(0, 0);
  return (
    <RouterLink to={to} onClick={handleClick} {...rest}>
      {children}
    </RouterLink>
  );
};

const SafetyAppFeatureSection = () => {
  /* ===== HARD CODED DATA ===== */
  const bgImage = "/law-1.jpg";

  const featureList = [
    "Digital Permit-to-Work System",
    "Real-Time Incident & Near-Miss Reporting",
    "PPE Tracking & Compliance Monitoring",
    "Hazard Identification & Risk Assessment",
    "Employee Safety Training Records",
    "Emergency Response & Instant Alerts",
    "Contractor Safety & Access Control"
  ];

  /* ===== ANIMATION ===== */
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
      });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>
      <section
        className="safety-card-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* LEFT CONTENT */}
        <div className="safety-card-content">
          <h1 className="safety-card-heading">
            Smart Safety Management App
          </h1>

          <p className="safety-card-para">
            A comprehensive safety application designed to digitize permits,
            incident reporting, hazard assessments, and compliance tracking —
            ensuring safer civil and industrial worksites with real-time control
            and accountability.
          </p>

          <Link to="/features" className="safety-card-link">
            View App Features
            <FontAwesomeIcon
              icon={faArrowRight}
              className="safety-card-icon"
            />
          </Link>

          {/* STATS */}
          <div className="safety-card-count">
            <div className="safety-count-box">
              <p className="safety-count-number">500+</p>
              <p className="safety-count-text">Active Users</p>
            </div>

            <div className="safety-count-box">
              <p className="safety-count-number">1000+</p>
              <p className="safety-count-text">
                Incident Reporting Accuracy
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT BLUR PANEL */}
        <div className="safety-blur-panel">
          <div className="safety-project-list">
            <h3 className="safety-project-heading">
              Core Safety App Features
            </h3>

            {featureList.map((item, index) => (
              <div className="safety-project-item" key={index}>
                <Link to="/features" className="safety-project-link">
                  {item}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="safety-card-icon"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SafetyAppFeatureSection;
