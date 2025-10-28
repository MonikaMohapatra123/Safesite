// import React from 'react'

// import getstoredata from "../../json/data.json";
// import IndustriesConstructionHero from '../../component/IndustriesConstructionHero/IndustriesConstructionHero';

// import CommonIndustriesSafetyChallenges from '../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges';
// import SafetyGoals from '../../component/SafetyGoals/SafetyGoals';
// import RiskManagementSolutions from '../../component/RiskManagementSolutions/RiskManagementSolutions';
// export const IndustriesEnergy = () => {
//       const featureInspectionData = getstoredata["18"]["1"]; 
//       const commonsafetychecklist =getstoredata["18"]["2"];
//       const safetyGoalsData = getstoredata["18"]["3"];
//   return (
//     <div>
//        <IndustriesConstructionHero data={featureInspectionData}/> 
//       <CommonIndustriesSafetyChallenges data={commonsafetychecklist}/>
//       <SafetyGoals data={safetyGoalsData} />
//       <RiskManagementSolutions/>

//     </div>
//   )
// }







import React, { useEffect, useState } from "react";
import axios from "axios";
import getstoredata from "../../json/data.json";

import IndustriesConstructionHero from "../../component/IndustriesConstructionHero/IndustriesConstructionHero";
import CommonIndustriesSafetyChallenges from "../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges";
import RiskManagementSolutions from "../../component/RiskManagementSolutions/RiskManagementSolutions";
import SafetyGoals from "../../component/SafetyGoals/SafetyGoals";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/industries";

const IndustriesEnergy  = () => {
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Local fallback data
  const heroData = getstoredata["18"]["1"];
  const safetyChallenges = getstoredata["18"]["2"];
  const safetyGoals = getstoredata["18"]["3"];

  // ✅ Fetch backend industry data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        // You can filter by specific title like “energy”
        const industry = res.data.find(
          (item) => item.title?.toLowerCase() === "energy"
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

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No backend data found for “Construction”. Please add it in Admin Panel.
      </p>
    );

  // ✅ Merge backend + local data
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

  const mergedSafetyGoals = {
    ...safetyGoals,
  };

  return (
    <div>
      <IndustriesConstructionHero data={mergedHero} />
      <CommonIndustriesSafetyChallenges data={mergedSafetyChallenges} />
      <RiskManagementSolutions />
      <SafetyGoals data={mergedSafetyGoals} />
    </div>
  );
};

export default IndustriesEnergy ;

