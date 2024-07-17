import React from 'react'
import './WorkCard.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

function Work() {
    return (
        <div className='work-container'>
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
               {WorkCardData.map((data, index) => {
                return (
                    <WorkCard key={index} imgsrc={data.imgsrc} title={data.title} text={data.text} view={data.view} source={data.source} />
                )
               })}
            </div>
        </div>
    )
}

export default Work