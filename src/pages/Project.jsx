import React from 'react'
import Hero2 from '../components/Hero2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Hero2 heading='PROJECTS.' text='Some of my most recent works'/>
      <Work />
      <PricingCard />
    </div>
  )
}

export default Project