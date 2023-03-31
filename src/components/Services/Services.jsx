import React from 'react'
import "./Services.modules.css"
//img
import Bg from "../../assets/Photo.png"
import mid from "../../assets/service.png"
import AV1 from "../../assets/service-1.png"
import AV2 from "../../assets/service-2.png"
import AV3 from "../../assets/service-3.png"
import AV4 from "../../assets/service-4.png"
import AV5 from "../../assets/service-5.png"
//icon
import {AiOutlineDeliveredProcedure} from "react-icons/ai"
import {FaRegMoneyBillAlt} from "react-icons/fa"

const Services = () => {
  return (
    <div className='service_container'>
      <img src={Bg} alt="pic" className="pic"/>
      <div className="service_card">
      <div className="service_card-header">
        <h5 className="card-title">Why Us</h5>
        <h2 className="card-subtitle">We provide full range global Logistic Solution</h2>
      </div>
      <div className="card-body">
        <p className="card-text">
          Levarage agile framework to provide a robust synopsis for strategy
          foster collaborative thinking to further  the overall value proposition.
        </p>
        <ul className="card-list">
          <li><AiOutlineDeliveredProcedure/>Delivery on Time</li>
          <li><FaRegMoneyBillAlt/>Optimize Travel Cost</li>
        </ul>
        <div className="card-image">
          <img src={mid} alt="picr" />
        </div>
      </div>
      <div className="card-footer">
        <div>
            <h3>1294 </h3>
            <p className="card-footer-text"> Delivered Packages </p>
        </div>
        <div>
            <h3>3594</h3>
            <p className="card-footer-text"> Satisfied Clients </p>
        </div>
      </div>
    </div>
  
    {/* bottom page */}
      <h3 className='title_service'> Transporting Accross the World </h3>
      <div className='info_service'>
        <div className='img_bottom'></div>
        <div className='card_info'>
          <img src={AV1} alt="" className='info_img'/>
          <div className='card_title'>
            <h4>Liquid Transportation</h4>
            <p> perimium Tanker </p>
          </div>
        </div>
        <div className='card_info'>
        <img src={AV2} alt="" className='info_img'/>
          <div className='card_title'>
            <h4>Packaging Solutions</h4>
            <p> Warehouse Management </p>
          </div>
        </div>
        <div className='card_info'>
        <img src={AV3} alt="" className='info_img'/>
          <div className='card_title'>
            <h4>Contract Logistics</h4>
            <p> Road Transportation </p>
          </div>
        </div>
        <div className='card_info'>
        <img src={AV4} alt="" className='info_img' />
          <div className='card_title'>
            <h4>Warehouse and Distribution</h4>
            <p> Large Warehouse </p>
          </div>
        </div>
        <div className='card_info'>
        <img src={AV5} alt="" className='info_img' />
          <div className='card_title'>
            <h4>Specialized transport</h4>
            <p> Ocean Transport </p>
          </div>
        </div>
      </div>
      <div className='service_btn'>
          <button className='btn_service'>More Work</button>
        </div>
     
    </div>
  )
}

export default Services