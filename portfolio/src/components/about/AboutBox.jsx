import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">20</h3>
                <span className="about__subtitle">Project Completed</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className="about__title">1000+</h3>
                <span className="about__subtitle"> Cup Of Coffee</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-notebook"></i>
            <div>
                <h3 className="about__title">+1 Year</h3>
                <span className="about__subtitle">Experience Of Coding</span>
            </div>
        </div>
        
    </div>
  )
}

export default AboutBox;