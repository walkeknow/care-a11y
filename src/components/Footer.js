import React from 'react'
import Images from '../assets/images'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='Footer'>
        <img alt='carelon logo' src={Images.carelonLogo} />
        <p className='HackGT'>Made at HackGT with ♥</p>
        <img alt='hexLabs logo' src={Images.hexLabs} />
    </div>
  )
}

export default Footer