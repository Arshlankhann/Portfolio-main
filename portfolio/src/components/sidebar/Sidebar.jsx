import React, { useState } from 'react';
import './sidebar.css';
// import Logo from '../../assets/logo.svg';
import { FaLaptopCode } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <>
    <aside className={`aside ${showMenu ? "show-menu" : ""}`}>
      <div className="nav__close" onClick={toggleMenu}>
        <i className="icon-close"></i>
      </div>
      
      <a href="#home" className="nav__logo">
        {/* <img src={Logo} alt="" /> */}
      </a>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
              <i className="icon-user-following"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
              <FaLaptopCode />
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
              <i className="icon-briefcase"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link">
              <i className="icon-graduation"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
              <i className="icon-layers"></i>
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#contact" className="nav__link">
              <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="nav__footer">
        <span className="copyright">&copy; 2024-2025</span>
      </nav>
    </aside>
    <div className="nav__toggle" onClick={toggleMenu}>
      <i className='icon-menu'></i>
    </div>
    </>
  )
}

export default Sidebar