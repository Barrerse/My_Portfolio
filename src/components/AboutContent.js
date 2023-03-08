import React from 'react';
import aboutme from "../assets/aboutme.jpg";
import aboutme2 from "../assets/moab.png";
import "./AboutContent.css";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1 className="about-heading">Heres a little about me</h1>
        <p>
          I am a motivated individual who graduated from Florida International University with a degree in Mechanical Engineering. With a passion for problem-solving and optimization, I enjoy finding challenges that push me to think creatively. As someone who values staying up-to-date with the latest technology, I am constantly learning and expanding my skillset. In my free time, I love to travel and explore new places, and I also enjoy taking risks both physically and mentally, such as through my hobby of mountain biking. With my recent development skills, I am now a full-stack developer, ready to tackle new challenges and make a difference in the world of technology.
        </p>
      </div>
      <div className="right">
        <div className="right-content">
          <div className="img-stack top">
            <img src={aboutme} alt="aboutme" className="aboutme" />
            <div className="img-overlay">
              <p>Portugal 2022</p>
            </div>
          </div>
          <div className="img-stack-bottom">
            <img src={aboutme2} alt="aboutme2" className="aboutme2" />
            <div className="img-overlay2">
              <p>Moab 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;