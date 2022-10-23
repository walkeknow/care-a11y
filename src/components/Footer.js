import React from 'react'
import Images from '../assets/images'
import '../styles/FooterStyles.css'

function Footer() {
  return (
    <div className='Footer'>
        <img src={Images.carelonLogo} />
        <p className='HackGT'>Made at HackGT with ♥</p>
        <img src={Images.hexLabs} />
    </div>
  )
}

export default Footer