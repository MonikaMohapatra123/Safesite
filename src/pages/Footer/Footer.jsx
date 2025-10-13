import React from "react";
import "./Footer.css";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import { Link } from "react-router-dom";
import Flag from "react-flagkit"; // <-- import flag library

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - Logo + Description */}
        <div className="footer-col footer-brand">
          <div className="footer-logo">
            <img src="/axiomos-logo.png" alt="Axiomos Logo" />
            <span>Axiomos</span>
          </div>
          <p className="footer-desc">
            An award-winning safety management solution
            <br />
            for companies of all sizes and industries
          </p>

          <div className="footer-store-buttons">
            <img src="/appstore.png" alt="App Store" />
            <img src="/gogglestore.png" alt="Google Play" />
          </div>

          <div className="footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <TbBrandX />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Language Button with Indian Flag */}
          <button className="footer-lang-btn">
            <Flag country="IN" /> India
          </button>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Popular Resources</h4>
          <ul>
            <li>How Employee Engagement Unlocks Safety Program Performance</li>
            <li>What is Behavior Based Safety (BBS)?</li>
            <li>10 Things Safety Pros Must Know About the Ex Mod</li>
            <li>The Ultimate Guide to Safety Reporting & KPIs</li>
            <li>Safesite’s Step-by-Step Guide to Safety Program Digitization</li>
            <Link to="/blog">
              <li className="footer-link">View Blog →</li>
            </Link>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Key Features</h4>
          <ul>
            <li>Inspections, Checklists, & Audits</li>
            <li>Safety Meetings</li>
            <li>Incident Reporting</li>
            <li>Hazard Management</li>
            <li>Leading Indicator Analytics</li>
            <Link to="/features">
              <li className="footer-link">View all Features →</li>
            </Link>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Safesite</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Pricing</li>
            <li>Contact us</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>©2025 Safesite. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link to="/terms-of-use">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
