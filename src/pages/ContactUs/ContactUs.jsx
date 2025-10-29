import React from "react";
import ContactIntro from "../../component/ContactIntro/ContactIntro";
import ContactForm from "../../component/ContactForm/ContactForm";
import { getstoredata } from "../../json/fetchData"; // ✅ use fetchData

const ContactUs = () => {
  const data = getstoredata(); // ✅ fetch local data
  const pageData = data["16"]; // key "16" with id inside

  console.log(pageData.id); // ✅ optional debug

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
