import React, { useEffect } from 'react'

import './CarouselIndicator.scss'

export default function CarouselIndicator({ carouselIndex, length, updateCarouselIndex }) {
  return (
    <div className='carousel-indicator-container'>
      {
        Array.from({ length }).map((el, index) => <div key={index + length + carouselIndex} onClick={e => updateCarouselIndex(index)} className={`carousel-indicator ${carouselIndex === index ? 'active' : ''}`}></div>)
      }
    </div>
  )
}
