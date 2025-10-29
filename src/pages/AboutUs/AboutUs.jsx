import React from "react";
import HeroAboutUs from "../../component/HeroAboutUs/HeroAboutUs";
import AboutValues from "../../component/AboutValues/AboutValues";
import WorkWithUs from "../../component/AboutWorkWithUs/AboutWorkWithUs";

import { getstoredata } from "../../json/fetchData"; // ✅ use fetchData instead of data.json


const AboutUs = () => {
  const data = getstoredata(); // ✅ call the function to get data
  const aboutData = data["24"]["1"];
  const valuesData = data["24"]["2"];
  const workData = data["24"]["3"];

  return (
    <div>
      <HeroAboutUs data={aboutData} />
      <AboutValues data={valuesData} />
      <WorkWithUs data={workData} />
    </div>
  );
};

export default AboutUs;
