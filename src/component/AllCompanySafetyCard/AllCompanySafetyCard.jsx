import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './AllCompanySafetyCard.css';
import FeatureLinkButton from '../FeatureLinkButton/FeatureLinkButton';

const AllCompanySafetyCard = ({ data }) => {
  const cardsData = useMemo(() => data?.cards || [], [data]);
  const [activeCardId, setActiveCardId] = useState(cardsData[0]?.id || null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || cardsData.length <= 1) return;

    const interval = setInterval(() => {
      setActiveCardId((prevId) => {
        const currentIndex = cardsData.findIndex((card) => card.id === prevId);
        const nextIndex = (currentIndex + 1) % cardsData.length;
        return cardsData[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, cardsData]);

  if (!data || !cardsData || cardsData.length === 0) {
    return <div>No safety cards available.</div>;
  }

  const handleClick = (id) => setActiveCardId(id);
  const activeCard = cardsData.find((card) => card.id === activeCardId);

  return (
    <div className="acsc-wrapper">
      <h2>{data.Title}</h2>

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
                <img
                  src={activeCard.imageSrc}
                  alt={activeCard.title}
                  className="acsc-gif"
                />
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

                <FeatureLinkButton to="/features" text="All Features"/>
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
