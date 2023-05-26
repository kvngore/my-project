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
            <h3>Web Design Implementation</h3>
          </div>

          <ul className="service__list">
            <li> 
              <BiCheck className='service__list-icon' />
              <p>I am capable of taking designs created by UX/UI designers and converting them into functional web pages. By using HTML, CSS and JavaScript to translate the design mockups into code.</p>
            </li>
            
          </ul>
        </article>
        {/*END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Front-end Frameworks and Libraries</h3>
          </div>

          <ul className="service__list">
            <li> 
              <BiCheck className='service__list-icon' />
              <p>I utilize frameworks and libraries such as React to speed up development, enhance functionality and improve user experience.</p>
            </li>
            
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Debugging and Troubleshooting</h3>
          </div>

          <ul className="service__list">
            <li> 
              <BiCheck className='service__list-icon' />
              <p>I'm capable of debugging and resolving issues related to your website functionality, browser compatibility, layout inconsistencies, JavaScript errors, and other front-end-related problems.</p>
            </li>
            
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services