import React from 'react';
import { Routes, Route } from 'react-router-dom'; // only Routes and Route
import Home from './pages/Home/Home';
import NavBar from './pages/NavBar/NavBar';
import Footer from './pages/Footer/Footer';
import FeaturesInspections from './pages/FeaturesInspections/FeaturesInspections';
import FeaturesChecklists from './pages/FeaturesChecklists/FeaturesChecklists';
import Dashboard from './pages/Dashboard/Dashboard';
import TeamManagement from './pages/TeamManagement/TeamManagement';
import Exports from './pages/Exports/Exports';
import Permission from './pages/Permission/Permission';
import TemplatesSafetyChecklist from './pages/TemplatesSafetyChecklist/TemplatesSafetyChecklist';
import TemplatesIncidentReport from './pages/TemplatesIncidentReport/TemplatesIncidentReport';
import TemplatesJobHazad from './pages/TemplatesJobHazad/TemplatesJobHazad';
import TemplatesEmergencyPlan from './pages/TemplatesEmergencyPlan/TemplatesEmergencyPlan';
import ContactUs from './pages/ContactUs/ContactUs';
import { IndustriesConstruction } from './pages/IndustriesConstruction/IndustriesConstruction';
import { IndustriesEnergy } from './pages/IndustriesEnergy/IndustriesEnergy';
import IndustriesManufacturing from './pages/IndustriesManufacturing/IndustriesManufacturing';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features/inspections" element={<FeaturesInspections />} />
         <Route path="/features/checklists" element={ <FeaturesChecklists />}/>
          <Route path="/features/dashboards" element={<Dashboard/>}/>
          <Route path="/features/team-management" element={<TeamManagement/>}/>
          <Route path="/features/exports" element={<Exports/>}/>
           <Route path="/features/permissions" element={<Permission/>}/>
          <Route path="templates/safety-checklist" element={<TemplatesSafetyChecklist/>}/>
          <Route path="templates/incident-report" element={ <TemplatesIncidentReport/>}/>
          <Route path="templates/job-hazard-analysis" element={<TemplatesJobHazad/>}/>
          <Route path="templates/emergency-plan" element={ <TemplatesEmergencyPlan/>}/>
          <Route path="contact-us" element={<ContactUs/>}/>
         <Route path="industries/construction" element={<IndustriesConstruction/>}/>
         <Route path="industries/energy" element={ <IndustriesEnergy/>}/>
          <Route path="industries/manufacturing" element={<IndustriesManufacturing/>}/>

         
       
      </Routes>
      <Footer />
    </>
  );
};

export default App;
