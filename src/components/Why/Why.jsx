import React from 'react'
import "./Why.modules.css"
//img
import BG from "../../assets/bg-card.png"
//icon
import { FiPackage } from "react-icons/fi"
import { RiShipLine } from "react-icons/ri"
import { AiOutlineGlobal } from "react-icons/ai"
import { AiOutlineCustomerService } from "react-icons/ai"
import { BiTime } from "react-icons/bi"
import { GiRoundStrawBale } from "react-icons/gi"

const Why_choose = () => {
  return (
    <div className="why_page">
      <div className="picture-section">
        <img src={BG} alt="card-alt" className='img_why'/>
      </div>
      <div className="text-section">
        <h4>Why Choose ?</h4>
        <h2>We create opportunity to reach potential</h2>
        <p>
            Levarage agile framework to provide a robust synopsis for strategy
            foster collaborative thinking to further  the overall value proposition.
        </p>
        <ul>
          <li><FiPackage className='icon_text'/> Safe Package </li>
          <li><RiShipLine className='icon_text'/> Ship Everywhere </li>
          <li><AiOutlineGlobal className='icon_text'/> Global Tracking </li>
          <li><AiOutlineCustomerService className='icon_text'/> 24/7 Support</li>
          <li><BiTime className='icon_text'/> In Time Delivery </li>
          <li><GiRoundStrawBale className='icon_text'/> Transparent Pricing </li>
        </ul>
      </div>
    </div>
  )
}

export default Why_choose