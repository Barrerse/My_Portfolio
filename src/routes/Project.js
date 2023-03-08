import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'

const Project = () => {
  return (
    <div>
        <Navbar/>
        <Hero2 heading="PROJECTS" text="Some of my recent work"/>
        <Footer/> 
    </div>
  )
}

export default Project