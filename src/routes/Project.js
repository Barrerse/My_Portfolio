import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
// import ProjectCard from '../components/ProjectCard'
import Work from '../components/Work'


const Project = () => {
  return (
    <div>
        <Navbar/>
        <Hero2 heading="PROJECTS" text="Some of my recent work"/>
        {/* <ProjectCard/> */}
        <Work/>
        <Footer/> 
    </div>
  )
}

export default Project