// ✅ Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Inspections from "../../component/Inspections/Inspections";
import InspectionSection from "../../component/InspectionSection/InspectionSection";
import RelatedFeatures from "../../component/RelatedFeatures/RelatedFeatures";
import CurvedSection from "../../component/CurvedSection/CurvedSection";

import { getstoredata } from "../../json/fetchData"; // ✅ Use fetchData

// ✅ Your backend API URL
const BACKEND_URL = "https://safesite-backend.vercel.app/api/features";

const Dashboard = () => {
  const data = getstoredata(); // ✅ Correctly call the function
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Local fallback data from JSON
  const featureInspectionData = data["8"]["1"]; // Hero Section
  const inspectionData = data["8"]["2"];        // Middle Section
  const relatedData = data["8"]["3"];           // Related Features

  // ✅ Fetch backend data
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const dashboardFeature = res.data.find(
          (f) => f.page?.toLowerCase() === "dashboard"
        );
        setBackendData(dashboardFeature);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  // ✅ Loading + empty state
  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No feature found for “dashboard”. Please add it in Admin Panel.
      </p>
    );

  // ✅ Merge backend + local data (Hero)
  const mergedHero = {
    ...featureInspectionData,
    HeroHeading: backendData.title || featureInspectionData.HeroHeading,
    HeroDescription:
      backendData.description || featureInspectionData.HeroDescription,
    HeroButtons: backendData.buttons?.length
      ? backendData.buttons.map((btn, i) => ({
          ...btn,
          link: backendData.links?.[i] || "/dashboard",
        }))
      : featureInspectionData.HeroButtons,
    HeroImage: backendData.images?.[0] || featureInspectionData.HeroImage,
  };

  // ✅ Merge backend + local data (Inspection Section)
  const videoUrl =
    backendData.images?.[1] && backendData.images[1].includes(".mp4")
      ? backendData.images[1]
      : inspectionData.Video;

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
    Video: videoUrl,
  };

  return (
    <div>
      {/* ✅ Hero Section */}
      <Inspections data={mergedHero} navigate={navigate} />

      {/* ✅ Video + Cards Section */}
      <InspectionSection data={mergedInspectionSection} />

      {/* ✅ Related Features */}
      <RelatedFeatures data={relatedData} />

      {/* ✅ Curved Footer Section */}
      <CurvedSection />
    </div>
  );
};

export default Dashboard;
