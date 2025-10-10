import React from 'react'
import HeroSectionBlog from '../../component/HeroSectionBlog/HeroSectionBlog'
import data from'../../json/data.json';
import"./ResourceCaseStudies.css";
import AllCompanyTestimonials from '../../component/AllCompanyTestimonials/AllCompanyTestimonials';
import CurvedSection from '../../component/CurvedSection/CurvedSection';
import SafetyTopicsCards from '../../component/SafetyTopicsCards/SafetyTopicsCards';
const ResourceCaseStudies = () => {
     const resourceblog = data["21"]["1"];
     const testimonialsData = data["21"]["3"]; // Object!
     const safetytopiccards=data["21"]["2"];
  return (
    <div>
      <HeroSectionBlog data={resourceblog}/>
      <AllCompanyTestimonials  data={testimonialsData}/>
      <SafetyTopicsCards data={safetytopiccards}/>
      <CurvedSection  class="resourcecase"/>


    </div>
  )
}

export default ResourceCaseStudies;