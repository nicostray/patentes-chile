import React from 'react'
import '../styles/buttonUp.css'

const ButtonUp = ({positionY, scrollButton}) => {

  return (
    <button onClick={scrollButton} className={positionY<300 ? 'invisible' : 'buttonUp'}>
        <i className="fa-solid fa-chevron-up"></i>
    </button>
  )
}

export default ButtonUp