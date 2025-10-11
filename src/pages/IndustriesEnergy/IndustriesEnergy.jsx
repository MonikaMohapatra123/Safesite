import React from 'react'

import getstoredata from "../../json/data.json";
import IndustriesConstructionHero from '../../component/IndustriesConstructionHero/IndustriesConstructionHero';

import CommonIndustriesSafetyChallenges from '../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges';
import SafetyGoals from '../../component/SafetyGoals/SafetyGoals';
import RiskManagementSolutions from '../../component/RiskManagementSolutions/RiskManagementSolutions';
export const IndustriesEnergy = () => {
      const featureInspectionData = getstoredata["18"]["1"]; 
      const commonsafetychecklist =getstoredata["18"]["2"];
      const safetyGoalsData = getstoredata["18"]["3"];
  return (
    <div>
       <IndustriesConstructionHero data={featureInspectionData}/> 
      <CommonIndustriesSafetyChallenges data={commonsafetychecklist}/>
      <SafetyGoals data={safetyGoalsData} />
      <RiskManagementSolutions/>

    </div>
  )
}
