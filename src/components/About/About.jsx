import React from 'react'
import "./About.modules.css"
//icons
import { RiShipLine } from "react-icons/ri"
import { MdWarehouse } from "react-icons/md"
import { MdOutlineFlightTakeoff } from "react-icons/md"
import { MdLocalShipping } from "react-icons/md"

const About = () => {
  return (
    <div className='about_container'>
      <div className='row'>
        <div className='about_what'>
          <h4 className='about_head'> What we Do</h4>
          <h1 className='about_title'> Safe & Reliable Cargo Solution</h1>
        </div>

        <div className='about_detail'>
            <div className='card card-1'>
              <RiShipLine className='icon_log'/>
              <h3>Sea transsport Services</h3>
              <p className='para_about'>
                following the of our service
                thus having gain trust of our client.
              </p>
            </div>
          
          <div className='card card-2'>
            <MdWarehouse className='icon_log'/>
            <h3>Warehousing Services</h3>
            <p className='para_about'>
              following the of our service
              thus having gain trust of our client.
            </p>
          </div>

          <div className='card card-3'>
              <MdOutlineFlightTakeoff className='icon_log'/>
            <h3>Air Flight Services </h3>
            <p className='para_about'>
              following the of our service
              thus having gain trust of our client.
            </p>
          </div>
          
          <div className='card card-4'>
            <MdLocalShipping className='icon_log'/>
            <h3>Local Shipping Service</h3>
            <p className='para_about'>
              following the of our service
              thus having gain trust of our client.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
