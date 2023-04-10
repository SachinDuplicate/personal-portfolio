import React from "react";
import './nav.css'
import About from './../../components/about/About'
import Experience from './../../components/experience/Experience'
import Services from './../../components/services/Services'
import Contact from './../../components/contact/Contact'


function Nav({ handleHireClick }) {
  const handleClick = () => {
    handleHireClick();
  };

  return (
    <nav className="navbar">
      <div>
        <a href="#Header" className="active">Home</a>
        <a href="#about"><About/></a>
        <a href="#experience"><Experience/></a>          
        <a href="#services"><Services/></a>
        <a href="#contact"><Contact/></a>
        <span onClick={handleClick} className="hireicon">
          Hire Me
        </span>
      </div>
    </nav>
  );
}

export default Nav;
