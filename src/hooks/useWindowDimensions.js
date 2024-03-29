import { useState, useEffect } from 'react'

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState([])

  function extractWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window

    return [width, height]
  }

  useEffect(() => {
    function updateWindowDimensions() {
      setWindowDimensions(extractWindowDimensions())
    }

    window.addEventListener('resize', updateWindowDimensions)
    updateWindowDimensions()
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])
  
  return windowDimensions
}
