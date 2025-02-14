import React from 'react'
import './languages.css'
import Image1 from '../../assets/java.svg';
import Image2 from '../../assets/python.svg';
// import Image3 from '../../assets/C Logo.png';
import Image4 from '../../assets/html-5.svg';
import Image5 from '../../assets/css3.svg';
import Image6 from '../../assets/icons8-bootstrap.svg';
import Image7 from '../../assets/javascript.svg';
import Image8 from '../../assets/mongodb.svg';
import Image9 from '../../assets/node.svg';
import Image10 from '../../assets/express.svg';
import Image11 from '../../assets/logo192.png';
import Image12 from '../../assets/mysql-logo.svg';
import Image13 from '../../assets/Tailwind_CSS_Logo.svg';

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
        <h2 className="section__title">Skills</h2>
        <div className="skills__container grid">
      
        <img src={Image4} alt=""  className='img__style'/>
        <img src={Image5} alt=""  className='img__style'/>
        <img src={Image6} alt=""  className='img__style'/>
        <img src={Image7} alt=""  className='img__style'/>
        <img src={Image8} alt="" id='mongo'  className='img__style'/>
        <img src={Image9} alt="" id='node'  className='img__style'/>
        <img src={Image10} alt="" id='express'  className='img__style'/>
        <img src={Image11} alt="" id='react'  className='img__style'/>
        <img src={Image12} alt=""  id='mysql' className='img__style'/>
        <img src={Image13} alt=""  id='tailwind' className='img__style'/>
          <img src={Image1} alt=""  className='img__style'/>
        <img src={Image2} alt=""  className='img__style'/>
        {/* <img src={Image3} alt=""  className='img__style'/> */}

        </div>
    </section>
  )
}

export default Skills;