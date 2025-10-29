import React, { useState } from "react";
import "./ContactForm.css";


const ContactForm = ({ heading, fields, submitText }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📩 Submitted Form Data:", formData);
    alert("Message Sent Successfully ✅");
  };

  return (
    <section className="contact-form-wrapper">
      <div className="contact-form-container">
        {/* Left Side - Form */}
        <div className="contact-form-card">
          <h2 className="contact-form-heading">{heading}</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            {fields.map((field, index) => (
              <div key={index} className="form-group">
                <label htmlFor={field.name}>{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    required
                  ></textarea>
                ) : (
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            ))}
            <button type="submit" className="form-submit-btn">
              {submitText}
            </button>
          </form>
        </div>

        {/* Right Side - Static Image */}
        <div className="contact-form-image">
          <img src="./axiomos-logo.png" alt="Contact Illustration" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
