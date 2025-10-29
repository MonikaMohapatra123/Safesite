// src/pages/IndustriesManufacturing/IndustriesManufacturing.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { getstoredata } from "../../json/fetchData"; // ✅ use fetchData.js

import IndustriesConstructionHero from "../../component/IndustriesConstructionHero/IndustriesConstructionHero";
import CommonIndustriesSafetyChallenges from "../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges";
import SafetyGoals from "../../component/SafetyGoals/SafetyGoals";
import RiskManagementSolutions from "../../component/RiskManagementSolutions/RiskManagementSolutions";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/industries";

const IndustriesManufacturing = () => {
  const [backendData, setBackendData] = useState(null);
  const [localData, setLocalData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load local data from localStorage via fetchData.js
  useEffect(() => {
    const stored = getstoredata();
    setLocalData(stored);
  }, []);

  // ✅ Fetch backend data for page = "manufacturing"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const industry = res.data.find(
          (item) => item.page?.toLowerCase() === "manufacturing"
        );
        setBackendData(industry);
      } catch (error) {
        console.error("Error fetching manufacturing industry data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !localData)
    return <p style={{ textAlign: "center" }}>Loading...</p>;

  // ✅ Local fallback data (ID: 19)
  const heroData = localData["19"]?.["1"] || {};
  const safetyChallenges = localData["19"]?.["2"] || {};
  const safetyGoals = localData["19"]?.["3"] || {};

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No backend data found for page = "manufacturing". Please add it in Admin Panel.
      </p>
    );

  // ✅ Merge backend and local fallback data
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
      <SafetyGoals data={mergedSafetyGoals} />
      <RiskManagementSolutions />
    </div>
  );
};

export default IndustriesManufacturing;
