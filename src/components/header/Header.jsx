import React from 'react'
import CTA from './CTA'
import './header.css'
import me from '../../assets/boy.png'
import HeaderSocial from './HeaderSocial'
function Header() {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello There, I'm</h5>
            <h1>Fahim Ahmed Emon</h1>
            <CTA/>
            <HeaderSocial/>
            <div className="me">
                <img className='myi' src={me} alt='Myself'/>
            </div>
            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header