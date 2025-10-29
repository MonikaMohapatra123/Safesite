import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Inspections from "../../component/Inspections/Inspections";
import InspectionSection from "../../component/InspectionSection/InspectionSection";
import RelatedFeatures from "../../component/RelatedFeatures/RelatedFeatures";
import CurvedSection from "../../component/CurvedSection/CurvedSection";

import { getstoredata } from "../../json/fetchData"; // ✅ Import dynamic data handler

// ✅ Backend URL
const BACKEND_URL = "https://safesite-backend.vercel.app/api/features";

const FeaturesInspections = () => {
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [localData, setLocalData] = useState(null);
  const navigate = useNavigate();

  // ✅ Fetch local (from localStorage stored by fetchData.js)
  useEffect(() => {
    const stored = getstoredata();
    if (stored) {
      setLocalData(stored);
    }
  }, []);

  // ✅ Fetch from backend
  useEffect(() => {
    const fetchFeature = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const inspectionFeature = res.data.find(
          (f) => f.page?.toLowerCase() === "inspections"
        );
        setBackendData(inspectionFeature);
      } catch (error) {
        console.error("Error fetching backend data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeature();
  }, []);

  if (!localData)
    return <p style={{ textAlign: "center" }}>Loading local data...</p>;

  // ✅ Extract local fallback data from stored JSON
  const heroLocal = localData["6"]?.["1"];
  const inspectionLocal = localData["6"]?.["2"];
  const relatedFeatures = localData["6"]?.["3"];

  if (loading) return <p style={{ textAlign: "center" }}>Loading backend data...</p>;

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No inspection feature found. Please add it in Admin Panel.
      </p>
    );

  // ✅ Merge backend + local
  const mergedHero = {
    ...heroLocal,
    HeroHeading: backendData.title || heroLocal?.HeroHeading,
    HeroDescription: backendData.description || heroLocal?.HeroDescription,
    HeroImage: backendData.images?.[0] || heroLocal?.HeroImage,
    HeroButtons: backendData.buttons?.length
      ? backendData.buttons.map((btn, i) => ({
          ...btn,
          link: backendData.links?.[i] || "/features",
        }))
      : heroLocal?.HeroButtons,
  };

  const mergedInspectionSection = {
    ...inspectionLocal,
    Heading: backendData.page || inspectionLocal?.Heading,
    Items: backendData.checkpoints?.length
      ? backendData.checkpoints.map((cp) => ({
          title: cp.title,
          description: cp.description,
          photo: cp.photo,
        }))
      : inspectionLocal?.Items,
    Video: backendData.images?.[1] || inspectionLocal?.Video,
  };

  // ✅ Render components
  return (
    <div>
      <Inspections data={mergedHero} navigate={navigate} />
      <InspectionSection data={mergedInspectionSection} />
      <RelatedFeatures data={relatedFeatures} />
      <CurvedSection />
    </div>
  );
};

export default FeaturesInspections;
