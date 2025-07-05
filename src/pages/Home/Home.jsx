


import React from 'react';
import getstoredata from '../../json/data.json';

import NavBar from '../NavBar/NavBar';
import HeroSection from '../../component/HeroSection/HeroSection';
import AllCompanySafetyCard from '../../component/AllCompanySafetyCard/AllCompanySafetyCard';
import AllCompanyTestimonials from '../../component/AllCompanyTestimonials/AllCompanyTestimonials';

const Home = () => {
  console.log('✅ Full store data:', getstoredata); // {1: {...}, 2: {...}, 3: {...}}

  const heroSectionData = getstoredata["1"];
  const companySafetyCardData = getstoredata["2"];
  const testimonialsData = getstoredata["3"]; // Object!

  return (
    <div>
      <NavBar />
      <HeroSection data={heroSectionData} />
      <AllCompanySafetyCard data={companySafetyCardData} />
      <AllCompanyTestimonials data={testimonialsData} />
    </div>
  );
};

export default Home;

