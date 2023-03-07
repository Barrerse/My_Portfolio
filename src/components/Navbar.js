import "./Navbar.css"

import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div classname="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
    </div>
  )
}

export default Navbar