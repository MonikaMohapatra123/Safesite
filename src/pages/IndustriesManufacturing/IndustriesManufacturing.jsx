import React from 'react'

import getstoredata from "../../json/data.json";
import IndustriesConstructionHero from '../../component/IndustriesConstructionHero/IndustriesConstructionHero';
import CommonIndustriesSafetyChallenges from '../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges';
import SafetyGoals from '../../component/SafetyGoals/SafetyGoals';
import RiskManagementSolutions from '../../component/RiskManagementSolutions/RiskManagementSolutions';

const IndustriesManufacturing = () => {
   const featureInspectionData = getstoredata["19"]["1"]; 
      const commonsafetychecklist =getstoredata["19"]["2"];
       const safetyGoalsData = getstoredata["19"]["3"];
  return (
    <div>
       <IndustriesConstructionHero data={featureInspectionData}/> 
      <CommonIndustriesSafetyChallenges data={commonsafetychecklist}/>
       <SafetyGoals data={safetyGoalsData} />
       <RiskManagementSolutions/>
    

    </div>
  )
}

export default IndustriesManufacturing