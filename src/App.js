
// src/App.js
import React from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop/ScrollToTop';

// Pages
import Home from './pages/Home/Home';
import NavBar from './pages/NavBar/NavBar';
import Footer from './pages/Footer/Footer';
import FeaturesInspections from './pages/FeaturesInspections/FeaturesInspections';
import FeaturesChecklists from './pages/FeaturesChecklists/FeaturesChecklists';
import Dashboard from './pages/Dashboard/Dashboard';
import TeamManagement from './pages/TeamManagement/TeamManagement';
import Exports from './pages/Exports/Exports';
import Permission from './pages/Permission/Permission';
import ContactUs from './pages/ContactUs/ContactUs';
import IndustriesConstruction  from './pages/IndustriesConstruction/IndustriesConstruction';
import  IndustriesEnergy  from './pages/IndustriesEnergy/IndustriesEnergy';
import IndustriesManufacturing from './pages/IndustriesManufacturing/IndustriesManufacturing';
import ResourceBlog from './pages/ResourceBlog/ResourceBlog';
import ResourceCaseStudies from './pages/ResourceCaseStudies/ResourceCaseStudies';
import AboutUs from './pages/AboutUs/AboutUs';
import Features from './pages/Features/Features';

// Admin Pages
import Admin from './pages/Admin/Admin';
import AdminFeatures from './pages/AdminFeatures/AdminFeatures';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login';
import AdminIndustry from './pages/AdminIndustry/AdminIndustry';
import AdminBlog from './pages/AdminBlog/AdminBlog';
import AdminCaseStudies from './pages/AdminCaseStudies/AdminCaseStudies';

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith('/admin') || location.pathname === '/login';

  return (
    <>
      <ScrollToTop />

      {/* Only show NavBar if not admin or login page */}
      {!hideLayout && <NavBar />}

      <Routes>
        {/* Admin Nested Routes */}
        <Route path="/admin" element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }>
          <Route path="features" element={<PrivateRoute><AdminFeatures /></PrivateRoute>} />
         <Route
                  path="industries"
                  element={
                    <PrivateRoute>
                      <AdminIndustry />
                    </PrivateRoute>
                  }
                />
           <Route path="blogs" element={<PrivateRoute><AdminBlog /></PrivateRoute>} />

          <Route path="case-studies" element={<PrivateRoute><AdminCaseStudies/></PrivateRoute>} />
       
        </Route>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/features/inspections" element={<FeaturesInspections />} />
        <Route path="/features/checklists" element={<FeaturesChecklists />} />
        <Route path="/features/dashboards" element={<Dashboard />} />
        <Route path="/features/team-management" element={<TeamManagement />} />
        <Route path="/features/exports" element={<Exports />} />
        <Route path="/features/permissions" element={<Permission />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/industries/construction" element={<IndustriesConstruction />} />
        <Route path="/industries/energy" element={<IndustriesEnergy />} />
        <Route path="/industries/manufacturing" element={<IndustriesManufacturing />} />
        <Route path="/resources/blog" element={<ResourceBlog />} />
        <Route path="/resources/case-studies" element={<ResourceCaseStudies />} />
        <Route path="/why-us" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
      </Routes>

      {/* Only show Footer if not admin or login page */}
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
