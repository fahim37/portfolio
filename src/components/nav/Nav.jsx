import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser,AiFillBook,AiFillMessage, AiFillProject} from 'react-icons/ai'
import {MdContacts} from 'react-icons/ai'
import { useState } from 'react'


function Nav() {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiFillBook/></a>
      <a href='#portfolio' onClick={()=> setActiveNav('#portfilio')} className={activeNav === '#portfilio' ? 'active' : ''}><AiFillProject/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav