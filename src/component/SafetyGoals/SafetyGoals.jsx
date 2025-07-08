// import React from 'react';
// import './SafetyGoals.css';

// const SafetyGoals = () => {
//   return (
//     <div className="safety-goals-container">
//       <div className="content">
//         <div className="text-block">
//           <h2>Surpass Your Safety Goals</h2>
//           <p>
//             Do more to keep your employees safe with Safesite,
//             the most recommended safety management solution.
//           </p>
//           <button className="signup-btn">Sign Up For Free</button>
//         </div>

//         <div className="stats">
//           <div className="stat-item">
//             <div className="icon-text">⬆️</div>
//             <h3>8 hrs</h3>
//             <p>per week saved after<br />using our platform</p>
//           </div>
//           <hr className='vertical-line'/>
//           <div className="stat-item">
//             <div className="icon-text">⬇️</div>
//             <h3>57 %</h3>
//             <p>Proven <span>reduction</span> in<br />workplace incidents</p>
//           </div>
//         </div>
//       </div>

//       <hr />

//       <div className="badges">
//         <img src="badge-1.png" alt="Badge 1" />
//         <img src="badge-2.png" alt="Badge 2" />
//         <img src="badge-3.png" alt="Badge 3" />
//         <img src="badge-4.png" alt="Badge 4" />
//         <img src="badge-5.png" alt="Badge 5" />
//       </div>
//     </div>
//   );
// };

// export default SafetyGoals;





import React from 'react';
import './SafetyGoals.css';

const SafetyGoals = ({ data }) => {
  if (!data) return null;

  return (
    <div className="safety-goals-container">
      <div className="content">
        <div className="text-block">
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
          <button className="signup-btn">{data.buttonText}</button>
        </div>

        <div className="stats">
          {data.stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="stat-item">
                <div className="icon-text">{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.text}</p>
              </div>
              {index === 0 && <hr className="vertical-line" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <hr />

      <div className="badges">
        {data.badges.map((badge, index) => (
          <img key={index} src={badge} alt={`Badge ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default SafetyGoals;



