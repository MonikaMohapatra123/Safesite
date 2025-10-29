// src/pages/Exports/Exports.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getstoredata } from "../../json/fetchData"; // ✅ Import function
import RelatedFeatures from "../../component/RelatedFeatures/RelatedFeatures";
import CurvedSection from "../../component/CurvedSection/CurvedSection";
import Inspections from "../../component/Inspections/Inspections";
import InspectionSection from "../../component/InspectionSection/InspectionSection";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/features";

const Exports = () => {
  const [backendData, setBackendData] = useState(null);
  const [localData, setLocalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Load local stored data once on mount
  useEffect(() => {
    const data = getstoredata();
    if (data) setLocalData(data);
  }, []);

  // ✅ Fetch backend data
  useEffect(() => {
    const fetchFeature = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const feature = res.data.find(
          (f) => f.page?.toLowerCase() === "exports"
        );
        setBackendData(feature);
      } catch (error) {
        console.error("❌ Error fetching backend data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeature();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (!localData)
    return (
      <p style={{ textAlign: "center" }}>
        Local JSON data not found in localStorage. Please reload the page once.
      </p>
    );

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No feature found for “Exports”. Please add it in Admin Panel.
      </p>
    );

  // ✅ Access safely with optional chaining
  const featureInspectionData = localData["10"]?.["1"] || {};
  const inspectionData = localData["10"]?.["2"] || {};
  const relatedFeaturesData = localData["10"]?.["3"] || {};

  // ✅ Merge backend + local (Hero Section)
  const mergedHero = {
    ...featureInspectionData,
    HeroHeading: backendData.title || featureInspectionData.HeroHeading,
    HeroDescription:
      backendData.description || featureInspectionData.HeroDescription,
    HeroButtons: backendData.buttons?.length
      ? backendData.buttons.map((btn, i) => ({
          ...btn,
          link: backendData.links?.[i] || "/features",
        }))
      : featureInspectionData.HeroButtons,
    HeroImage: backendData.images?.[0] || featureInspectionData.HeroImage,
  };

  // ✅ Safe video fallback check
  const backendVideo = backendData.images?.[1];
  const mergedVideo =
    backendVideo && !backendVideo.includes("403")
      ? backendVideo
      : inspectionData.Video; // fallback to local

  // ✅ Merge backend + local (Inspection Section)
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
    Video: mergedVideo,
  };

  return (
    <div>
      {/* ✅ Pass navigate for link buttons */}
      <Inspections data={mergedHero} navigate={navigate} />

      {/* ✅ Inspection Section with safe fallback video */}
      <InspectionSection data={mergedInspectionSection} />

      <RelatedFeatures data={relatedFeaturesData} />
      <CurvedSection />
    </div>
  );
};

export default Exports;
