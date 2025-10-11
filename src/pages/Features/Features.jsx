import React from 'react'

import data from '../../json/data.json'
import HeroFeaturesUs from '../../component/HeroFeatures/HeroFeatures';
import AllCompanyManagement from '../../component/AllCompanyManagement/AllCompanyManagement';
import CompanySafetyHQSection from '../../component/Company SafetyHQSection/Company SafetyHQSection';
import CurvedSection from '../../component/CurvedSection/CurvedSection';
import RelatedFeatures from '../../component/RelatedFeatures/RelatedFeatures';
const Features = () => {
     const aboutData = data["24"]["1"];
     const relatedFeaturesData = data["6"]["3"]; 
  return (
    <div>
      <HeroFeaturesUs data={aboutData}/>  
       <AllCompanyManagement
       tagline="Easy-to-Use"
        title="The Most Intuitive Safety App"
        description="Field and safety professionals love that Safesite works on any device. Some pros get back 8 hours each week by streamlining time-consuming processes."
        linkText="All Features"
        linkHref="/features"
        imageSrc="safesite-1.png"
        imageAlt="Safety Management App Preview" />
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
        imageAlt="Safety Management App Preview" />
       <RelatedFeatures data={relatedFeaturesData} />
     
<CurvedSection/>
    </div>
  )
}

export default Features