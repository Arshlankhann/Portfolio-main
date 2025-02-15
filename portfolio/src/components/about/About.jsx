import React from 'react';
import './about.css';
import Images from '../../assets/Arshlankhan.jpg';   
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Images} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            I am Arshlan Khan, a passionate web developer from Lucknow, India, with rich experience in website design, development, and customization. Over the years, I’ve had the opportunity to work on a diverse range of projects, from small-scale web applications to large enterprise systems, honing my skills in building scalable, user-friendly, and high-performance applications. For more information, feel free to visit my website: <a href='https://arshlankhan.com/'>https://arshlankhan.com/</a> .

            </p>
            <a href="https://drive.google.com/file/d/1OJxj7J03JTxWKOKHCQWFOXKQMGNJTrQb/view?usp=drive_link" className="btn">Download CV</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-end </h3>
                  <span className="skills__number">80%</span>
               
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name" > Back-end </h3>
                  <span className="skills__number">60%</span>
               
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About