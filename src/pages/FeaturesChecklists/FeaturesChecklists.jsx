import React from 'react';
import getstoredata from "../../json/data.json";
import Checklists from '../../component/Checklists/Checklists';
import ChecklistSection from '../../component/ChecklistSection/ChecklistSection';
import ChecklistFeatures from '../../component/ChecklistFeatures/ChecklistFeatures'; 
import CurvedSection from '../../component/CurvedSection/CurvedSection';

const FeaturesChecklists = () => {
  const featurechecklistData = getstoredata["7"]["1"];
  const checklistData = getstoredata["7"]["2"]; 
  const checklistFeaturesData = getstoredata ["7"]["3"]; // ✅ ID 3 for ChecklistFeatures

  return (
    <div>
      <Checklists data={featurechecklistData} />
      <ChecklistSection data={checklistData} />
      <ChecklistFeatures data={checklistFeaturesData} /> {/* ✅ Pass props */}
      <CurvedSection/>
    </div>
  );
}

export default FeaturesChecklists;
