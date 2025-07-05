
// import React, { useState } from 'react';
// import './AllCompanySafetyCard.css';

// const AllCompanySafetyCard = ({ data }) => {
//   const cardsData = data?.cards || [];

//   const [activeCardId, setActiveCardId] = useState(cardsData[0]?.id || null);

//   if (!data || !data.cards || cardsData.length === 0) {
//     return <div>No safety cards available.</div>;
//   }

//   const handleClick = (id) => {
//     setActiveCardId(id);
//   };

//   const activeCard = cardsData.find((card) => card.id === activeCardId);

//   return (
//     <div className="acsc-wrapper">
//       <h2>{data.Title}</h2>
//       <div className="acsc-buttons">
//         {cardsData.map((card) => (
//           <button
//             key={card.id}
//             className={`acsc-tab-button ${activeCardId === card.id ? 'acsc-tab-button--active' : ''}`}
//             onClick={() => handleClick(card.id)}
//           >
//             {/* ✅ Use <i> tag for Font Awesome */}
//             <span className="acsc-tab-icon">
//               <i className={card.icon}></i>
//             </span>
//             <span className="acsc-tab-text">{card.title}</span>
//           </button>
//         ))}
//       </div>

//       {activeCard && (
//         <div className="acsc-card">
//           <div className="acsc-card-content">
//             <div className="acsc-card-left">
//               <div className="acsc-image-wrapper">
//                 <img src={activeCard.imageSrc} alt={activeCard.title} className="acsc-gif" />
//                 <div className="acsc-circle-mask"></div>
//               </div>
//             </div>

//             <div className="acsc-card-right">
//               <div className="acsc-card-right-content">
//                 <h4>{activeCard.rightHeading}</h4>
//                 <ul className="acsc-card-checklist">
//                   {activeCard.checklist.map((item, index) => (
//                     <li key={index}>
//                       <span className="acsc-check-icon">✔</span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="acsc-card-buttons">
//                   <button className="acsc-right-button">{activeCard.buttonLabel}</button>
//                   <a href="#" className="acsc-link-button">All Features →</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllCompanySafetyCard;








import React, { useState, useEffect } from 'react';
import './AllCompanySafetyCard.css';

const AllCompanySafetyCard = ({ data }) => {
  const cardsData = data?.cards || [];
  const [activeCardId, setActiveCardId] = useState(cardsData[0]?.id || null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // adjust breakpoint if needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile || cardsData.length <= 1) return;

    const interval = setInterval(() => {
      setActiveCardId(prevId => {
        const currentIndex = cardsData.findIndex(card => card.id === prevId);
        const nextIndex = (currentIndex + 1) % cardsData.length;
        return cardsData[nextIndex].id;
      });
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile, cardsData]);

  if (!data || !data.cards || cardsData.length === 0) {
    return <div>No safety cards available.</div>;
  }

  const handleClick = (id) => {
    setActiveCardId(id);
  };

  const activeCard = cardsData.find((card) => card.id === activeCardId);

  return (
    <div className="acsc-wrapper">
      <h2>{data.Title}</h2>

      {/* ✅ Show buttons only if NOT mobile */}
      {!isMobile && (
        <div className="acsc-buttons">
          {cardsData.map((card) => (
            <button
              key={card.id}
              className={`acsc-tab-button ${activeCardId === card.id ? 'acsc-tab-button--active' : ''}`}
              onClick={() => handleClick(card.id)}
            >
              <span className="acsc-tab-icon">
                <i className={card.icon}></i>
              </span>
              <span className="acsc-tab-text">{card.title}</span>
            </button>
          ))}
        </div>
      )}

      {activeCard && (
        <div className="acsc-card">
          <div className="acsc-card-content">
            <div className="acsc-card-left">
              <div className="acsc-image-wrapper">
                <img src={activeCard.imageSrc} alt={activeCard.title} className="acsc-gif" />
                <div className="acsc-circle-mask"></div>
              </div>
            </div>

            <div className="acsc-card-right">
              <div className="acsc-card-right-content">
                <h4>{activeCard.rightHeading}</h4>
                <ul className="acsc-card-checklist">
                  {activeCard.checklist.map((item, index) => (
                    <li key={index}>
                      <span className="acsc-check-icon">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="acsc-card-buttons">
                  <button className="acsc-right-button">{activeCard.buttonLabel}</button>
                  <a href="#" className="acsc-link-button">All Features →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCompanySafetyCard;

