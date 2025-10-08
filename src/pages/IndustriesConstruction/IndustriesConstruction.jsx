import React from 'react'

import getstoredata from "../../json/data.json";
import IndustriesConstructionHero from '../../component/IndustriesConstructionHero/IndustriesConstructionHero';

import CommonIndustriesSafetyChallenges from '../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges';
export const IndustriesConstruction = () => {
      const featureInspectionData = getstoredata["17"]["1"]; 
      const commonsafetychecklist =getstoredata["17"]["2"];
  return (
    <div>
       <IndustriesConstructionHero data={featureInspectionData}/> 
      <CommonIndustriesSafetyChallenges data={commonsafetychecklist}/>

    </div>
  )
}
