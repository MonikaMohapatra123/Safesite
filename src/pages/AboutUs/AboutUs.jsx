import React from 'react'
import HeroAboutUs from '../../component/HeroAboutUs/HeroAboutUs'
import data from '../../json/data.json'
import AboutValues from '../../component/AboutValues/AboutValues';
import WorkWithUs from '../../component/AboutWorkWithUs/AboutWorkWithUs';

const AboutUs = () => {
  const aboutData = data["24"]["1"];
  const valuesData = data["24"]["2"]; 
  const workData = data["24"]["3"];   // 👈 added this

  return (
    <div>
      <HeroAboutUs data={aboutData} />
      <AboutValues data={valuesData} />
      <WorkWithUs data={workData} />   {/* 👈 pass props */}
    </div>
  )
}

export default AboutUs
