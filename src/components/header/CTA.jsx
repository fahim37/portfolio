import React from 'react'
import cv from '../../assets/Resume-Fahim-Ahmed-Emon.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA