import React from 'react'
import "./Testimony.modules.css"
//icon
import { FaStar } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa"
//img
import AV1 from "../../assets/AV-1.png"
import AV2 from "../../assets/AV-2.png"
import AV3 from "../../assets/AV-3.png"

const Testimony = () => {
  return (
    <div className="testify_container">
    <div className="heading-container">
      <h4 className="small-heading">Testimonial</h4>
      <FaArrowCircleRight className='arrow-icon' />
    </div>
    <h1 className="big-heading">What our Customers Say</h1>
    <div className="card-container">
      <div className="card card_right">
        <div className='img_test'>
          <img src={AV1} alt="Card-1" className="card-image" />
          <h4>Kathieen Smith</h4>
          <span>Fuel company</span>
        </div>
        <div className="card-content">
          <p className="card-text">
          Levarage agile framework to provide a robust synopsis for strategy
          foster collaborative thinking to further  the overall value proposition.
          Organically grow the holistic world view of distruptive
          innovation via workplace diversity and empowerment.
          </p>
          <div className="star-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar  className=''/>
          </div>
        </div>
      </div>
      <div className="card card_left">
      <div className='img_test'>
        <img src={AV3} alt="Card-2" className="card-image" />
          <h4 className='text'>john Martin</h4>
          <span className='text'>Restoration Company</span>
      </div>
        <div className="card-content">
          <p className="card-text">
          Levarage agile framework to provide a robust synopsis for strategy
          foster collaborative thinking to further  the overall value proposition.
          Organically grow the holistic world view of distruptive
          innovation via workplace diversity and empowerment.
          </p>
          <div className="star-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar  className=''/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimony