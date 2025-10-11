import React from "react";
import "./TopicScroller.css";

const topics = [
  "COVID-19",
  "Safety Tips",
  "Risk Management",
  "Construction",
  "Safety Management",
  "Career Growth",
  "OSHA"
];

export default function TopicScroller() {
  return (
    <div className="topic-container">
      <span className="topic-label">Browse by Topic:</span>
      <div className="topic-scroll">
        <div className="topic-track">
          {topics.concat(topics).map((topic, index) => (
            <span className="topic-item" key={index}>
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
