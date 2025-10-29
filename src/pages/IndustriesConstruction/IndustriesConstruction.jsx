// src/pages/IndustriesConstruction/IndustriesConstruction.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { getstoredata } from "../../json/fetchData"; // ✅ use fetchData.js

import IndustriesConstructionHero from "../../component/IndustriesConstructionHero/IndustriesConstructionHero";
import CommonIndustriesSafetyChallenges from "../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges";
import RiskManagementSolutions from "../../component/RiskManagementSolutions/RiskManagementSolutions";
import SafetyGoals from "../../component/SafetyGoals/SafetyGoals";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/industries";

const IndustriesConstruction = () => {
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [localData, setLocalData] = useState(null);

  // ✅ Get local data from fetchData.js (localStorage)
  useEffect(() => {
    const data = getstoredata();
    setLocalData(data);
  }, []);

  // ✅ Fetch backend data for page = "construction"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const industry = res.data.find(
          (item) => item.page?.toLowerCase() === "construction"
        );
        setBackendData(industry);
      } catch (error) {
        console.error("Error fetching industry data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !localData)
    return <p style={{ textAlign: "center" }}>Loading...</p>;

  // ✅ Local fallback data from JSON stored in localStorage
  const heroData = localData["17"]?.["1"] || {};
  const safetyChallenges = localData["17"]?.["2"] || {};
  const safetyGoals = localData["17"]?.["3"] || {};

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No backend data found for page = "construction". Please add it in Admin Panel.
      </p>
    );

  // ✅ Merge backend + local fallback data
  const mergedHero = {
    ...heroData,
    HeroHeading: backendData.title || heroData.HeroHeading,
    HeroDescription: backendData.description || heroData.HeroDescription,
    HeroImage: backendData.image || heroData.HeroImage,
  };

  const mergedSafetyChallenges = {
    ...safetyChallenges,
    Items: backendData.checkpoints?.length
      ? backendData.checkpoints.map((cp) => ({
          title: cp.title,
          photo: cp.photo,
          details: cp.details?.map((d) => ({
            title: d.title,
            description: d.description,
          })),
        }))
      : safetyChallenges.Items,
  };

  const mergedSafetyGoals = { ...safetyGoals };

  return (
    <div>
      <IndustriesConstructionHero data={mergedHero} />
      <CommonIndustriesSafetyChallenges data={mergedSafetyChallenges} />
      <RiskManagementSolutions />
      <SafetyGoals data={mergedSafetyGoals} />
    </div>
  );
};

export default IndustriesConstruction;
