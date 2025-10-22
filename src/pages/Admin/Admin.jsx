// src/pages/Admin/Admin.jsx
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import './Admin.css';

const Admin = () => {
  const modules = [
 
    { title: "Features", path: "features" },
    { title: "Industries", path: "industries" },
     { title: "Blog", path: "blogs" },
     {title:"Case Studies",path:"case-studies"}
  ];

  const location = useLocation();

  // Check if we are on the main /admin page
  const isRootAdmin = location.pathname === "/admin";

  return (
    <div className="admin-container">
      {isRootAdmin && (
        <>
          <h1>Admin Panel</h1>

          {/* Admin Module Links */}
          <div className="admin-grid">
            {modules.map((mod, idx) => (
              <Link
                key={idx}
                to={mod.path} // Relative link for nested route
                className={`admin-box ${location.pathname.endsWith(mod.path) ? 'active' : ''}`}
              >
                {mod.title}
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Module content will show here */}
      <div style={{ marginTop: isRootAdmin ? "20px" : "0" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
