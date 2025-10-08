import React from "react";
import "./CommonIndustriesSafetyChallenges.css";

const CommonIndustriesSafetyChallenges = ({ data }) => {
  return (
    <section className="safety-challenges">
      <div className="safety-container">
        <div className="safety-text">
          <h2
            className="safety-heading"
            dangerouslySetInnerHTML={{ __html: data.HeroHeading }}
          />
          {data.HeroDescription.map((item, index) => (
            <div key={index} className="challenge-item">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="safety-image">
          <img src={data.HeroImage} alt="Safety" />
        </div>
      </div>
    </section>
  );
};

export default CommonIndustriesSafetyChallenges;
