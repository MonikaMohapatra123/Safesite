// import React from 'react';
// import './SafetyTopicsCards.css';
// import { Link } from 'react-router-dom';

// const topics = [
//   {
//     id: 1,
//     image: 'safesite-2.png',
//     category: 'DIVERSITY, EQUITY, AND INCLUSION',
//     readTime: '7 min read',
//     title: 'A Guide to Sourcing Inclusive PPE for Diverse Teams',
//     link: '/topic1'
//   },
//   {
//     id: 2,
//     image: 'safesite-1.png',
//     category: 'CAREER GROWTH',
//     readTime: '8 min read',
//     title: 'Everything You Need to Pass the ASP® Safety Certification Exam',
//     link: '/topic2'
//   },
//   {
//     id: 3,
//     image: 'safesite-3.png',
//     category: 'DIVERSITY, EQUITY, AND INCLUSION',
//     readTime: '6 min read',
//     title: '4 Free Toolbox Talks for Building Cultural Competency',
//     link: '/topic3'
//   },
// ];

// export default function SafetyTopicsCards() {
//   return (
//     <section className="safety-topics">
//       <h2>Explore Safety Topics</h2>
//       <Link to="/all-topics" className="explore-link">
//         View All Topics →
//       </Link>
//       <div className="topics-grid">
//         {topics.map((topic) => (
//           <Link to={topic.link} key={topic.id} className="topic-card">
//             <img src={topic.image} alt={topic.title} />
//             <div className="topic-info">
//               <div className="topic-meta">
//                 <span>{topic.category}</span>
//                 <span>• {topic.readTime}</span>
//               </div>
//               <h3>{topic.title}</h3>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }










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

