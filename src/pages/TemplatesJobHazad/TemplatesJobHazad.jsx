import React from "react";
import HeroSafetyChecklist from "../../component/HeroSafetyChecklist/HeroSafetyChecklist";
import CommonSafetyChecklist from "../../component/CommonSafetyChecklist/CommonSafetyChecklist";
import SafetyTemplateList from "../../component/SafetyTemplateList/SafetyTemplateList";
import data from "../../json/data.json";

const TemplatesJobHazad = () => {
  const heroData = data["14"]["1"];
  const templateData = data["14"]["2"];

  return (
    <div>
      <HeroSafetyChecklist data={heroData} />
      <SafetyTemplateList data={templateData} />
      <CommonSafetyChecklist />
    </div>
  );
};

export default TemplatesJobHazad; 