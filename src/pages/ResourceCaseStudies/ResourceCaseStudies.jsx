import React, { useEffect, useState } from "react";
import axios from "axios";
import { getstoredata } from "../../json/fetchData"; // ✅ using fetchData.js

import HeroSectionBlog from "../../component/HeroSectionBlog/HeroSectionBlog";
import AllCompanyTestimonials from "../../component/AllCompanyTestimonials/AllCompanyTestimonials";
import SafetyTopicsCards from "../../component/SafetyTopicsCards/SafetyTopicsCards";
import CurvedSection from "../../component/CurvedSection/CurvedSection";

import "./ResourceCaseStudies.css";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/casestudies";

const ResourceCaseStudies = () => {
  const [backendData, setBackendData] = useState(null);
  const [localData, setLocalData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Get local data from fetchData.js (localStorage)
  useEffect(() => {
    const stored = getstoredata();
    setLocalData(stored);
  }, []);

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
        console.error("❌ Error fetching case study data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !localData)
    return <p style={{ textAlign: "center" }}>Loading...</p>;

  // ✅ Safe fallback checks — no crash if “21” is missing
  const localHeroData = localData?.["21"]?.["1"] || {};
  const localSafetyTopics = localData?.["21"]?.["2"] || {};
  const localTestimonials = localData?.["21"]?.["3"] || {};

  // ✅ Merge backend + local fallback
  const mergedHero = {
    ...localHeroData,
    HeroImage: backendData?.featured?.image || localHeroData.HeroImage,
    HeroTag: backendData?.featured?.tag || localHeroData.HeroTag,
    HeroReadTime:
      backendData?.featured?.readTime || localHeroData.HeroReadTime,
    HeroTitle: backendData?.featured?.title || localHeroData.HeroTitle,
    HeroDescription:
      backendData?.featured?.description || localHeroData.HeroDescription,
    HeroAuthor: backendData?.featured?.author || localHeroData.HeroAuthor,
    HeroDate: backendData?.featured?.date || localHeroData.HeroDate,
  };

  const mergedSafetyTopics =
    backendData?.topicsSection?.topics?.length > 0
      ? backendData.topicsSection
      : localSafetyTopics;

  const mergedTestimonials =
    backendData?.testimonials?.length > 0
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
