import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import getstoredata from "../../json/data.json";
import Inspections from "../../component/Inspections/Inspections";
import InspectionSection from "../../component/InspectionSection/InspectionSection";
import RelatedFeatures from "../../component/RelatedFeatures/RelatedFeatures";
import CurvedSection from "../../component/CurvedSection/CurvedSection";

const BACKEND_URL = "https://safesite-backend.vercel.app";

const FeaturesDynamic = () => {
  const { pageName } = useParams(); // e.g. "inspections"
  const [feature, setFeature] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Local JSON sections
  const jsonPageData = getstoredata["6"];
  const localHeroData = jsonPageData?.["1"];
  const localInspectionData = jsonPageData?.["2"];
  const localRelatedData = jsonPageData?.["3"];

  useEffect(() => {
    const fetchFeature = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/features`);
        const matched = res.data.find(
          (item) =>
            item.page.toLowerCase().replace(/\s+/g, "") ===
            pageName.toLowerCase()
        );
        setFeature(matched || null);
      } catch (err) {
        console.error("Error fetching features:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeature();
  }, [pageName]);

  if (loading)
    return <div style={{ textAlign: "center", padding: "50px" }}>Loading...</div>;

  if (!feature)
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>No feature found for "{pageName}".</h2>
        <p>Please add it in your Admin panel.</p>
      </div>
    );

  return (
    <div>
      {/* ✅ Hero Section */}
      <Inspections data={localHeroData} />

      {/* ✅ Content Section */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>{localInspectionData?.Heading || feature.title}</h2>
        <p>{feature.description}</p>

        {feature.buttons?.map((btn, index) => (
          <button key={index} className={`btn ${btn.type}`}>
            {btn.text}
          </button>
        ))}
      </section>

      {/* ✅ Video / Local Sections */}
      <InspectionSection data={localInspectionData} />

      {/* ✅ Related Features */}
      <RelatedFeatures data={localRelatedData} />

      <CurvedSection />
    </div>
  );
};

export default FeaturesDynamic;
