import React from 'react'
import "./Services.modules.css"
//img
import Bg from "../../assets/Photo.png"
import mid from "../../assets/blog-2.jpg"
import min from "../../assets/service.png"
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
   

    {/* <div className='service_section'>
      <div className='img_top'></div>
      <div className='service_card'>
        <div className='service_card_container'>
          <h4 className='service_header'> Why Us </h4>
          <h2> We provide full range global Logistic Solution</h2>
          <p> 
            Levarage agile framework to provide a robust synopsis for strategy
            foster collaborative thinking to further  the overall value proposition.
          </p>
          <br/>
          <p> 
            Organically grow the holistic world view of distruptive
            innovation via workplace diversity and empowerment.
          </p>
          <div className='icon_service_container'>
          <div className='icon_service'>
            <AiOutlineDeliveredProcedure/>
            <h3> Delivery on Time</h3>
          </div>
          <div className='icon_service'>
            <FaRegMoneyBillAlt/>
            <h3> Optimize Travel Cost </h3>
          </div>
          </div>
          <div className='card_img'>
            <img src={mid} alt="" className='img_card'/>
            <img src={min} alt="" className='img_card'/>
          </div>
        </div>
          
        <hr/>
        <div className='service_counter'>
          <div className='count'>
            <h3>1294 </h3>
            <p> Delivered Packages </p>
          </div>
          <div className='count'>
            <h3>3594</h3>
            <p> Satisfied Clients </p>
          </div>
        </div>
      </div>
    </div> */}
    
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
