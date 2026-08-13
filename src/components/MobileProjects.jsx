import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { projects } from "./WorkShowcase"


gsap.registerPlugin(ScrollTrigger)



const MobileProjects = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card")

    cards.forEach((card) => {
  
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          toggleActions: "play none none reverse",
        }
      })


      const img = card.querySelector("img")
      const overlay = card.querySelector(".img-overlay")
      
      gsap.to(img, {
        scale: 1.1,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      gsap.to(overlay, {
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          end: "top 30%",
          scrub: true
        }
      })
    })
  }, { scope: sectionRef })

  return (
    <div ref={sectionRef} className="bg-[#0c0d0e] px-5 py-20 font-[Montserrat]">
      
      <div className="mb-16 border-l-2 border-white/10 pl-4">
        <h2 className="text-[14vw] font-[Azonix] text-white leading-none tracking-tighter">
          WORKS <span className="text-[4vw] text-white/30 font-light">/04</span>
        </h2>
        <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] mt-2">
          Selected Productions 2025-26
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card group relative">
            
            
            <span className="absolute -top-10 -left-2 text-[12vw] font-[Azonix] text-white/3 pointer-events-none select-none">
              {String(index + 1).padStart(2, '0')}
            </span>

      
            <a href={project.url} target="_blank" className="block relative aspect-4/2 overflow-hidden rounded-sm bg-[#1a1b1e]">
              <img 
                src={project.image} 
                className="w-full h-full  object-contain transition-transform duration-700"
                alt={project.title}
              />
           
              <div className="img-overlay absolute inset-0 bg-black/60 transition-opacity" />
              

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10">
                <span className="text-[10px] text-white/60 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                  {project.tag.split('.')[1]} 
                </span>
                <div className="w-10 h-10 rounded-full bg-white shadow border border-black/20 flex items-center justify-center text-black -rotate-45">
                   →
                </div>
              </div>
            </a>

 
            <div className="mt-6 space-y-3">
              <h3 className="text-2xl text-white font-semibold tracking-tight">
                {project.title.toUpperCase()}
              </h3>
              <div className="w-12 h-px bg-white/40" />
              <p className="text-white/50 text-sm leading-relaxed max-w-[90%] font-light">
                {project.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}


export default MobileProjects