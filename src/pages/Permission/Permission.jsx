import React from 'react'
import PermissionHeroSection from '../../component/PermissionHeroSection/PermissionHeroSection'
import getstoredata from "../../json/data.json";
import PermissionSection from '../../component/PermissionSection/PermissionSection';
import CurvedSection from '../../component/CurvedSection/CurvedSection';
const Permission = () => {
     const permissionheroData = getstoredata["11"]["1"];
     const permissionsection = getstoredata["11"]["2"];
  return (
    <div>
          <PermissionHeroSection data={permissionheroData}/>
          <PermissionSection  data={permissionsection}/>
          <CurvedSection/>
          
    </div>
  )
}

export default Permission