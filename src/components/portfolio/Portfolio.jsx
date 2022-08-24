import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio8.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio6.jpg'
import IMG6 from '../../assets/portfolio9.jpg'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Financial Visualization</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Social Media Marketing</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>Truth Stands</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>Be Inspired</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>Creative Flow</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>Your Gateway To Metaverse</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio