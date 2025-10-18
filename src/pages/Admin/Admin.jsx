import React from "react";
import { Link } from "react-router-dom";
import './Admin.css';

const Admin = () => {
  const modules = [
    { title: "Templates", path: "/admin/templates" },
    { title: "Features", path: "/admin/features" },
    { title: "Resources", path: "/admin/resources" },
    { title: "Industries", path: "/admin/industries" }
  ];

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <div className="admin-grid">
        {modules.map((mod, idx) => (
          <Link key={idx} to={mod.path} className="admin-box">
            {mod.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Admin;
