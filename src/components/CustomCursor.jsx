import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const CustomCursor = () => {

const CursorRef = useRef(null)

useGSAP(()=>{

     const hoverItems = document.querySelectorAll("h1,h2,h3, .menu-item, .nav-item, .scale-cursor")
     
   const cards = document.querySelectorAll(".project-card")
   
   const MagneticCircle = document.querySelector(".circle")

   const cursor = CursorRef.current

   const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease:"power4.out" })
   const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease:"power4.out" })

   const moveCursor = (e)=>{
        xTo(e.clientX - 16)
        yTo(e.clientY - 16)
   }

   window.addEventListener("mousemove", moveCursor)


  

   hoverItems.forEach(el => {
      el.addEventListener("mouseenter", () => {
         cursor.style.background = "white"
         gsap.to(cursor, { scale: 4, duration: 0.3 })
      })

      el.addEventListener("mouseleave", () => {
         cursor.style.background = ""
        gsap.to(cursor, { scale: 1, duration: 0.3 })
      })
   })



   cards.forEach(card => {

      card.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 3, duration: 0.2 })
        cursor.innerText = "VIEW"
        cursor.style.background = "white"
        cursor.style.color = "black"
        cursor.style.mixBlendMode = "normal"
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.2 })
        cursor.innerText = ""
        cursor.style.background = ""
        cursor.style.color = ""
        cursor.style.mixBlendMode = "difference"
      })

     

   })


   return () => {
     window.removeEventListener("mousemove", moveCursor)
   }

},[])

return (
<div
  ref={CursorRef}
  className="hidden fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-800 bg-black mix-blend-difference
   md:flex items-center justify-center text-[8px] font-semibold "
></div>
)
}

export default CustomCursor