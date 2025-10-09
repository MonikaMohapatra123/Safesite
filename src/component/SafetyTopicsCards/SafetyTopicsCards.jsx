




// src/components/SafetyTopicsCards/SafetyTopicsCards.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SafetyTopicsCards.css'; // optional: style your cards

export default function SafetyTopicsCards({ data }) {
  return (
    <section className="safety-topics">
      <h2>{data.sectionTitle}</h2>

      <Link to={data.viewAllLink.url} className="explore-link">
        {data.viewAllLink.text}
      </Link>

      <div className="topics-grid">
        {data.topics.map((topic) => (
          <Link to={topic.link} key={topic.id} className="topic-card">
            <img src={topic.image} alt={topic.title} />
            <div className="topic-info">
              <div className="topic-meta">
                <span>{topic.category}</span>
                <span> • {topic.readTime}</span>
              </div>
              <h3>{topic.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

