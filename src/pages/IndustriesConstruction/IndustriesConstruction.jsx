import React from 'react'

import getstoredata from "../../json/data.json";
import IndustriesConstructionHero from '../../component/IndustriesConstructionHero/IndustriesConstructionHero';

import CommonIndustriesSafetyChallenges from '../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges';
import SafetyGoals from '../../component/SafetyGoals/SafetyGoals';
import RiskManagementSolutions from '../../component/RiskManagementSolutions/RiskManagementSolutions';
export const IndustriesConstruction = () => {
      const featureInspectionData = getstoredata["17"]["1"]; 
      const commonsafetychecklist =getstoredata["17"]["2"];
      const safetyGoalsData = getstoredata["17"]["3"];
  return (
    <div>
       <IndustriesConstructionHero data={featureInspectionData}/> 
      <CommonIndustriesSafetyChallenges data={commonsafetychecklist}/>
      <RiskManagementSolutions/>
      <SafetyGoals data={safetyGoalsData}/>

    </div>
  )
}
