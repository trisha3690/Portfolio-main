import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import MagneticCircle from '../components/MagneticCircle'

const PageNotFound = ({ startAnimation }) => {
  const container = useRef(null)

  useGSAP(() => {
    if (!startAnimation) return

    gsap.set(".not-found-text", { opacity: 1 })
    gsap.set(".divider-line", { opacity: 1 })
    gsap.set(".home-cursor", { scale: 1 })

    const tl = gsap.timeline()
    
    // Text Reveal
    tl.from(".char", {
      y: 150,
      skewY: 7,
      duration: 1.5,
      stagger: 0.1,
      ease: "expo.out"
    })
    .from(".sub-text, .action-btn", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2
    }, "-=1")
    .from(".divider-line", {
      scaleX: 0,
      transformOrigin: "left",
      duration: 1.5,
      ease: "power4.out"
    }, "-=0.5")

    tl.from(".home-cursor", {
      scale: 0,
      duration: 1,
      ease: "back.out(1.7)"
    }, "-=1")

    // Floating 404
    gsap.to(".big-404", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

  
  },[startAnimation], { scope: container })

  return (
    <div 
      ref={container} 
      className="relative w-full h-screen bg-[#0c0d0e] text-white flex flex-col items-center justify-center overflow-hidden font-[Montserrat]"
    >
    
      <h5 className="big-404 absolute text-[35vw] font-[Azonix] text-white/3 select-none z-0">
        404
      </h5>

    
      <div className=" not-found-text relative z-10 flex flex-col items-center opacity-0">
        <div className="scale-cursor overflow-hidden flex gap-2 mb-4">
          {["P", "A", "G", "E"].map((char, i) => (
            <span key={i} className="char text-[15vw] md:text-[8vw] font-[Azonix] leading-none inline-block">
              {char}
            </span>
          ))}
        </div>

        <div className="overflow-hidden flex gap-2">
          {["L", "O", "S", "T"].map((char, i) => (
            <span key={i} className="char text-[15vw] md:text-[8vw] font-[Azonix] leading-none inline-block text-white/40">
              {char}
            </span>
          ))}
        </div>

        <p className="sub-text text-[10px] md:text-xs text-white/50 tracking-[0.4em] uppercase mt-8 text-center max-w-xs">
          Dimension Error: Coordinate Not Found
        </p>
      </div>

      
      <div className="relative  w-full flex items-center px-4 md:px-12 top-20">
        <div className=" divider-line h-px w-full bg-white/10 opacity-0" />
        
        <Link to="/" className='absolute right-20 scale-0 home-cursor'>
          <MagneticCircle className="bg-white border border-black/2">
            <div className="relative z-10 flex flex-col items-center text-black group-hover:text-white">
              <ArrowUpRight size={20} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span className="text-[10px] font-bold uppercase mt-1 ">Home</span>
            </div>
            
            <div className="absolute inset-0 bg-[#33337d] translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
          </MagneticCircle>
        </Link>
      </div>

    
      <div className="absolute bottom-10 left-10  text-[9px] tracking-[0.3em] text-white/20 uppercase font-light">
        System_Status: 404_VOID
      </div>
      <div className="absolute bottom-10 right-10 hidden md:block text-[9px] tracking-[0.3em] text-white/20 uppercase font-light">
        [ 2026 @Edition ]
      </div>
    </div>
  )
}

export default PageNotFound