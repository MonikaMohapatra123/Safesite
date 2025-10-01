import React from 'react';
import Inspections from '../../component/Inspections/Inspections';
import InspectionSection from '../../component/InspectionSection/InspectionSection';
import RelatedFeatures from '../../component/RelatedFeatures/RelatedFeatures';
import getstoredata from "../../json/data.json";
import CurvedSection from '../../component/CurvedSection/CurvedSection';

const FeaturesInspections = () => {
  const featureInspectionData = getstoredata["6"]["1"];  // Hero section
  const inspectionData = getstoredata["6"]["2"];        // Inspection section
  const relatedFeaturesData = getstoredata["6"]["3"];  // Related Features
  

  return (
    <div>
      <Inspections data={featureInspectionData} />
      <InspectionSection data={inspectionData} />
      <RelatedFeatures data={relatedFeaturesData} />
      <CurvedSection/>
    </div>
  );
};

export default FeaturesInspections;
