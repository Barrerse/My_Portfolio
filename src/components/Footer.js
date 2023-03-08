import "./Footer.css";

import React from 'react'
import { Link } from "react-router-dom";

import { FaInstagram, FaLocationArrow, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-left">
                <div className="location">
                    <FaLocationArrow size={25} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Fort Lauderdale, Florida</p>
                        <p>United States</p>
                    </div>
                </div>
                <div className="email">
                <Link to="/contact">
                    <h4>
                      <FaMailBulk size={25} style={{color: "#fff", marginRight: "0.5rem"}}/>
                      sebastianbarrera@live.com
                    </h4>
                  </Link>
                </div>
            </div>
            <div className="footer-right">
                <h4>Follow my journey on social media</h4>
                <p> Please feel free to reach out to me so that we can connect and learn more about each other. I believe that by collaborating on projects, we can continuously improve together and achieve our shared goals.</p>
                <div className="socials">
                    <a href="https://github.com/BARRERSE">
                         <FaGithub size={25} style={{color: "#fff", marginRight: "1rem"}}/>
                        <span style={{marginLeft: "0.1rem"}}>GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/sebastianbarrera91/">
                        <FaLinkedin size={25} style={{color: "#fff", marginRight: "1rem"}}/>
                        <span style={{marginLeft: "0.1rem"}}>LinkedIn</span>
                    </a>
                    <a href="https://instagram.com/ooSebas/">
                        <FaInstagram size={25} style={{color: "#fff", marginRight: "1rem"}}/>
                        <span style={{marginLeft: "0.1em"}}>Instagram</span>
                    </a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer