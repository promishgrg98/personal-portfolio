import React from 'react'
import './WorkCard.css'
import project1 from '../assets/project1.png'
import { NavLink } from 'react-router-dom'

function WorkCard(props) {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="image" />

            <h2 className="project-title">{props.title}</h2>

            <p className='project-detail'>{props.text}</p>

            <div className="project-btns">
                <NavLink to={props.view} className='btn'>View</NavLink>
                <NavLink to={props.source} className='btn'>Source</NavLink>
            </div>
        </div>
    )
}

export default WorkCard