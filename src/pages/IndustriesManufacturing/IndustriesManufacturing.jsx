import React from 'react'

import getstoredata from "../../json/data.json";
import IndustriesConstructionHero from '../../component/IndustriesConstructionHero/IndustriesConstructionHero';
import CommonIndustriesSafetyChallenges from '../../component/CommonIndustriesSafetyChallenges/CommonIndustriesSafetyChallenges';

const IndustriesManufacturing = () => {
   const featureInspectionData = getstoredata["19"]["1"]; 
      const commonsafetychecklist =getstoredata["19"]["2"];
  return (
    <div>
       <IndustriesConstructionHero data={featureInspectionData}/> 
      <CommonIndustriesSafetyChallenges data={commonsafetychecklist}/>

    </div>
  )
}

export default IndustriesManufacturing