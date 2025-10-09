import React from 'react'
import HeroSectionBlog from '../../component/HeroSectionBlog/HeroSectionBlog'
import data from'../../json/data.json';
import AllCompanyTestimonials from '../../component/AllCompanyTestimonials/AllCompanyTestimonials';
import CurvedSection from '../../component/CurvedSection/CurvedSection';
const ResourceBlog = () => {
     const resourceblog = data["20"]["1"];
     const testimonialsData = data["3"]; // Object!
  return (
    <div>
      <HeroSectionBlog data={resourceblog}/>
      <AllCompanyTestimonials  data={testimonialsData}/>
      <CurvedSection/>


    </div>
  )
}

export default ResourceBlog