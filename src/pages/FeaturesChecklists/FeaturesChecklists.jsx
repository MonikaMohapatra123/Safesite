import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Inspections from "../../component/Inspections/Inspections";
import InspectionSection from "../../component/InspectionSection/InspectionSection";
import RelatedFeatures from "../../component/RelatedFeatures/RelatedFeatures";
import CurvedSection from "../../component/CurvedSection/CurvedSection";
import { getstoredata } from "../../json/fetchData"; // ✅ using dynamic API data

const BACKEND_URL = "https://safesite-backend.vercel.app/api/features";

const FeaturesChecklists = () => {
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [localData, setLocalData] = useState(null); // ✅ store fetched localStorage data
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
        const feature = res.data.find(
          (f) => f.page?.toLowerCase() === "checklists"
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

  if (!localData)
    return <p style={{ textAlign: "center" }}>Loading local data...</p>;

  // ✅ Extract local fallback data from stored JSON
  const featureChecklistData = localData["7"]?.["1"];
  const inspectionData = localData["7"]?.["2"];
  const relatedFeaturesData = localData["7"]?.["3"];

  if (loading) return <p style={{ textAlign: "center" }}>Loading backend data...</p>;

  if (!backendData)
    return (
      <p style={{ textAlign: "center" }}>
        No feature found for “checklists”. Please add it in Admin Panel.
      </p>
    );

  // ✅ Merge backend + local
  const mergedHero = {
    ...featureChecklistData,
    HeroHeading: backendData.title || featureChecklistData?.HeroHeading,
    HeroDescription:
      backendData.description || featureChecklistData?.HeroDescription,
    HeroButtons: backendData.buttons?.length
      ? backendData.buttons.map((btn, i) => ({
          ...btn,
          link: backendData.links?.[i] || "/features",
        }))
      : featureChecklistData?.HeroButtons,
    HeroImage: backendData.images?.[0] || featureChecklistData?.HeroImage,
  };

  const mergedInspectionSection = {
    ...inspectionData,
    Heading: backendData.page || inspectionData?.Heading,
    Items: backendData.checkpoints?.length
      ? backendData.checkpoints.map((cp) => ({
          title: cp.title,
          description: cp.description,
          photo: cp.photo,
        }))
      : inspectionData?.Items,
    Video: backendData.images?.[1] || inspectionData?.Video,
  };

  return (
    <div>
      <Inspections data={mergedHero} navigate={navigate} />
      <InspectionSection data={mergedInspectionSection} />
      <RelatedFeatures data={relatedFeaturesData} />
      <CurvedSection />
    </div>
  );
};

export default FeaturesChecklists;
