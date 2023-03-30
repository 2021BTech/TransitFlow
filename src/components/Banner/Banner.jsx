import React from 'react'
import "./Banner.modules.css"
//icons
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";



const Banner = () => {
  return (
      <div className="banner-container">
        <nav className="sticky">
        <div className='row'>
          <ul className="main_nav">
            <li className="">
              <a className="" href="/">Home</a>
            </li>
            <li className="">
              <a className="" href="/">About</a>
            </li>
            <li className="">
              <a className="" href="/">Projects</a>
            </li>
            <li className="">
              <a className="" href="/">Pages</a>
            </li>
            <li className="">
              <a className="" href="/">Contact</a>
            </li>
          </ul>


          <div className='icon_nav'>

            <div className='req'>
              <button className='req'> Request Quote </button>
            </div>
            <CiInstagram className='icon_d'/>
            <CiFacebook className='icon_d'/>
            <CiTwitter className='icon_d' />
            <CiLinkedin className='icon_d' />
        </div>
        </div>
      </nav>
      
         
      <div className="banner-content">
        <span className='span_banner'> Logistics and Supply Chain Solution </span>
        <h1>Your Gateway to any Destination in the World</h1>
        <p>Egestas egestas fringilla phasellus faucibus scelerisque eleifend. 
            Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. 
            Gravida rutrum quisque non tellus orci ac auctor.  </p>
        <button className="btn"> Explore More </button>
      </div>
    </div>
  )
}
export default Banner
