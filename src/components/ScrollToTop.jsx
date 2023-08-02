import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = (props) => {
    const location = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
        console.log("here")
        console.log(location)
    },[location])
  return (
    <>{props.children}</>
  )
}

export default ScrollToTop