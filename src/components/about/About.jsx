import React from 'react'
import './about.css'
import myself from '../../assets/myself.jpg'

function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myself} alt="about img" />
          </div>
        </div>
        <div className="about__content">
          <p>
          My future plan is to become a software engineer. I want to improve my technical ability and gain experience working on large-scale projects. I have the ability to learn quickly and I am interested in learning new technologies. I am currently pursuing my final semester in Computer Science and Engineering at American International University - Bangladesh. 
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About