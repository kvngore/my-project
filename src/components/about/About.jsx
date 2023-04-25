import React from 'react'
import './About.css'
import ORE from '../../assets/ore2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ORE} alt="About Image" />
          </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>3+ Years</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>15+ Completed</small>
              </article>
            </div>

            <p>
            I design and code beautifully simple things, and i love what i do. 
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About