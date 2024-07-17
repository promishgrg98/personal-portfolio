import React from 'react'
import './WorkCard.css'
import project1 from '../assets/project1.png'
import { NavLink } from 'react-router-dom'

function WorkCard() {
  return (
    <div className='work-container'>
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={project1} alt="image" />

                <h2 className="project-title">Project Title</h2>

                <div className="project-details">
                    <p>This is text</p>
                </div>

                <div className="project-btns">
                    <NavLink to='#' className='btn'>View</NavLink>
                    <NavLink to='#' className='btn'>Source</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard