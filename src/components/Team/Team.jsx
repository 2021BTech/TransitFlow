import React from 'react'
import "./Team.modules.css"
//img
import AV1 from "../../assets/1.png"
import AV2 from "../../assets/2.png"
import AV3 from "../../assets/3.png"

const Team = () => {
  return (
    <div className="team_page">
      <h4>The Transporters</h4>
      <h2>Meet Expert Team</h2>
      <div className="team-section">
        <img src={AV1} alt="img_alt" />
        <img src={AV2} alt="img_alt" />
        <img src={AV3} alt="img_alt" />
      </div>
    </div>
  )
}

export default Team
