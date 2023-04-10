import React, { useState } from 'react'
import Hire from './components/header/Hire'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  const [isShowHire, setIsShowHire] = useState(true);

  const handleHireClick = () => {
    setIsShowHire((isShowHire) => !isShowHire);
  };

  return (
    <>
      <Header/>
      <Nav handleHireClick = {handleHireClick}/>
      <Hire isShowHire={isShowHire}/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App
