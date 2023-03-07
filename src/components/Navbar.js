import "./Navbar.css"

import React, { useState } from "react"

import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

    const[click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className="nav-menu">
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
        <div className="ham-burger" onClick={handleClick} >
            {click ? ( <FaTimes  size={20} style={{ color: "#fff"}} />) : 
            ( <FaBars  size={20} style={{ color: "#fff"}} />)}     
        </div>
    </div>
  )
}

export default Navbar