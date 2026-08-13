import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowDownLeft } from 'lucide-react'
import React, { useRef } from 'react'

const MagneticCircle = ({children, className="", ...props}) => {

    const circleRef = useRef(null)
useGSAP(() => {

  const el = circleRef.current

  const move = (e) => {
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)

    gsap.to(el, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.3,
      ease: "power3.out"
    })
  }

  const leave = () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "expo.out"
    })
  }

  el.addEventListener("mousemove", move)
  el.addEventListener("mouseleave", leave)

  return () => {
    el.removeEventListener("mousemove", move)
    el.removeEventListener("mouseleave", leave)
  }

}, { scope: circleRef })
  return (
    <div ref={circleRef} className={`relative circle md:w-25 md:h-25 lg:w-30 lg:h-30 w-20 h-20 flex justify-center 
      items-center rounded-full  ${className} overflow-hidden group`}
      {...props} >
        {children}
      
       </div>
  )
}

export default MagneticCircle
