import React, { useRef, useState } from 'react'
import CarouselButton from '../CarouselButton/CarouselButton'
import ProjectTile from '../ProjectTile/ProjectTile'
import CarouselIndicator from '../CarouselIndicator/CarouselIndicator'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

import './Carousel.scss'

const MOBILE_MAX_WIDTH = 495

export default function Carousel({ projects }) {

  const [carouselIndex, setCarouselIndex] = useState(0)
  const touchPositionRef = useRef(null)
  const [width, height] = useWindowDimensions()
  const carouselNextButtonRef = useRef()
  const carouselPreviousButtonRef = useRef()

  function goToNextElement() {
    carouselPreviousButtonRef.current.classList.remove('hide')
    if (carouselIndex + 1 === projects.length - 1) {
      carouselNextButtonRef.current.classList.add('hide')
    }

    setCarouselIndex(prevIndex => {
      if (prevIndex < projects.length - 1)
        return prevIndex + 1
      return prevIndex
    })
  }
  
  function goToPreviousElement() {
    carouselNextButtonRef.current.classList.remove('hide')
    if (carouselIndex - 1 === 0) {
      carouselPreviousButtonRef.current.classList.add('hide')
    }

    setCarouselIndex(prevIndex => {
      if (prevIndex > 0)
        return prevIndex - 1
      return prevIndex
    })
  }

  function updateCarouselIndex(index) {
    if (index === 0) {
      carouselPreviousButtonRef.current.classList.add('hide')
      carouselNextButtonRef.current.classList.remove('hide')
    } else if (index === projects.length - 1) {
      carouselNextButtonRef.current.classList.add('hide')
      carouselPreviousButtonRef.current.classList.remove('hide')
    } else {
      carouselPreviousButtonRef.current.classList.remove('hide')
      carouselNextButtonRef.current.classList.remove('hide')
    }
    setCarouselIndex(index)
  }

  function handleTouchStart(e) {
    if (width > MOBILE_MAX_WIDTH) 
      return

    const touchDown = e.touches[0].clientX
    touchPositionRef.current = touchDown
  }

  function handleTouchMove(e) {
    if (width > MOBILE_MAX_WIDTH) 
      return

    const touchDown = touchPositionRef.current

    if (touchDown === null) {
        return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
        goToNextElement()
    }

    if (diff < -5) {
        goToPreviousElement()
    }

    touchPositionRef.current = null
  }

  return (
    <div className='carousel' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className="carousel-slider">
        <CarouselButton ref={carouselPreviousButtonRef} onClick={goToPreviousElement} direction='previous' />
        <div className='slides'>
          { projects.map((project, index) => 
                      <div key={project.url}  style={{ translate: `calc(${carouselIndex} * -115%)`}} className='carousel-item'>
                        <ProjectTile isSelected={carouselIndex === index} 
                                      name={project.name} 
                                      description={project.description} 
                                      url={project.url} 
                                      thumbnail={project.thumbnail} />
                      </div>
                    )
          }
        </div>
        <CarouselButton ref={carouselNextButtonRef} onClick={goToNextElement} direction='next' carouselIndex={carouselIndex} />
      </div>
      <CarouselIndicator carouselIndex={carouselIndex} length={projects.length} updateCarouselIndex={updateCarouselIndex} />
    </div>
  )
}
