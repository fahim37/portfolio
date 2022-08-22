import React from 'react'
import './portfolio.css'
import textu from '../../assets/text.png';
import weather from '../../assets/weather.png'
import rps from '../../assets/rps.png'
import tip from '../../assets/tip.png'
import fmsa from '../../assets/fmsasp.png'
import fmsl from '../../assets/fmslar.png'
import sim from '../../assets/sim.png'
const data =[
  {
    id: 1,
    image: textu,
    title: 'TextUtills React',
    github: 'https://github.com/fahim37/React-TextUtils',
    demo: 'https://fahim37.github.io/React-TextUtils/' 
  },
  {
    id: 2,
    image: weather,
    title: 'Weather App React',
    github: 'https://github.com/fahim37/React-Weather-App',
    demo: 'https://fahim37.github.io/React-Weather-App/' 
  },
  {
    id: 3,
    image: rps,
    title: 'Rock Paper Scissors JavaScript',
    github: 'https://github.com/fahim37/JavaScript-RockPaperScissors',
    demo: 'https://rps.fahimahmed33.repl.co/' 
  },
  {
    id: 4,
    image: tip,
    title: 'Tip Calculator Javascript',
    github: 'https://github.com/fahim37/JavaScript-TipCalculator',
    demo: 'https://tipcalculator.fahimahmed33.repl.co/' 
  },
  {
    id: 5,
    image: fmsl,
    title: 'Flight Management System Laravel backend',
    github: 'https://github.com/fahim37/FlightManagementSystem-Laravel-Backend',
    demo: null
  },
  {
    id: 6,
    image: fmsa,
    title: 'Flight Management System ASP Backend',
    github: 'https://github.com/fahim37/FlightManagementSystem-ASP-Backend',
    demo: null 
  },
  {
    id: 6,
    image: sim,
    title: 'Sales and Inventory Management System C# Desktop',
    github: 'https://github.com/fahim37/Sales-and-Inventory-Management-System/tree/master/Inventory%20Management%20System%5BE%5D',
    demo: null 
  }
 
]
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github repository</a>
              <a href={demo} className='btn btn-primary' target='_blank' style={{visibility:demo===null?'hidden':''}}>Live</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio