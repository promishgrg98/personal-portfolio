import React from 'react'
import './Footer.css'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa"
import { FaPhone, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome className='icon' />
                    <div>
                        <p>Pokhara - 12.</p>
                        <p>Nepal.</p>
                    </div>
                </div>

                <div className="phone">
                    <h4>
                        <FaPhone className='icon' /> +977 9805880824
                    </h4>
                </div>

                <div className="email">
                    <h4>
                        <FaMailBulk className='icon' /> promishgrg98@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>This is me Promish Gurung. I enjoy developing websites.</p>
                <div className="social">
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaXTwitter className='icon' />
                    <FaLinkedin className='icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer