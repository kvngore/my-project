import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/101.png'
import IMG2 from '../../assets/102.png'
import IMG3 from '../../assets/103.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src= {IMG1} alt="" />
              </div>
              <h3>UI/UX design transformation to a single webpage design</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
        </article>

        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src= {IMG2} alt="" />
            </div>
              <h3>Software Design Company Website</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
        </article>

        <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src= {IMG3} alt="" />
            </div>
              <h3>A fitness Website</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio