import React from "react";
import { getstoredata } from "../../json/fetchData"; // ✅ Import from fetchData.js

import HeroFeaturesUs from "../../component/HeroFeatures/HeroFeatures";
import AllCompanyManagement from "../../component/AllCompanyManagement/AllCompanyManagement";
import CompanySafetyHQSection from "../../component/Company SafetyHQSection/Company SafetyHQSection";
import CurvedSection from "../../component/CurvedSection/CurvedSection";
import RelatedFeatures from "../../component/RelatedFeatures/RelatedFeatures";

const Features = () => {
  // ✅ Get data from localStorage (fetched via fetchData.js)
  const data = getstoredata();

  // ✅ Handle if data is missing (prevents undefined errors)
  if (!data) {
    return <p>Loading data...</p>;
  }

  // ✅ Use safe optional chaining to avoid "Cannot read property of undefined" errors
  const aboutData = data?.["24"]?.["1"];
  const relatedFeaturesData = data?.["6"]?.["3"];

  return (
    <div>
      {/* Hero Section */}
      <HeroFeaturesUs data={aboutData} />

      {/* Management Section */}
      <AllCompanyManagement
        tagline="Easy-to-Use"
        title="The Most Intuitive Safety App"
        description="Field and safety professionals love that Safesite works on any device. Some pros get back 8 hours each week by streamlining time-consuming processes."
        linkText="All Features"
        linkHref="/features"
        imageSrc="safesite-1.png"
        imageAlt="Safety Management App Preview"
      />

      {/* HQ Section */}
      <CompanySafetyHQSection
        image="safesite-2.png"
        subtitle="All-in-One"
        title="Your Digital Safety HQ"
        description="Manage and monitor every aspect of your safety program in one place. Set expectations, monitor performance, and track results in less time."
        linkText="See Pricing & Plans"
        linkHref="/pricing"
      />

      {/* Second Management Section */}
      <AllCompanyManagement
        tagline="Easy-to-Use"
        title="The Most Intuitive Safety App"
        description="Field and safety professionals love that Safesite works on any device. Some pros get back 8 hours each week by streamlining time-consuming processes."
        linkText="All Features"
        linkHref="/features"
        imageSrc="safesite-3.png"
        imageAlt="Safety Management App Preview"
      />

      {/* Related Features Section */}
      <RelatedFeatures data={relatedFeaturesData} />

      {/* Curved Section */}
      <CurvedSection />
    </div>
  );
};

export default Features;
