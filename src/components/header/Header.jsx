import React from 'react'
import './header.css'
import CTA from './CTA'
import PIC from '../../images/pic.png'
import { Typewriter } from 'react-simple-typewriter'
import HeaderSocial from './HeaderSocials'

const Header = () => {

  const handleType = (count) => {
    console.log(count)
  }

  const handleDone = () => {
    console.log (`Done after 5 loops`)
  }

  return (
    <div>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Sachin Budha Magar</h1>
          <h2> 
            :-Developer{' '}
            <span>
              <Typewriter
                words={['"OpenToWork"']}
                loop={10}
                cursor
                cursorStyle='|'
                typeSpeed={200}
                deleteSpeed={80}
                delaySpeed={800}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h2>
          <CTA/>
          <HeaderSocial/>

          <div className="me">
            <img src={PIC} alt='me'
            />
          </div>

          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header
