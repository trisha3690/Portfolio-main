import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/all";
import { MoveUpRight } from "lucide-react";
import { SplitText } from "gsap/SplitText";
import MagneticCircle from "../components/MagneticCircle";
import Resume from "../components/Resume";

gsap.registerPlugin(ScrambleTextPlugin, SplitText);

const words = [
  "CREATIVE JAVA FULL STACK DEVELOPER",
  "REACT + MOTION DESIGN",
  "FULLSTACK DEVELOPER",
  "REACT • NODE • MONGO • SQL ",
  "BUILDING REAL WORLD APPS",
];

const HeroSection = ({ startAnimation }) => {
  const circleRef = useRef(null);

  useGSAP(() => {
    if (!startAnimation) return;

    gsap.set(".hero-main-content", { opacity: 1 });

    const tl = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      tl.to(".element", {
        duration: 1.7,
        scrambleText: {
          text: word,
          chars: "XO$#@!*",
          revealDelay: 0.8,
          speed: 0.25,
        },
        ease: "none",
      }).to({}, { duration: 2 });
    });

    gsap.fromTo(
      [".brand-name", ".hero-animate-text"],
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power4.out",
      },
    );
  }, [startAnimation]);

  return (
    <section
      id="hero"
      className="cursor-none relative min-h-screen w-full flex flex-col justify-end bg-[#080808] overflow-hidden"
    >
      {/* Scramble text */}
      <p className="element whitespace-nowrap text-white/70 tracking-[0.35em] z-20 text-xs md:text-sm uppercase absolute top-[30%] left-1/2 -translate-x-1/2"></p>

      {/* Grain */}
      <div className="grain-overlay pointer-events-none absolute inset-0 z-10" />

      {/* Blur overlay */}
      <div className="pointer-events-none absolute inset-0 blur-[120px] bg-[#111214]/50 opacity-20 z-10" />

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-70 pointer-events-none">
        <img
          src="/portfolioImgs/heroSectionImg.png"
          className="no-select hidden md:flex w-full h-full object-cover 
          object-top
          md:object-[70%_0%] image"
        />

        <img
          src="/portfolioImgs/mobile.png"
          className="no-select md:hidden w-full h-full object-cover
          object-[60%] image
          "
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30 w-full mb-15 sm:mb-0 px-6 md:px-10 pb-2 flex flex-col opacity-0 hero-main-content">
        <h1 className="brand-name select-none font-bold tracking-tight text-[14vw] md:text-[14vw] lg:text-[12vw]">
          Tanisha
        </h1>

        <div className="relative  hero-animate-text  w-full flex flex-col gap-4 lg:flex-row lg:justify-between items-center lg:-top-8 ">
          <div className="flex flex-col gap-3 text-white/40 text-nowrap">
            <span className="text-xs md:text-sm uppercase tracking-widest text-white/50">
              Get my resume for the Java full-stack application background
            </span>
            <Resume className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10 w-max max-w-[170px] mx-auto md:mx-0 self-center md:self-start" />
          </div>

          <MagneticCircle
            className="bg-transparent hidden md:flex hero-animate-text opacity-0  border border-white/90
          hover:backdrop-blur-md group z-10  flex-col"
          >
            <span className="text-white group-hover:text-black text-xs font-[Montserrat] uppercase z-10">
              Scroll
            </span>

            <div className="w-[0.5px] h-10 bg-white group-hover:bg-black pointer-events-none mt-1 z-10" />

            <span className="bg-white w-full h-full absolute top-0 translate-x-full rounded-full group-hover:translate-x-0 transition-all duration-300" />
          </MagneticCircle>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
