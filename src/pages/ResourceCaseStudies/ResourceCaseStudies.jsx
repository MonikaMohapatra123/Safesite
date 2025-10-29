// import React from 'react'
// import HeroSectionBlog from '../../component/HeroSectionBlog/HeroSectionBlog'
// import data from'../../json/data.json';
// import"./ResourceCaseStudies.css";
// import AllCompanyTestimonials from '../../component/AllCompanyTestimonials/AllCompanyTestimonials';
// import CurvedSection from '../../component/CurvedSection/CurvedSection';
// import SafetyTopicsCards from '../../component/SafetyTopicsCards/SafetyTopicsCards';
// const ResourceCaseStudies = () => {
//      const resourceblog = data["21"]["1"];
//      const testimonialsData = data["21"]["3"]; // Object!
//      const safetytopiccards=data["21"]["2"];
//   return (
//     <div>
//       <HeroSectionBlog data={resourceblog}/>
//       <AllCompanyTestimonials  data={testimonialsData}/>
//       <SafetyTopicsCards data={safetytopiccards}/>
//       <CurvedSection  class="resourcecase"/>


//     </div>
//   )
// }

// export default ResourceCaseStudies;



import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../../json/data.json";

import HeroSectionBlog from "../../component/HeroSectionBlog/HeroSectionBlog";
import AllCompanyTestimonials from "../../component/AllCompanyTestimonials/AllCompanyTestimonials";
import SafetyTopicsCards from "../../component/SafetyTopicsCards/SafetyTopicsCards";
import CurvedSection from "../../component/CurvedSection/CurvedSection";

import "./ResourceCaseStudies.css";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/casestudies"; // ✅ Backend route

const ResourceCaseStudies = () => {
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Local fallback data (ID: 21)
  const localHeroData = data["21"]["1"];
  const localSafetyTopics = data["21"]["2"];
  const localTestimonials = data["21"]["3"];

  // ✅ Fetch from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const caseStudy = res.data.find(
          (item) => item.page?.toLowerCase() === "resourcecasestudies"
        );
        setBackendData(caseStudy);
      } catch (error) {
        console.error("Error fetching case study data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No backend data found for page = "ResourceCaseStudies".  
        Please add it in Admin Panel.
      </p>
    );

  // ✅ Merge backend + local fallback
  const mergedHero = {
    ...localHeroData,
    HeroImage: backendData.featured?.image || localHeroData.HeroImage,
    HeroTag: backendData.featured?.tag || localHeroData.HeroTag,
    HeroReadTime:
      backendData.featured?.readTime || localHeroData.HeroReadTime,
    HeroTitle: backendData.featured?.title || localHeroData.HeroTitle,
    HeroDescription:
      backendData.featured?.description || localHeroData.HeroDescription,
    HeroAuthor: backendData.featured?.author || localHeroData.HeroAuthor,
    HeroDate: backendData.featured?.date || localHeroData.HeroDate,
  };

  const mergedSafetyTopics =
    backendData.topicsSection?.topics?.length > 0
      ? backendData.topicsSection
      : localSafetyTopics;

  const mergedTestimonials =
    backendData.testimonials?.length > 0
      ? backendData.testimonials
      : localTestimonials;

  // ✅ Final Render
  return (
    <div>
      <HeroSectionBlog data={mergedHero} />
      <SafetyTopicsCards data={mergedSafetyTopics} />
      <AllCompanyTestimonials data={mergedTestimonials} />
      <CurvedSection className="resourcecase" />
    </div>
  );
};

export default ResourceCaseStudies;
