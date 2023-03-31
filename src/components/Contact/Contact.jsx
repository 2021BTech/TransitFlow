import React from 'react';
import "./Contact.modules.css";
//icons
import {MdOutlineEmail} from 'react-icons/md';
import {BsTelephone} from 'react-icons/bs';
import {BsClock} from 'react-icons/bs';
//imgs
import con1 from "../../assets/contact-1.png"
import con2 from "../../assets/contact-2.jpg"
import con3 from "../../assets/contact-3.jpg"
import con4 from "../../assets/contact-4.jpg"


const Contact = () => {
  return (
    <section id='Contact'>

      <div className="container contact__container">
        <div className='contact__options'>
          <h5> Get in Touch </h5>
          <h2> Get in touch with us </h2>
          <p>
          Levarage agile framework to provide a robust synopsis for strategy 
          foster collaborative thinking to further  the overall value proposition.
          </p>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4> Email </h4>
            <h5> contact@logistics.com </h5>
          </article>
          <article className='contact__option'>
            <BsTelephone  className='contact__option-icon'/>
            <h4> Call Us </h4>
            <h5> (00)112365489 </h5>
          </article>
          <article className='contact__option'>
            <BsClock className='contact__option-icon' />
            <h4> Mon-Sun 9:00-18:00 </h4>
            <h5> Sunday Closed </h5>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form>
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Email Address' required />
          <input type='tel' name='Tel' placeholder='Phone Number' required />
          <input type='text' name='city' placeholder='City' required />
          <textarea name='Message' rows='8' placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'> Send Message </button>

          <div className="image-container">
       <div className="image">
           <img src={con1} alt="Image1" className='img_back'/>
         </div>
         <div className="image">
           <img src={con2} alt="Image2" className='img_back'/>
         </div>
         <div className="image">
           <img src={con3} alt="Image3" className='img_back'/>
         </div>
         <div className="image">
           <img src={con4} alt="Image4" className='img_back'/>
         </div>
       </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
