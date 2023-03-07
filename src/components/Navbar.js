import "./Navbar.css"

import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div classname="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar