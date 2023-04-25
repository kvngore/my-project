import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Oreoluwa Lawanson</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimony">Testimony</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/oreoluwa-lawanson-599975240" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com/kvng_ore01" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.comkvngore_01" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Oreoluwa. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer