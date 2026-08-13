import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SplitText from "gsap/SplitText"
import React, { useRef } from "react"
import { useLocation } from "react-router-dom"

gsap.registerPlugin(SplitText)

const Loader = ({onComplete}) => {

  const location = useLocation()
  const loaderRef = useRef()

  // convert route -> text
 const validRoutes = ["","Home","home"]

const getPageName = () => {
  const path = location.pathname.replace("/", "")

  if (!path) return "PORTFOLIO"

  if (validRoutes.includes(path)) {
    return path.toUpperCase()
  }

  return "ERROR"
}

  const pageName = getPageName()

  useGSAP(() => {


    const split = new SplitText(".loader-text", { type: "chars" })

    const tl = gsap.timeline()

    tl.fromTo(".card1",
      { y: "-100%" },
      { y: "0%", duration: 1, ease: "power4.inOut" }
    )
      .fromTo(".card2",
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power4.inOut" },
        "-=0.8"
      )
      .from(split.chars, {
        x: -80,
        opacity: 0,
        stagger: 0.05,
        ease: "elastic.out(1,0.5)"
      }, "-=0.3")

      .to(".loader",
        { y: "-100%", duration: 1,
           ease: "power4.inOut",
            delay: 0.6,
          onComplete:onComplete }
      )
  


  }, [location.pathname], {scope : loaderRef}) // animation reruns on route change


  return (
    <div ref={loaderRef} className="loader fixed top-0 left-0 z-999 h-screen w-screen flex bg-black overflow-hidden">

<div className="card1 flex-1 bg-white -mr-px will-change-transform"></div>
<div className="card2 flex-1 bg-white -ml-px will-change-transform"></div>

      <h1 className="loader-text absolute z-100 top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 text-black text-[11vw] md:text-6xl tracking-wider font-bold text-nowrap flex items-center">
        <span>.</span>{pageName}<span>.</span>
      </h1>

      

    </div>
  )
}

export default Loader