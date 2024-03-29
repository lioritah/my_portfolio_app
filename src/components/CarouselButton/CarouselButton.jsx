import React, { forwardRef } from 'react'
import rightArrow from '../../../assets/right-arrow.svg'
import leftArrow from '../../../assets/left-arrow.svg'

import './CarouselButton.scss'

function CarouselButton({ direction, onClick }, ref) {
  return (
    <div ref={ref} onClick={e => onClick()} className={`carousel-button ${direction === 'previous' ? 'hide' : ''}`}>
      <img src={direction === 'next' ? rightArrow : leftArrow} alt='carousel button' />
    </div>
  )
}

export default forwardRef(CarouselButton)