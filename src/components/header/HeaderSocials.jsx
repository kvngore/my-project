import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/oreoluwa-lawanson-599975240" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/kvngore" target="_blank"><FaGithub/></a>
        <a href="https://dribble.com/kvngore" target="_blank"><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocials