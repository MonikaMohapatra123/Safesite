// import React, { useState } from 'react';
// import './Inspections.css';
// import FeatureLinkButton from '../../component/FeatureLinkButton/FeatureLinkButton'; // import the new button

// const Inspections = ({ data }) => {
//   console.log('✅ FeaturesInspections data:', data);

//   const [showImageModal, setShowImageModal] = useState(false);

//   if (!data) {
//     return <div>No inspection feature data found.</div>;
//   }

//   // const handleViewImage = () => {
//   //   setShowImageModal(true);
//   // };

//   const handleCloseImage = () => {
//     setShowImageModal(false);
//   };

//   return (
//     <section className="features-inspections-section">
//       <div className="features-inspections-container">
//         {/* Left Content */}
//         <div className="features-inspections-left">
//           <h1
//             className="features-inspections-heading"
//             dangerouslySetInnerHTML={{ __html: data.HeroHeading }}
//           ></h1>
//           <p className="features-inspections-description">{data.HeroDescription}</p>

//           <div className="features-inspections-buttons">
//             {data.HeroButtons.map((btn, index) => {
//               // Use FeatureLinkButton for secondary type
//               if (btn.type === 'secondary') {
//                 return (
//                  <FeatureLinkButton to="/features" text="All Features" color="white" />
//                 );
//               } else {
//                 // normal button for primary
//                 return (
//                   <button
//                     key={index}
//                     className={`features-inspections-btn features-inspections-btn-${btn.type}`}
//                   >
//                     {btn.text}
//                   </button>
//                 );
//               }
//             })}
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="features-inspections-right">
//           <div className="features-inspections-image-wrapper">
//             <img
//               src={data.HeroImage}
//               alt="Features Inspection"
//               className="features-inspections-image"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Modal for Image */}
//       {showImageModal && (
//         <div className="features-inspections-image-modal">
//           <div className="features-inspections-image-content">
//             <span
//               className="features-inspections-image-close"
//               onClick={handleCloseImage}
//             >
//               &times;
//             </span>
//             <img
//               src={data.HeroModalImage}
//               alt="Modal Preview"
//               className="features-inspections-modal-img"
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Inspections;









import React from "react";
import "./Inspections.css";
import FeatureLinkButton from "../../component/FeatureLinkButton/FeatureLinkButton";

const Inspections = ({ data }) => {
  if (!data) {
    return <div>No inspection feature data found.</div>;
  }

  return (
    <section className="features-inspections-section">
      <div className="features-inspections-container">
        {/* Left Section */}
        <div className="features-inspections-left">
          <h1
            className="features-inspections-heading"
            dangerouslySetInnerHTML={{ __html: data?.HeroHeading || "" }}
          ></h1>

          <p className="features-inspections-description">
            {data?.HeroDescription ||
              "Start managing your best safety program ever — in just 8 minutes."}
          </p>

          <div className="features-inspections-buttons">
            {/* ✅ Button (NOT clickable to other page) */}
            <button className="features-inspections-btn features-inspections-btn-primary">
              Get Started Free
            </button>

            {/* ✅ Clickable Link Component */}
            <FeatureLinkButton
              to="/features"
              text="All Features"
              color="#fff"
            />
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="features-inspections-right">
          <div className="features-inspections-image-wrapper">
            <img
              src={data?.HeroImage || "/banner-placeholder.png"}
              alt="Features Inspection"
              className="features-inspections-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspections;
