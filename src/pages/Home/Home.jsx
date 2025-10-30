// src/pages/Home/Home.jsx
import React from "react";
import { getstoredata } from "../../json/fetchData"; // ✅ Replaced data.json
import "./Home.css";
import HeroSection from "../../component/HeroSection/HeroSection";
import AllCompanySafetyCard from "../../component/AllCompanySafetyCard/AllCompanySafetyCard";
import AllCompanyTestimonials from "../../component/AllCompanyTestimonials/AllCompanyTestimonials";
import AllCompanyManagement from "../../component/AllCompanyManagement/AllCompanyManagement";
import CompanySafetyHQSection from "../../component/Company SafetyHQSection/Company SafetyHQSection";
import SafetyTopicsCards from "../../component/SafetyTopicsCards/SafetyTopicsCards";
import SafetyGoals from "../../component/SafetyGoals/SafetyGoals";



const Home = () => {
  // ✅ Get the locally stored data (fetched from API)
  const storeData = getstoredata();

  // ✅ Add fallback (in case localStorage is empty)
  if (!storeData) {
    return (
      <p style={{ textAlign: "center" }}>
        Loading data... Please refresh once after page load.
      </p>
    );
  }

  // ✅ Use the stored data
  const heroSectionData = storeData["1"];
  const companySafetyCardData = storeData["2"];
  const testimonialsData = storeData["3"];
  const safetyTopicsCardsData = storeData["4"];
  const safetyGoalsData = storeData["5"];

  return (
    <div className="home">
      <HeroSection data={heroSectionData} />
      <AllCompanySafetyCard data={companySafetyCardData} />
      <AllCompanyTestimonials data={testimonialsData} />

      <h3> A Smarter Safety Management System</h3>
    

      <AllCompanyManagement
        tagline="Easy-to-Use"
        title="The Most Intuitive Safety App"
        description="Field and safety professionals love that Safesite works on any device. Some pros get back 8 hours each week by streamlining time-consuming processes."
        linkText="All Features"
        linkHref="/features"
        imageSrc="safesite-1.png"
        imageAlt="Safety Management App Preview"
      />

      <CompanySafetyHQSection
        image="safesite-2.png"
        subtitle="All-in-One"
        title="Your Digital Safety HQ"
        description="Manage and monitor every aspect of your safety program in one place. Set expectations, monitor performance, and track results in less time."
        linkText="See Pricing & Plans"
        linkHref="/pricing"
      />
       
      <AllCompanyManagement
        tagline="Easy-to-Use"
        title="The Most Intuitive Safety App"
        description="Field and safety professionals love that Safesite works on any device. Some pros get back 8 hours each week by streamlining time-consuming processes."
        linkText="All Features"
        linkHref="/features"
        imageSrc="safesite-3.png"
        imageAlt="Safety Management App Preview"
      />

      <CompanySafetyHQSection
        image="safesite-4.png"
        subtitle="All-in-One"
        title="Your Digital Safety HQ"
        description="Manage and monitor every aspect of your safety program in one place. Set expectations, monitor performance, and track results in less time."
        linkText="See Pricing & Plans"
        linkHref="/pricing"
      />

      <SafetyTopicsCards data={safetyTopicsCardsData} />
      <SafetyGoals data={safetyGoalsData} />
      {/* <CommonSafetyChecklist /> */}
    </div>
  );
};

export default Home;
