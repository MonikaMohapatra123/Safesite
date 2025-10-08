// ContactIntro.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactIntro.css";

const ContactIntro = ({ heading, description, contactDetails, btnText }) => {
  return (
    <section className="contact-intro">
      <div className="contact-overlay">
        <div className="contact-container">
          <h2 className="contact-heading">{heading}</h2>
          <p className="contact-description">{description}</p>

          <div className="contact-info">
            {contactDetails.map((item, index) => {
              let Icon;
              if (item.type === "phone") Icon = FaPhoneAlt;
              else if (item.type === "email") Icon = FaEnvelope;
              else if (item.type === "address") Icon = FaMapMarkerAlt;

              return (
                <div className="contact-card" key={index}>
                  <Icon className="contact-icon" />
                  <p>{item.value}</p>
                </div>
              );
            })}
          </div>

          <button className="contact-btn">{btnText}</button>
        </div>
      </div>
    </section>
  );
};

export default ContactIntro;
