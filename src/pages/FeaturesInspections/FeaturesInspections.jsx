
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ For navigation
import Inspections from "../../component/Inspections/Inspections";
import InspectionSection from "../../component/InspectionSection/InspectionSection";
import RelatedFeatures from "../../component/RelatedFeatures/RelatedFeatures";
import CurvedSection from "../../component/CurvedSection/CurvedSection";
import getstoredata from "../../json/data.json";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/features";

const FeaturesInspections = () => {
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Local fallback data
  const featureInspectionData = getstoredata["6"]["1"];
  const inspectionData = getstoredata["6"]["2"];
  const relatedFeaturesData = getstoredata["6"]["3"];

  // ✅ Fetch from backend
  useEffect(() => {
    const fetchFeature = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const feature = res.data.find(
          (f) => f.page?.toLowerCase() === "inspections"
        );
        setBackendData(feature);
      } catch (error) {
        console.error("Error fetching backend data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeature();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No feature found for “inspections”. Please add it in Admin Panel.
      </p>
    );

  // ✅ Merge backend + local
  const mergedHero = {
    ...featureInspectionData,
    HeroHeading: backendData.title || featureInspectionData.HeroHeading,
    HeroDescription:
      backendData.description || featureInspectionData.HeroDescription,
    HeroButtons: backendData.buttons?.length
      ? backendData.buttons.map((btn, i) => ({
          ...btn,
          link: backendData.links?.[i] || "/features", // ✅ Use backend link or fallback
        }))
      : featureInspectionData.HeroButtons,
    HeroImage: backendData.images?.[0] || featureInspectionData.HeroImage,
  };

  const mergedInspectionSection = {
    ...inspectionData,
    Heading: backendData.page || inspectionData.Heading,
    Items: backendData.checkpoints?.length
      ? backendData.checkpoints.map((cp) => ({
          title: cp.title,
          description: cp.description,
          photo: cp.photo,
        }))
      : inspectionData.Items,
    Video: backendData.images?.[1] || inspectionData.Video,
  };

  return (
    <div>
      <Inspections data={mergedHero} navigate={navigate} /> {/* ✅ pass navigate */}
      <InspectionSection data={mergedInspectionSection} />
      <RelatedFeatures data={relatedFeaturesData} />
      <CurvedSection />
    </div>
  );
};

export default FeaturesInspections;
