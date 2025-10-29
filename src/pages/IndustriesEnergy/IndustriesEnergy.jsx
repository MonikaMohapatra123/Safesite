// src/pages/IndustriesEnergy/IndustriesEnergy.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { getstoredata } from "../../json/fetchData"; // ✅ using fetchData.js

import IndustriesConstructionHero from "../../component/IndustriesConstructionHero/IndustriesConstructionHero";
import CommonIndustriesSafetyChallenges from "../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges";
import RiskManagementSolutions from "../../component/RiskManagementSolutions/RiskManagementSolutions";
import SafetyGoals from "../../component/SafetyGoals/SafetyGoals";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/industries";

const IndustriesEnergy = () => {
  const [backendData, setBackendData] = useState(null);
  const [localData, setLocalData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load local data from localStorage (stored via fetchData.js)
  useEffect(() => {
    const data = getstoredata();
    setLocalData(data);
  }, []);

  // ✅ Fetch backend data for page = "energy"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const industry = res.data.find(
          (item) => item.page?.toLowerCase() === "energy"
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

  // ✅ Local fallback data (id 18)
  const heroData = localData["18"]?.["1"] || {};
  const safetyChallenges = localData["18"]?.["2"] || {};
  const safetyGoals = localData["18"]?.["3"] || {};

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No backend data found for page = "energy". Please add it in Admin Panel.
      </p>
    );

  // ✅ Merge backend + local fallback data
  const mergedHero = {
    ...heroData,
    HeroHeading: backendData.title || heroData.HeroHeading,
    HeroDescription: backendData.description || heroData.HeroDescription,
    HeroImage:
      backendData.images?.[0] || backendData.image || heroData.HeroImage,
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

export default IndustriesEnergy;
