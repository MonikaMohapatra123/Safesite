
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import Inspections from "../../component/Inspections/Inspections";
// import InspectionSection from "../../component/InspectionSection/InspectionSection";
// import RelatedFeatures from "../../component/RelatedFeatures/RelatedFeatures";
// import CurvedSection from "../../component/CurvedSection/CurvedSection";

// import { getstoredata } from "../../json/fetchData";
// const BACKEND_URL = "https://safesite-backend.vercel.app/api/features";

// const FeaturePage = ({ pageKey, jsonId }) => {
//   const [backendData, setBackendData] = useState(null);
//   const [localData, setLocalData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // normalize incoming pageKey once
//   const normalizedPageKey = (pageKey || "").toString().trim().toLowerCase();

//   // Load local JSON only when jsonId exists
//   useEffect(() => {
//     if (!jsonId) return;
//     const stored = getstoredata();
//     if (stored) setLocalData(stored);
//   }, [jsonId]);

//   // Fetch backend data
//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await axios.get(BACKEND_URL);
//         const feature = res.data.find(
//           (f) => (f.page || "").toString().trim().toLowerCase() === normalizedPageKey
//         );
//         setBackendData(feature);
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, [normalizedPageKey]);

//   if (loading) return <p>Loading...</p>;
//   if (!backendData) return <p>No feature found for "{pageKey}".</p>;

//   if (!jsonId) {
//     return (
//       <>
//         <Inspections
//           data={{
//             HeroHeading: backendData.title,
//             HeroDescription: backendData.description,
//             HeroImage: backendData.images?.[0],
//             HeroButtons:
//               backendData.buttons?.map((btn, i) => ({
//                 ...btn,
//                 link: backendData.links?.[i] || "/features",
//               })) || [],
//           }}
//           navigate={navigate}
//         />

//         <InspectionSection
//           data={{
//             Heading: backendData.page,
//             Items:
//               backendData.checkpoints?.map((cp) => ({
//                 title: cp.title,
//                 description: cp.description,
//                 image: cp.photo,
//               })) || [],
//             Video: backendData.images?.[1],
//           }}
//         />

//         <CurvedSection />
//       </>
//     );
//   }

//   if (!localData) return <p>Loading local data...</p>;

//   const heroLocal = localData[jsonId]["1"];
//   const middleLocal = localData[jsonId]["2"];
//   const relatedLocal = localData[jsonId]["3"];

//   const mergedHero = {
//     ...heroLocal,
//     HeroHeading: backendData.title || heroLocal.HeroHeading,
//     HeroDescription: backendData.description || heroLocal.HeroDescription,
//     HeroImage: backendData.images?.[0] || heroLocal.HeroImage,
//     HeroButtons: backendData.buttons?.length
//       ? backendData.buttons.map((btn, i) => ({
//           ...btn,
//           link: backendData.links?.[i] || "/features",
//         }))
//       : heroLocal.HeroButtons,
//   };

//   const mergedInspectionSection = {
//     ...middleLocal,
//     Heading: backendData.page || middleLocal.Heading,
//     Items: backendData.checkpoints?.length
//       ? backendData.checkpoints.map((cp) => ({
//           title: cp.title,
//           description: cp.description,
//           image: cp.photo,
//         }))
//       : middleLocal.Items,
//     Video: backendData.images?.[1] || middleLocal.Video,
//   };

//   return (
//     <>
//       <Inspections data={mergedHero} navigate={navigate} />
//       <InspectionSection data={mergedInspectionSection} />
//       <RelatedFeatures data={relatedLocal} />
//       <CurvedSection />
     
//     </>
//   );
// };

// export default FeaturePage;





// src/pages/FeaturePage/FeaturePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Inspections from "../../component/Inspections/Inspections";
import InspectionSection from "../../component/InspectionSection/InspectionSection";
import RelatedFeatures from "../../component/RelatedFeatures/RelatedFeatures";
import CurvedSection from "../../component/CurvedSection/CurvedSection";
import SafetyAppFeatureSection from "../../component/SafetyServiceCardList/SafetyServiceCardList";

import { getstoredata } from "../../json/fetchData";

const BACKEND_URL = "https://safesite-backend.vercel.app/api/features";

const FeaturePage = ({ pageKey, jsonId }) => {
  const [backendData, setBackendData] = useState(null);
  const [localData, setLocalData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // ✅ normalize pageKey once
  const normalizedPageKey = (pageKey || "")
    .toString()
    .trim()
    .toLowerCase();

  /* -------------------- Load local JSON -------------------- */
  useEffect(() => {
    if (!jsonId) return;

    const stored = getstoredata();
    if (stored) {
      setLocalData(stored);
    }
  }, [jsonId]);

  /* -------------------- Fetch backend data -------------------- */
  useEffect(() => {
    const loadFeature = async () => {
      try {
        const res = await axios.get(BACKEND_URL);
        const feature = res.data.find(
          (f) =>
            (f.page || "")
              .toString()
              .trim()
              .toLowerCase() === normalizedPageKey
        );

        setBackendData(feature || null);
      } catch (err) {
        console.error("Feature fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadFeature();
  }, [normalizedPageKey]);

  /* -------------------- Loading & Error -------------------- */
  if (loading) return <p>Loading...</p>;
  if (!backendData) return <p>No feature found for "{pageKey}"</p>;

  /* -------------------- NO local JSON case -------------------- */
  if (!jsonId) {
    return (
      <>
        {/* ✅ ALWAYS visible */}
       

        <Inspections
          data={{
            HeroHeading: backendData.title,
            HeroDescription: backendData.description,
            HeroImage: backendData.images?.[0],
            HeroButtons:
              backendData.buttons?.map((btn, i) => ({
                ...btn,
                link: backendData.links?.[i] || "/features",
              })) || [],
          }}
          navigate={navigate}
        />

        <InspectionSection
          data={{
            Heading: backendData.page,
            Items:
              backendData.checkpoints?.map((cp) => ({
                title: cp.title,
                description: cp.description,
                image: cp.photo,
              })) || [],
            Video: backendData.images?.[1],
          }}
        />
         <SafetyAppFeatureSection />
        <CurvedSection />
      </>
    );
  }

  if (!localData) return <p>Loading local data...</p>;

  /* -------------------- Merge backend + local -------------------- */
  const heroLocal = localData[jsonId]["1"];
  const middleLocal = localData[jsonId]["2"];
  const relatedLocal = localData[jsonId]["3"];

  const mergedHero = {
    ...heroLocal,
    HeroHeading: backendData.title || heroLocal.HeroHeading,
    HeroDescription: backendData.description || heroLocal.HeroDescription,
    HeroImage: backendData.images?.[0] || heroLocal.HeroImage,
    HeroButtons: backendData.buttons?.length
      ? backendData.buttons.map((btn, i) => ({
          ...btn,
          link: backendData.links?.[i] || "/features",
        }))
      : heroLocal.HeroButtons,
  };

  const mergedInspectionSection = {
    ...middleLocal,
    Heading: backendData.page || middleLocal.Heading,
    Items: backendData.checkpoints?.length
      ? backendData.checkpoints.map((cp) => ({
          title: cp.title,
          description: cp.description,
          image: cp.photo,
        }))
      : middleLocal.Items,
    Video: backendData.images?.[1] || middleLocal.Video,
  };

  return (
    <>
      {/* ✅ ALWAYS visible */}
      <SafetyAppFeatureSection />

      <Inspections data={mergedHero} navigate={navigate} />
      <InspectionSection data={mergedInspectionSection} />

      <RelatedFeatures data={relatedLocal} />
      <CurvedSection />
    </>
  );
};

export default FeaturePage;

