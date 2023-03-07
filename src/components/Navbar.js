import "./Navbar.css"

// might only need import React from "react" without useState
import React, { useState } from "react"

import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

    const[click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);


    // Code to change color of navbar when scrolling down
    const[color, setColor] = React.useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg": "header" }>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
                <Link to="/project">Projects</Link>
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