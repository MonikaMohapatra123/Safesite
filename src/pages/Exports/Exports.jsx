import React from 'react'
import ExportHeroSection from '../../component/ExportHeroSection/ExportHeroSection'
import getstoredata from "../../json/data.json";
import ExportSection from '../../component/ExportSection/ExportSection';
import CurvedSection from '../../component/CurvedSection/CurvedSection';
const Exports = () => {
     const exportherosection = getstoredata["10"]["1"]; 
      const exportsection = getstoredata["10"]["2"]; 
  return (
    <div>
        <ExportHeroSection data={exportherosection}/>
        <ExportSection  data={exportsection}/>
        <CurvedSection/>
    </div>
  )
}

export default Exports