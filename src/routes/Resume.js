import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import ResumePDF from '../components/ResumePDF'

const Resume = () => {
  return (
    <div>
        <Navbar/> 
        <Hero2 heading="RESUME" text="Heres what ive been up to"/>
        <ResumePDF />
        <Footer/> 
    </div>
  )
}

export default Resume