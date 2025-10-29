// src/pages/Permission/Permission.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { getstoredata } from "../../json/fetchData"; // ✅ Use fetchData.js instead of data.json

import RelatedFeatures from "../../component/RelatedFeatures/RelatedFeatures";
import CurvedSection from "../../component/CurvedSection/CurvedSection";
import Inspections from "../../component/Inspections/Inspections";
import InspectionSection from "../../component/InspectionSection/InspectionSection";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/features";

const Permission = () => {
  const [backendData, setBackendData] = useState(null);
  const [localData, setLocalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Load local data from fetchData.js (localStorage)
  useEffect(() => {
    const stored = getstoredata();
    setLocalData(stored);
  }, []);

  // ✅ Fetch backend data
  useEffect(() => {
    const fetchFeature = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const feature = res.data.find(
          (f) => f.page?.toLowerCase() === "permission"
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

  if (loading || !localData)
    return <p style={{ textAlign: "center" }}>Loading...</p>;

  // ✅ Local fallback data (index "11" for Permission page)
  const featureInspectionData = localData["11"]?.["1"] || {};
  const inspectionData = localData["11"]?.["2"] || {};
  const relatedFeaturesData = localData["11"]?.["3"] || {};

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No feature found for “Permission”. Please add it in Admin Panel.
      </p>
    );

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

  // ✅ Safe video fallback
  const backendVideo = backendData.images?.[1];
  const mergedVideo =
    backendVideo && !backendVideo.includes("403")
      ? backendVideo
      : inspectionData.Video;

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
      {/* ✅ Hero section */}
      <Inspections data={mergedHero} navigate={navigate} />

      {/* ✅ Inspection section */}
      <InspectionSection data={mergedInspectionSection} />

      {/* ✅ Related Features */}
      <RelatedFeatures data={relatedFeaturesData} />

      {/* ✅ Curved Footer Section */}
      <CurvedSection />
    </div>
  );
};

export default Permission;
