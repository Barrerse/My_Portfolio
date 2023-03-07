import "./Hero.css";

import React from 'react'

import IntroImg from "../assets/img1.jpg"

import { Link } from "react-router-dom";


function Hero() {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="hero image" />
            </div>
            <div className="content">
                <p> Hello and Welcome!</p>
                <h1>SEBASTIAN BARRERA PORTFOLIO</h1>
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