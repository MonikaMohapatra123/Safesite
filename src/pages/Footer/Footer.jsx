import React from "react";
import "./Footer.css";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";

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
            <FaFacebookF />
            <TbBrandX />
            <FaYoutube />
            <FaLinkedinIn />
          </div>

          <button className="footer-lang-btn">🇺🇸 English</button>
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
            <li className="footer-link">View Blog →</li>
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
            <li className="footer-link">View all Features →</li>
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
          <a>Privacy Policy</a> | <a>Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
