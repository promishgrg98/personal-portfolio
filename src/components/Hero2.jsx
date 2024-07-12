import React from 'react'
import './Hero2.css'

function Hero2(props) {
  return (
    <div className='hero'>
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Hero2