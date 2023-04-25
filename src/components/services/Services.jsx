import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li> 
              <BiCheck className='service__list-icon' />
              <p>I like building things from the ground up and bringing them to life in the browser</p>
            </li>
            
          </ul>
        </article>
        {/*END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Maintenance</h3>
          </div>

          <ul className="service__list">
            <li> 
              <BiCheck className='service__list-icon' />
              <p>I can handle all of your website maintenance needs quickly and efficiently, so that you can focus on growing your business instead of wasting time updating your site. I have a wealth of experience with a wide variety of CMS, Shopping Carts, Frameworks, custom dynamic sites, and of course plain HTML sites</p>
            </li>
            
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services