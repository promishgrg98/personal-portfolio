import React from 'react'
import Hero2 from '../components/Hero2'
import PricingCard from '../components/PricingCard'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <Hero2 heading='PROJECTS.' text='Some of my most recent works'/>
      <WorkCard />
      <PricingCard />
    </div>
  )
}

export default Project