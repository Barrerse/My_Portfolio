import "./Footer.css";

import React from 'react'

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
                <h4><FaMailBulk size={25} style={{color: "#fff", marginRight: "2rem"}}/>sebastianbarrera@live.com</h4>
                </div>
            </div>
            <div className="footer-right">
                <h4>Follow my journey on social media</h4>
                <p> Please feel free to reach out to me so that we can connect and learn more about each other. I believe that by collaborating on projects, we can continuously improve together and achieve our shared goals.</p>
                <div className="socials">
                <FaGithub size={25} style={{color: "#fff", marginRight: "2rem"}}/>
                <FaLinkedin size={25} style={{color: "#fff", marginRight: "2rem"}}/>
                <FaInstagram size={25} style={{color: "#fff", marginRight: "2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer