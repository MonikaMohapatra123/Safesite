import React from 'react'
import getstoredata from "../../json/data.json";
import HeroDashboard from '../../component/HeroDashboard/HeroDashboard';
import DashboardSection from '../../component/DashboardSection/DashboardSection';
import DashboardRelatedFeatures from '../../component/DashboardRelatedFeatures/DashboardRelatedFeatures';
import CurvedSection from '../../component/CurvedSection/CurvedSection';

const Dashboard = () => {
     const heroDashboardData = getstoredata["8"]["1"]; 
     const dashboardsection =getstoredata['8']['2'];
    
  return (
    <div>
       <HeroDashboard data={heroDashboardData} />  
       <DashboardSection data={dashboardsection}/>
       <DashboardRelatedFeatures />
       <CurvedSection/>
       
     
    </div>
  )
}

export default Dashboard