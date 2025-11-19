
// // src/App.js
// import React from 'react';
// import './index.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import ScrollToTop from './component/ScrollToTop/ScrollToTop';

// // Pages
// import Home from './pages/Home/Home';
// import NavBar from './pages/NavBar/NavBar';
// import Footer from './pages/Footer/Footer';
// import FeaturesInspections from './pages/FeaturesInspections/FeaturesInspections';
// import FeaturesChecklists from './pages/FeaturesChecklists/FeaturesChecklists';
// import Dashboard from './pages/Dashboard/Dashboard';
// import TeamManagement from './pages/TeamManagement/TeamManagement';
// import Exports from './pages/Exports/Exports';
// import Permission from './pages/Permission/Permission';
// import ContactUs from './pages/ContactUs/ContactUs';
// import IndustriesConstruction  from './pages/IndustriesConstruction/IndustriesConstruction';
// import  IndustriesEnergy  from './pages/IndustriesEnergy/IndustriesEnergy';
// import IndustriesManufacturing from './pages/IndustriesManufacturing/IndustriesManufacturing';
// import ResourceBlog from './pages/ResourceBlog/ResourceBlog';
// import ResourceCaseStudies from './pages/ResourceCaseStudies/ResourceCaseStudies';
// import AboutUs from './pages/AboutUs/AboutUs';
// import Features from './pages/Features/Features';

// // Admin Pages
// import Admin from './pages/Admin/Admin';
// import AdminFeatures from './pages/AdminFeatures/AdminFeatures';
// import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
// import Login from './pages/Login/Login';
// import AdminIndustry from './pages/AdminIndustry/AdminIndustry';
// import AdminBlog from './pages/AdminBlog/AdminBlog';
// import AdminCaseStudies from './pages/AdminCaseStudies/AdminCaseStudies';
// import ArticleHeader from './component/ArticleHeader/ArticleHeader';
// import FeaturePage from './pages/FeaturePage/FeaturePage';
// import IndustryPage from './pages/IndustryPage/IndustryPage';

// const App = () => {
//   const location = useLocation();
//   const hideLayout = location.pathname.startsWith('/admin') || location.pathname === '/login';

//   return (
//     <>
//       <ScrollToTop />

//       {/* Only show NavBar if not admin or login page */}
//       {!hideLayout && <NavBar />}

//       <Routes>
//         {/* Admin Nested Routes */}
//         <Route path="/admin" element={<PrivateRoute><Admin/> </PrivateRoute> }>
//           <Route path="features" element={<PrivateRoute><AdminFeatures /></PrivateRoute>} />
//           <Route  path="industries" element={<PrivateRoute><AdminIndustry /> </PrivateRoute>} />
//           <Route path="blogs" element={<PrivateRoute><AdminBlog /></PrivateRoute>} />
//           <Route path="case-studies" element={<PrivateRoute><AdminCaseStudies/></PrivateRoute>} />

//           </Route>

//         {/* Login */}
//         <Route path="/login" element={<Login />} />

//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/features/inspections" element={<FeaturesInspections />} />
//         {/* <Route path="/features/inspections" element={ <FeaturePage pageKey="inspections" jsonId="6" /> } /> */}
//         <Route path="/features/checklists" element={<FeaturesChecklists />} />
//         <Route path="/features/dashboards" element={<Dashboard />} />
//         <Route path="/features/team-management" element={<TeamManagement />} />
//         <Route path="/features/exports" element={<Exports />} />
//         <Route path="/features/permissions" element={<Permission />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="/industries/construction" element={<IndustriesConstruction />} />
//         <Route path="/industries/energy" element={<IndustriesEnergy />} />
//         <Route path="/industries/manufacturing" element={<IndustriesManufacturing />} />
//         <Route path="/resources/blog" element={<ResourceBlog />} />
//         <Route path="/resources/case-studies" element={<ResourceCaseStudies />} />
//         <Route path="/why-us" element={<AboutUs />} />
//         <Route path="/features" element={<Features />} />
//          <Route path="/indu/const" element={<ArticleHeader/>} />
//         <Route path="/indu/mining" element={<ArticleHeader/>} />
// <Route path="/features/good-practices" element={ <FeaturePage pageKey="good practices" />} />
// <Route path="/features/workpermit" element={ <FeaturePage pageKey="workpermit" /> } />
// <Route path="/features/observation" element={ <FeaturePage pageKey="observation uauc" /> } />
// <Route path="/features/violation" element={ <FeaturePage pageKey="violation notice" /> } />
// <Route path="/features/task" element={ <FeaturePage pageKey="task" /> } />
// <Route path="/features/project-safety-report" element={ <FeaturePage pageKey="projectwise safety report" /> } />
// <Route path="/features/location-tracking" element={ <FeaturePage pageKey="photos & videos geo location tracking" /> } />
// <Route path="/features/directory" element={ <FeaturePage pageKey="directory" /> } />
// <Route path="/features/pannel-mobile" element={ <FeaturePage pageKey="pannel access & mobile access" /> } />
// <Route path="/features/QR" element={ <FeaturePage pageKey="qr based attendance" /> } />
// <Route path="/features/auto-summary-bug" element={ <FeaturePage pageKey="auto summary bug" /> } />
// <Route path="/features/contractor-management" element={ <FeaturePage pageKey="contractor management" /> } />

// <Route path="/features/incident-reporting" element={<FeaturePage pageKey="incident report" />} />
// <Route path="/features/safety-audit" element={<FeaturePage pageKey="safety audit & inspection" />} />
// <Route path="/features/safety-budget" element={<FeaturePage pageKey="hse safety budget" />} />
// <Route path="/features/safety-reporting" element={<FeaturePage pageKey="safety reporting" />} />
// <Route path="/features/staff-ratings" element={<FeaturePage pageKey="staff ratings" />} />
// <Route path="/features/role-management" element={<FeaturePage pageKey="role management" />} />
// <Route path="/features/safety-campaign" element={<FeaturePage pageKey="safety campaign scheduler" />} />
// <Route path="/features/team-trade" element={<FeaturePage pageKey="team & trade management" />} />
// <Route path="/features/company-record" element={<FeaturePage pageKey="company format recordkeeping" />} />
// <Route path="/features/document" element={<FeaturePage pageKey="document management" />} />
// <Route path="/features/multilingual-app" element={<FeaturePage pageKey="multilingual app" jsonId="6"/>} />
// {/* only for video add jsonid=6 from static page data come */}
//   <Route path="/features/offline-mode" element={<FeaturePage pageKey="Offline Mode" />} />
//     <Route path="/features/leading-indicator" element={<FeaturePage pageKey="Leading Indicator Analytics" />} />
//     <Route path="/features/training-webinars" element={<FeaturePage pageKey="Safety Sure training & webinars" />} />
//     <Route path="/features/tailored-module" element={<FeaturePage pageKey="Tailored Module Edition" />} />
//     <Route path="/features/custom-reporting" element={<FeaturePage pageKey="Custom Safety Reporting" />} />
//     <Route path="/features/corrective-actions" element={<FeaturePage pageKey="Corrective Actions" />} />
//     <Route path="/features/equipment-inspection" element={<FeaturePage pageKey="Equipment Inspection" />} />
//     <Route path="/features/training-certification" element={<FeaturePage pageKey="Training Certification Tracker" />} />
//     <Route path="/features/AI-Integation" element={<FeaturePage pageKey="AI Integation" />} />
//     <Route path="/features/safety-program" element={<FeaturePage pageKey="Safety Program Review" />} />
//     <Route path="/features/support" element={<FeaturePage pageKey="Here for you support" />} />



//     {/* Routes from Industries Pages */}
//     <Route path="/industries/eviation" element={ <IndustryPage pageName="eviation" localId="18" /> } />
//       <Route path="/industries/chemical-mechanical" element={<IndustryPage pageName="Chemical & Mechanical" localId="18" />} />
// <Route path="/industries/industrial" element={<IndustryPage pageName="Industrial" localId="18"/>} />
// <Route path="/industries/food-production" element={<IndustryPage pageName="Food Services & Production" localId="18"/>} />
// <Route path="/industries/laboratory" element={<IndustryPage pageName="Laboratory" localId="18"/>} />
// <Route path="/industries/marine" element={<IndustryPage pageName="Marine" localId="18"/>} />
// <Route path="/industries/mining" element={<IndustryPage pageName="Mining" localId="18"/>} />
// <Route path="/industries/ogp" element={<IndustryPage pageName="Oil, Gas & Petroleum" localId="18"/>} />
// <Route path="/industries/transport" element={<IndustryPage pageName="Transportation & Logistics" localId="18"/>} />
// <Route path="/industries/healthcare-medical" element={<IndustryPage pageName="Healthcare & Medical Services" localId="18"/>} />
// <Route path="/industries/data-center" element={<IndustryPage pageName="Data Center" localId="18"/>} />
// <Route path="/industries/government" element={<IndustryPage pageName="Government" localId="18"/>} />
// <Route path="/industries/industrial-residential" element={<IndustryPage pageName="Industrial & Residential" localId="18"/>} />
  
// </Routes>

//       {/* Only show Footer if not admin or login page */}
//       {!hideLayout && <Footer />}
//     </>
//   );
// };

// export default App;








// src/App.js
import React, { useState, useEffect } from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop/ScrollToTop';

// Loader Component
import Loader from "./component/Loader/Loader";

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
import IndustriesEnergy from './pages/IndustriesEnergy/IndustriesEnergy';
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
import ArticleHeader from './component/ArticleHeader/ArticleHeader';
import FeaturePage from './pages/FeaturePage/FeaturePage';
import IndustryPage from './pages/IndustryPage/IndustryPage';

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith('/admin') || location.pathname === '/login';

  // 🔵 Loader State
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // loader duration
    return () => clearTimeout(timer);
  }, []);

  // 🔵 Show Loader before content
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollToTop />

      {/* Show NavBar only on public pages */}
      {!hideLayout && <NavBar />}

      <Routes>
        {/* Admin Nested Routes */}
        <Route path="/admin" element={<PrivateRoute><Admin/> </PrivateRoute> }>
          <Route path="features" element={<PrivateRoute><AdminFeatures /></PrivateRoute>} />
          <Route path="industries" element={<PrivateRoute><AdminIndustry /> </PrivateRoute>} />
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
        <Route path="/indu/const" element={<ArticleHeader/>} />
        <Route path="/indu/mining" element={<ArticleHeader/>} />

        <Route path="/features/good-practices" element={<FeaturePage pageKey="good practices" />} />
        <Route path="/features/workpermit" element={<FeaturePage pageKey="workpermit" />} />
        <Route path="/features/observation" element={<FeaturePage pageKey="observation uauc" />} />
        <Route path="/features/violation" element={<FeaturePage pageKey="violation notice" />} />
        <Route path="/features/task" element={<FeaturePage pageKey="task" />} />
        <Route path="/features/project-safety-report" element={<FeaturePage pageKey="projectwise safety report" />} />
        <Route path="/features/location-tracking" element={<FeaturePage pageKey="photos & videos geo location tracking" />} />
        <Route path="/features/directory" element={<FeaturePage pageKey="directory" />} />
        <Route path="/features/pannel-mobile" element={<FeaturePage pageKey="pannel access & mobile access" />} />
        <Route path="/features/QR" element={<FeaturePage pageKey="qr based attendance" />} />
        <Route path="/features/auto-summary-bug" element={<FeaturePage pageKey="auto summary bug" />} />
        <Route path="/features/contractor-management" element={<FeaturePage pageKey="contractor management" />} />
        <Route path="/features/incident-reporting" element={<FeaturePage pageKey="incident report" />} />
        <Route path="/features/safety-audit" element={<FeaturePage pageKey="safety audit & inspection" />} />
        <Route path="/features/safety-budget" element={<FeaturePage pageKey="hse safety budget" />} />
        <Route path="/features/safety-reporting" element={<FeaturePage pageKey="safety reporting" />} />
        <Route path="/features/staff-ratings" element={<FeaturePage pageKey="staff ratings" />} />
        <Route path="/features/role-management" element={<FeaturePage pageKey="role management" />} />
        <Route path="/features/safety-campaign" element={<FeaturePage pageKey="safety campaign scheduler" />} />
        <Route path="/features/team-trade" element={<FeaturePage pageKey="team & trade management" />} />
        <Route path="/features/company-record" element={<FeaturePage pageKey="company format recordkeeping" />} />
        <Route path="/features/document" element={<FeaturePage pageKey="document management" />} />
        <Route path="/features/multilingual-app" element={<FeaturePage pageKey="multilingual app" jsonId="6"/>} />
        <Route path="/features/offline-mode" element={<FeaturePage pageKey="Offline Mode" />} />
        <Route path="/features/leading-indicator" element={<FeaturePage pageKey="Leading Indicator Analytics" />} />
        <Route path="/features/training-webinars" element={<FeaturePage pageKey="Safety Sure training & webinars" />} />
        <Route path="/features/tailored-module" element={<FeaturePage pageKey="Tailored Module Edition" />} />
        <Route path="/features/custom-reporting" element={<FeaturePage pageKey="Custom Safety Reporting" />} />
        <Route path="/features/corrective-actions" element={<FeaturePage pageKey="Corrective Actions" />} />
        <Route path="/features/equipment-inspection" element={<FeaturePage pageKey="Equipment Inspection" />} />
        <Route path="/features/training-certification" element={<FeaturePage pageKey="Training Certification Tracker" />} />
        <Route path="/features/AI-Integation" element={<FeaturePage pageKey="AI Integation" />} />
        <Route path="/features/safety-program" element={<FeaturePage pageKey="Safety Program Review" />} />
        <Route path="/features/support" element={<FeaturePage pageKey="Here for you support" />} />

        {/* Industries Routes */}
        <Route path="/industries/eviation" element={<IndustryPage pageName="eviation" localId="18" />} />
        <Route path="/industries/chemical-mechanical" element={<IndustryPage pageName="Chemical & Mechanical" localId="18" />} />
        <Route path="/industries/industrial" element={<IndustryPage pageName="Industrial" localId="18"/>} />
        <Route path="/industries/food-production" element={<IndustryPage pageName="Food Services & Production" localId="18"/>} />
        <Route path="/industries/laboratory" element={<IndustryPage pageName="Laboratory" localId="18"/>} />
        <Route path="/industries/marine" element={<IndustryPage pageName="Marine" localId="18"/>} />
        <Route path="/industries/mining" element={<IndustryPage pageName="Mining" localId="18"/>} />
        <Route path="/industries/ogp" element={<IndustryPage pageName="Oil, Gas & Petroleum" localId="18"/>} />
        <Route path="/industries/transport" element={<IndustryPage pageName="Transportation & Logistics" localId="18"/>} />
        <Route path="/industries/healthcare-medical" element={<IndustryPage pageName="Healthcare & Medical Services" localId="18"/>} />
        <Route path="/industries/data-center" element={<IndustryPage pageName="Data Center" localId="18"/>} />
        <Route path="/industries/government" element={<IndustryPage pageName="Government" localId="18"/>} />
        <Route path="/industries/industrial-residential" element={<IndustryPage pageName="Industrial & Residential" localId="18"/>} />
      </Routes>

      {/* Footer Only in Public Pages */}
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
