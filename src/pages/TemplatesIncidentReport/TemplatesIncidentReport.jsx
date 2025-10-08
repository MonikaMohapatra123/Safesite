import React from 'react'
import HeroSafetyChecklist from "../../component/HeroSafetyChecklist/HeroSafetyChecklist";
import data from "../../json/data.json";
import SafetyTemplateList from '../../component/SafetyTemplateList/SafetyTemplateList';
import CommonSafetyChecklist from "../../component/CommonSafetyChecklist/CommonSafetyChecklist";

const TemplatesIncidentReport = () => {
     const heroData = data["13"]["1"];
      const templateData = data["13"]["2"];
  return (
    <div>
        <HeroSafetyChecklist data={heroData} /> 
         <SafetyTemplateList data={templateData} />
          <CommonSafetyChecklist />
       
    </div>
  )
}

export default TemplatesIncidentReport