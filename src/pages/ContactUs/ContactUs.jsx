import React from 'react';
import ContactIntro from '../../component/ContactIntro/ContactIntro';
import contactData from "../../json/data.json";
import ContactForm from '../../component/ContactForm/ContactForm';

const ContactUs = () => {
  const pageData = contactData["16"]; // key "16" with id inside

  console.log(pageData.id); // ✅ will print 1

  return (
    <div>
      <ContactIntro
        heading={pageData.HeroHeading}
        description={pageData.HeroDescription}
        contactDetails={pageData.ContactDetails}
        btnText={pageData.ButtonText}
      />
         <ContactForm
        heading={pageData.Form.heading}
        fields={pageData.Form.fields}
        submitText={pageData.Form.submitText}
      />
      
    </div>
  );
};

export default ContactUs;
