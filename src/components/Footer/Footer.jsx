import React from 'react'
import "./Footer.modules.css"
//icon
import { FaFacebookF} from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub} from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
//img
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='footer'>
      <nav className="footer-nav">
        <ul className='permalink'>
          <li>
            <a href="/"><img src={logo} alt="foot_logo" className='footer__logo'/></a>
            <p className='p_foot'>
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
          </li>
          <li>
            <a href="/">Pages</a>
            <p> About Us</p>
            <p> Our Team </p>
            <p> Our Project </p>
            <p> Pricing </p>
            <p> Contact </p>
          </li>
          <li>
            <a href="/">Utility</a>
            <p> Style Guide </p>
            <p> Change Log </p>
            <p> Licience </p>
            <p> Protected </p>
            <p> Not Found </p>
          </li>
          <li>
            <a href="/">Subscribe</a>
            <input type="email" placeholder='Email here'/>
            <button type='submit' className='btn_footer'> Send Now </button>
            <div className='footer__socials'>
            <a href='https://facebook.com'><FaFacebookF/></a>
            <a href='https://twitter.com'><FaTwitter/></a>
            <a href='https://github.com'><FaGithub/></a>
        </div>
          </li>
        </ul>
      </nav>
        <div className='footer__copyright'>
          <small> &copy; TransitFlow || Design by Becon Daniel </small>
        </div>
    </div>
  )
}

export default Footer