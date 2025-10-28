import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getstoredata from "../../json/data.json";
import RelatedFeatures from "../../component/RelatedFeatures/RelatedFeatures";
import CurvedSection from "../../component/CurvedSection/CurvedSection";
import Inspections from "../../component/Inspections/Inspections";
import InspectionSection from "../../component/InspectionSection/InspectionSection";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/features";

const TeamManagement = () => {
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Local fallback data from JSON (index "9")
  const featureInspectionData = getstoredata["9"]["1"];
  const inspectionData = getstoredata["9"]["2"];
  const relatedFeaturesData = getstoredata["9"]["3"];

  // ✅ Fetch backend data
  useEffect(() => {
    const fetchFeature = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const feature = res.data.find(
          (f) => f.page?.toLowerCase() === "team management"
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

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No feature found for “Team Management”. Please add it in Admin Panel.
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

export default TeamManagement;
