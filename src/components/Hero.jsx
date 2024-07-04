import React from 'react'
import './Hero.css'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className='intro-img' src={IntroImg} alt='IntroImg' />
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to={'/project'} className='btn'>
                    Project
                </Link>
                <Link to={'/contact'} className='btn btn-light'>
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero