import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://twitter.com" target="_blank"><BsTwitter /></a>
        <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocials