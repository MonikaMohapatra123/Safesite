
// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Tagline */}
        <div className="footer-column">
          <div className="footer-logo">
            <div className="logo-box"><img src='axiomos-logo.png' alt='logo'/></div>
            <span className="logo-text">Axiomos</span>
          </div>
          <p className="footer-tagline">
            An award-winning safety management solution for companies of all sizes and industries
          </p>

          {/* App store buttons */}
          <div className="app-buttons">
            <img src="/appstore.png" alt="App Store" />
            <img src="/googleplay.png" alt="Google Play" />
          </div>

          {/* Social icons */}
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedinIn />
          </div>

          {/* Language Selector */}
          <button className="language-button">
            <span role="img" aria-label="flag">🇺🇸</span> English
          </button>
        </div>

        {/* Popular Resources */}
        <div className="footer-column">
          <h4>Popular Resources</h4>
          <ul>
            <li>How Employee Engagement Unlocks Safety Program Performance</li>
            <li>What is Behavior Based Safety (BBS)?</li>
            {/* <li>10 Things Safety Pros Must Know About the Ex Mod</li>
            <li>The Ultimate Guide to Safety Reporting & KPIs</li>
            <li>Safesite's Step-by-Step Guide to Safety Program Digitization</li> */}
            <li className="footer-link">View Blog →</li>
          </ul>
        </div>

        {/* Key Features */}
        <div className="footer-column">
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

        {/* Company */}
        <div className="footer-column">
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

      <div className="footer-bottom">
        <p>©2025 Safesite. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
