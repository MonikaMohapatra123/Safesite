import React from 'react'
import TeamHeros from '../../component/TeamHeroSection/TeamHeroSection'
import getstoredata from "../../json/data.json";
import TeamSection from '../../component/TeamSection/TeamSection';
import CurvedSection from '../../component/CurvedSection/CurvedSection';




const TeamManagement = () => {
      const teamheroData = getstoredata["9"]["1"];
      const teamsection=getstoredata["9"]["2"];

  return (
    <div>
        <TeamHeros  data={teamheroData}/>
        <TeamSection data={teamsection}/>
        <CurvedSection/>
        
    </div>
  )
}

export default TeamManagement