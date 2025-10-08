import React from 'react'

import getstoredata from "../../json/data.json";
import IndustriesConstructionHero from '../../component/IndustriesConstructionHero/IndustriesConstructionHero';

import CommonIndustriesSafetyChallenges from '../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges';
export const IndustriesEnergy = () => {
      const featureInspectionData = getstoredata["18"]["1"]; 
      const commonsafetychecklist =getstoredata["18"]["2"];
  return (
    <div>
       <IndustriesConstructionHero data={featureInspectionData}/> 
      <CommonIndustriesSafetyChallenges data={commonsafetychecklist}/>

    </div>
  )
}
