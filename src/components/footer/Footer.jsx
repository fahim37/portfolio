import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'
function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>FAHIM</a>
      <ul className='permalink'>
        <li><a href='#'>Home</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>

        <a href='https://www.linkedin.com/in/fahim-ahmed-emon/'><AiFillFacebook/></a>
        <a href='https://www.facebook.com/fahim0037/'><BsLinkedin/></a>
        <a href='https://github.com/fahim37'><FaGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Fahim Ahmed Emon</small>
      </div>
    </footer>
  )
}

export default Footer