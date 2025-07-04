


import React from 'react';
import getstoredata from '../../json/data.json';
import HeroSection from '../../component/HeroSection/HeroSection';
import AllCompanySafetyCard from '../../component/AllCompanySafetyCard/AllCompanySafetyCard';
import NavBar from '../NavBar/NavBar';

const Home = () => {
  console.log('✅ Full store data:', getstoredata); // keys 0, 1, 2

  const heroSectionData = getstoredata["1"]; 
  const companySafetyCardData = getstoredata["2"]; 

  return (
    <div>
      <NavBar/>
      <HeroSection data={heroSectionData} />
      <AllCompanySafetyCard data={companySafetyCardData} />
    </div>
  );
};

export default Home;
