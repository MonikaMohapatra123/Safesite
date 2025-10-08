import React from 'react'
import HeroSafetyChecklist from "../../component/HeroSafetyChecklist/HeroSafetyChecklist";
import data from "../../json/data.json";
import SafetyTemplateList from '../../component/SafetyTemplateList/SafetyTemplateList';
import CommonSafetyChecklist from "../../component/CommonSafetyChecklist/CommonSafetyChecklist";

const TemplatesEmergencyPlan = () => {
     const heroData = data["15"]["1"];
      const templateData = data["15"]["2"];
  return (
    <div>
        <HeroSafetyChecklist data={heroData} /> 
         <SafetyTemplateList data={templateData} />
          <CommonSafetyChecklist />
       
    </div>
  )
}

export default TemplatesEmergencyPlan