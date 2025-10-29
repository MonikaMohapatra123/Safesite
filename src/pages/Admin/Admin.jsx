import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();

  const modules = [
    { title: "Features", path: "features" },
    { title: "Industries", path: "industries" },
    { title: "Blog", path: "blogs" },
    { title: "Case Studies", path: "case-studies" },
  ];

  const location = useLocation();
  const isRootAdmin = location.pathname === "/admin";

  // ✅ Logout handler
  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn"); // Clear session
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="admin-container">
      {isRootAdmin && (
        <>
          <div className="admin-header">
            <h1>Admin Panel</h1>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>

          {/* Admin Module Links */}
          <div className="admin-grid">
            {modules.map((mod, idx) => (
              <Link
                key={idx}
                to={mod.path}
                className={`admin-box ${
                  location.pathname.endsWith(mod.path) ? "active" : ""
                }`}
              >
                {mod.title}
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Module content */}
      <div style={{ marginTop: isRootAdmin ? "20px" : "0" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
