import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"
import WorkShowcase from "../components/WorkShowcase"
import { ChevronLeft, ChevronRight, RectangleHorizontal } from "lucide-react"

gsap.registerPlugin(SplitText, ScrollTrigger)



const Projects3 = () => {
  const projectRef = useRef(null)


  useGSAP(() => {
    const line = document.querySelector(".indicator-line");
    gsap.to(".bg-parallax", {
      yPercent: 20,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    const cards = gsap.utils.toArray(".project-card")
    const lines = gsap.utils.toArray(".pro-line")
    const liveUrls = gsap.utils.toArray(".live-view")
    const texts = gsap.utils.toArray(".project-text")
    const numbers = gsap.utils.toArray(".project-number")
    const headings = gsap.utils.toArray(".project-text h2")
    const headingSplit = new SplitText(".project-heading", { type: "chars" })


    const splits = headings.map(h => new SplitText(h, { type: "chars" }))


    const projects = cards.map((card, i) => ({
      card,
      text: texts[i],
      number: numbers[i],
      split: splits[i],
      line: lines[i],
      live: liveUrls[i]
    }))



    splits.forEach(split => {
      gsap.set(split.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        transformOrigin: "top center"
      })
    })

    gsap.set(".project-text p", { opacity: 0, y: 20 })

    gsap.set([".project-number", ".live-view", ".total-projects"], {
      opacity: 0,
      pointerEvents: "none"
    })

    gsap.set(".proof-head", {
      xPercent: -50,
      yPercent: -50
    })

    gsap.set(".divider-line", {
      scale: 0
    })



    gsap.set(".cardWrapper", {
      scaleY: 0,
      y: "-10%",
    })


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-sec",
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: true,
        
        onUpdate: (self) => {
          const move = (line.offsetHeight - 8) * self.progress;

          gsap.set(".bar", {
            y: move
          });
        }

      }
    })

    tl.fromTo([".proof-head h3",".pro-img"], { y: "280%", opacity: 0},{
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    })
   


    tl.to(".proof-head", {
      x: "-200%",
      duration: 4,
      opacity: 0,
    })

    tl.from(".horizontal-wrapper", {
      x: "100%",
      duration: 4
    }, "<")

    tl.from(".red-wrapper", {
      scaleY: 0,
      duration: 4,
      ease: "power3.out",
      transformOrigin: "bottom center",

    })

    tl.from(".red-wrapper h2", {
      opacity: 0,

    })

    tl.to(".cardWrapper", {
      scale: 1,
      opacity: 1,
      transformOrigin: "center center",
      x: 0,
      y: 0,
      duration: 1,
      ease: "power3.out"

    })


    tl.from(".pro-line", {
      scaleX: 0,
      transformOrigin: "left",
    })

    tl.from(".dot", {
      opacity: 0
    }, "<")

    tl.from(headingSplit.chars, {
      x: 500,
      opacity: 0,
      stagger: 0.1,

    })


    tl.to(".divider-line", {
      scale: 1,
      stagger: 0.02
    })


    projects.forEach((project, i) => {


      tl.fromTo(project.card,
        {
          clipPath: "circle(0% at 95% 5%)"
        },
        {
          clipPath: "circle(150% at 95% 5%)",
          duration: 0.8,
          ease: "power4.out"
        })

      tl.to(project.text, {
        zIndex: 10 + i,
        ease: "power3.out"
      })


      tl.to(project.split.chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.04,
        ease: "power3.out"
      })

      tl.to(project.text.querySelectorAll("p"), { opacity: 1, y: 0 }, "-=0.6")

      tl.to(".total-projects", {
        opacity: 1,
        stagger: 0.02,
      }, "<")

      tl.to([project.live, project.number], { opacity: 1, pointerEvents: "auto" }, "-=0.6")

      if (i !== projects.length - 1) {
        tl.to(project.split.chars, {
          opacity: 0,
          y: -60,
          stagger: 0.02
        })

        tl.to(project.text.querySelectorAll("p"), {
          opacity: 0,
          y: -40
        }, "<")

        tl.to([project.live, project.number], {
          opacity: 0,
          pointerEvents: "none"
        }, "-=0.6")
      }
    })

document.querySelector(".border-effect").addEventListener("mouseenter",()=>{
  gsap.to(".border-effect span", {
    scaleX:1,
    transformOrigin: "left center",
    ease:"power3.out",
    duration:0.4
    
  })
})

document.querySelector(".border-effect").addEventListener("mouseleave",()=>{
  gsap.to(".border-effect span", {
    scaleX:0,
    transformOrigin : "right center",
    ease:"power3.out",
      duration:0.4
  })
})

  })

  return (
    <div
 id="projects"
      ref={projectRef}
      className="project-sec w-full h-screen relative overflow-hidden z-2 flex bg-[#17181b] backface-hidden"
    >


      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/portfolioImgs/laptop.jpg"
          className="bg-parallax w-full h-[120%] object-cover"
        />
      </div>

    
      <div className="bg-linear-to-tr from-[#17181b] to-[#17181b]/90 w-full h-full absolute z-5" />


      <div className="text-white/80 ml-5 mt-2 text-xs absolute z-100 font-semibold flex gap-2 font-[Montserrat]">
        <span className="verticle-text"> Keep Scrolling</span>   <div className=" indicator-line h-20 w-px bg-amber-50 relative " >
          <div className=" bar w-2 h-2 rounded-full absolute top-0 left-1/2 
          -translate-x-1/2 bg-gray-100" /></div>
      </div>


      <div className="absolute bottom-10 left-12 text-white/40 
    p-5  text-sm flex z-6">

        <span className="w-4 h-3 border-l border-t border-white relative -top-5  " />
        <p className="text-xs font-light uppercase tracking-widest leading-loose">
          Crafting a world of <br />
          <span className="text-white">Unforgettable Experiences</span>


        </p>  <span className="w-4 h-3 border-r border-b border-white relative -bottom-12  " />  </div>

      <div className="proof-head w-full absolute top-1/2 left-1/2 flex flex-col items-center justify-center gap-6 z-10">

        <h3 className="text-white font-[Montserrat]  text-2xl md:text-6xl text-center will-change-transform">
          Got an idea in mind? <br /> Let my work speak for itself.
        </h3>

        <img src="/portfolioImgs/ideaImg.png" className="pro-img w-60 h-auto opacity-0 relative bottom-10 left-80 will-change-transform" />

      </div>

      <div
       
        className="horizontal-wrapper will-change-transform w-full h-full flex justify-center items-center z-8">

        <h2 className="font-[Azonix] text-[13vw] absolute top-1/2 md:top-15 text-white tracking-tight">
          MY <span className="border-effect relative ">
            PROJECT
            <span  className="w-full h-0.5  block bg-amber-50 absolute bottom-0 left-0 z-25  pointer-events-none" />

          </span> GALLERY
        </h2>

        <WorkShowcase />
      </div>
    </div>
  )
}

export default Projects3