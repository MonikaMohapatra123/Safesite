import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import FeaturesInspections from '../FeaturesInspections/FeaturesInspections';
import FeaturesChecklists from "../FeaturesChecklists/FeaturesChecklists";
import"./AdminFeatures.css";
// import other feature pages if needed

const AdminFeatures = () => {
  const featurePages = [
    { title: "Inspections", path: "inspections-1", component: <FeaturesInspections /> },
    { title: "Checklists", path: "checklists-1", component: <FeaturesChecklists/> },
    // add more feature pages here
  ];

  return (
    <div className="admin-features-container">
      <h2>Features Module</h2>
      <div className="admin-feature-links">
        {featurePages.map((page, idx) => (
          <Link key={idx} to={page.path} className="admin-feature-link">
            {page.title}
          </Link>
        ))}
      </div>

      <div className="admin-feature-page">
        <Routes>
          {featurePages.map((page, idx) => (
            <Route key={idx} path={page.path} element={page.component} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default AdminFeatures;
