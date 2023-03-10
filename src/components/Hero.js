import "./Hero.css";

import React from 'react'

import IntroImg from "../assets/img1.jpg"

import { Link } from "react-router-dom";


function Hero() {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="Cappadoccia field" />
            </div>
            <div className="content">
                <p> Welcome to my portfolio</p>
                <h1>FULLSTACK DEVELOPER</h1>
                <div>
                    <Link to="/Project" className="btn">
                    Projects
                    </Link>
                    <Link to="/Contact" className="btn-light">
                    Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero