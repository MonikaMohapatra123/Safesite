


import React from 'react';
import getstoredata from '../../json/data.json';
import"./Home.css";
import NavBar from '../NavBar/NavBar';
import HeroSection from '../../component/HeroSection/HeroSection';
import AllCompanySafetyCard from '../../component/AllCompanySafetyCard/AllCompanySafetyCard';
import AllCompanyTestimonials from '../../component/AllCompanyTestimonials/AllCompanyTestimonials';
import AllCompanyManagement from '../../component/AllCompanyManagement/AllCompanyManagement';
import CompanySafetyHQSection from '../../component/Company SafetyHQSection/Company SafetyHQSection';

const Home = () => {
  console.log('✅ Full store data:', getstoredata); // {1: {...}, 2: {...}, 3: {...}}

  const heroSectionData = getstoredata["1"];
  const companySafetyCardData = getstoredata["2"];
  const testimonialsData = getstoredata["3"]; // Object!

  return (
    <div className='home'>
      <NavBar />
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
        imageAlt="Safety Management App Preview" />
         <CompanySafetyHQSection
          
             image="safesite-2.png"
                subtitle="All-in-One"
                title="Your Digital Safety HQ"
                description="Manage and monitor every aspect of your safety program in one place. Set expectations, monitor performance, and track results in less time."
                linkText="See Pricing & Plans"
                linkUrl="#"
        />
         <AllCompanyManagement
       tagline="Easy-to-Use"
        title="The Most Intuitive Safety App"
        description="Field and safety professionals love that Safesite works on any device. Some pros get back 8 hours each week by streamlining time-consuming processes."
        linkText="All Features"
        linkHref="/features"
        imageSrc="safesite-3.png"
        imageAlt="Safety Management App Preview" />
         <CompanySafetyHQSection
          
             image="safesite-4.png"
                subtitle="All-in-One"
                title="Your Digital Safety HQ"
                description="Manage and monitor every aspect of your safety program in one place. Set expectations, monitor performance, and track results in less time."
                linkText="See Pricing & Plans"
                linkUrl="#"
        />
    </div>
  );
};

export default Home;

