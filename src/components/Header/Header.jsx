import React from 'react'
import "./Header.modules.css"
//logo
import Logo from "../../assets/logo.png"
//icons
import { TfiTimer } from 'react-icons/tfi';
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi"

const Header = () => {
  return (
    <header>
        <div className='container header_container'>
          <img src={Logo} alt = ""  className='logo_header'/>

        <div className='logs'>
          <div className='header_logs'>
            <TfiTimer className='icon_color'/>
            <h4> Mon - Sat 9:00 - 18:00</h4>
            <p> Sunday closed </p>
          </div>

          <div className='header_logs'>
            <AiOutlineMail className='icon_color'/>
            <h4> Email </h4>
            <p> contact@logistic.com</p>
          </div>

          <div className='header_logs'>
            <BiPhoneCall className="icon_color" />
            <h4> Call Us</h4>
            <p> (000) 112-356-489 </p>
          </div>
        </div>

        </div>  
    </header> 
  )
}

export default Header
