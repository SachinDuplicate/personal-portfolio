import React from 'react'
import CV from '../../images/Sachincv.pdf'

function CTA ({ handleHireClick }) {

  const handleClick = () => {
    handleHireClick();
  };
  
  return (
    <div className="cta">
      <div>
        <a href={CV} download className='btn'>Download CV </a>
        <span onClick = {handleClick} className='btn btn-primary'>
          Let's Talk
        </span>
      </div>
    </div>
  )
}

export default CTA
