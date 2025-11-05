import React, { useEffect, useState } from "react";
import axios from "axios";
import { getstoredata } from "../../json/fetchData";

import IndustriesConstructionHero from "../../component/IndustriesConstructionHero/IndustriesConstructionHero";
import CommonIndustriesSafetyChallenges from "../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges";
import RiskManagementSolutions from "../../component/RiskManagementSolutions/RiskManagementSolutions";
import SafetyGoals from "../../component/SafetyGoals/SafetyGoals";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/industries";

const IndustryPage = ({ pageName, localId }) => {
  const [backendData, setBackendData] = useState(null);
  const [localData, setLocalData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load local JSON (from localStorage)
  useEffect(() => {
    setLocalData(getstoredata());
  }, []);

  // Fetch backend data dynamically
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const industry = res.data.find(
          (item) => item.page?.toLowerCase() === pageName.toLowerCase()
        );
        setBackendData(industry);
      } catch (err) {
        console.error(`Error loading ${pageName}`, err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pageName]);

  if (loading || !localData)
    return <p style={{ textAlign: "center" }}>Loading...</p>;

  const heroData = localData[localId]?.["1"] || {};
  const challengesData = localData[localId]?.["2"] || {};
  const goalsData = localData[localId]?.["3"] || {};

  const mergedHero = {
    ...heroData,
    HeroHeading: backendData?.title || heroData.HeroHeading,
    HeroDescription: backendData?.description || heroData.HeroDescription,
    HeroImage:
      backendData?.images?.[0] || backendData?.image || heroData.HeroImage,
  };

  const mergedChallenges = {
    ...challengesData,
    Items: backendData?.checkpoints?.length
      ? backendData.checkpoints.map((cp) => ({
          title: cp.title,
          photo: cp.photo,
          details: cp.details?.map((d) => ({
            title: d.title,
            description: d.description,
          })),
        }))
      : challengesData.Items,
  };

  const mergedGoals = { ...goalsData };

  return (
    <div>
      <IndustriesConstructionHero data={mergedHero} />
      <CommonIndustriesSafetyChallenges data={mergedChallenges} />
      <RiskManagementSolutions />
      <SafetyGoals data={mergedGoals} />
    </div>
  );
};

export default IndustryPage;
