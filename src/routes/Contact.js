import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero2 heading="CONTACT" text="Lets talk!" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact