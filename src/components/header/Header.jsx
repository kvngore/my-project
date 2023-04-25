import React from 'react'
import './Header.css'
import CTA from './CTA'
import ORE from '../../assets/ore.jpg'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Oreoluwa Lawanson</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ORE} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header