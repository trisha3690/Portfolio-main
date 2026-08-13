import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { MoveDownRight, RectangleHorizontal } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText(".about-text", { type: "words" });

      gsap.from(split.words, {
        opacity: 0,
        y: 30,
        stagger: 0.04,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 90%",
          end: "bottom 60%",
          scrub: 2,
        },
      });

      gsap.from(".heading", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".heading",
          start: "top 85%",
        },
      });

      gsap.from(".line", {
        scaleX: 0,
        transformOrigin: "left",
        scrollTrigger: {
          trigger: ".line",
          start: "top 95%",
          end: "bottom 40%",
          scrub: 1,
        },
      });

      gsap.from(".about-img", {
        scaleY: 0.65,
        scaleX: 0.65,
        transformOrigin: "center top",
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-img",
          start: "top 95%",
          end: "top 40%",
          scrub: 1,
        },
      });

      const paragraphs = gsap.utils.toArray(".about-text2");
      const splits = paragraphs.map((para) => {
        const splitLines = new SplitText(para, { type: "lines" });
        gsap.from(splitLines.lines, {
          y: 40,
          opacity: 0,
          rotateX: -10,
          skewY: 2,
          filter: "blur(10px)",
          stagger: 0.1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: para,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
        return splitLines;
      });

      return () => {
        split.revert();
        splits.forEach((s) => s.revert());
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative scroll-section bg-linear-to-b from-[#08090a] to-[#17181b] overflow-hidden min-h-screen pb- px-4 md:px-12 lg:px-24"
    >
      <div className="w-full mx-auto">
        <div className="w-full md:flex items-start gap-6 mt-12 relative p-1">
          <MoveDownRight
            size={30}
            className="text-white/60 mt-2 font-thin absolute top-0 -left-6"
          />
          <p className="about-text font-[Montserrat] text-xl md:text-3xl text-white/90 leading-tight mt-10 w-full">
            I build scalable Java full-stack applications with strong backend
            architecture and polished user experiences. My work focuses on
            maintainable APIs, responsive interfaces, and reliable systems that
            perform smoothly across web and enterprise environments.
          </p>
        </div>

        <div className="line w-full h-px bg-white/40 mt-8 will-change-transform" />

        <div className="about-content relative z-20 mt-12 flex flex-col flex-wrap justify-between gap-10 xl:gap-16 w-full">
          <div className="text-white flex-1 font-[Montserrat]">
            <p className="about-text2  leading-relaxed opacity-80">
              Building things for the web — interfaces, interactions, and
              systems that actually work in the real world.
            </p>
          </div>

          <div className="relative bg-black about-img opacity-90 w-full sm:h-[60vh] xl:h-[70vh] overflow-hidden will-change-transform">
            <img
              src="/portfolioImgs/image3.jpeg"
              className="w-full h-full max-h-[60vh] object-contain object-center transition-all duration-700 md:hidden"
              alt="About mobile"
            />
            <img
              src="/portfolioImgs/image3.jpeg"
              className="hidden md:block w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              alt="About"
            />
          </div>

          <div className=" md:w-[30%] flex-col items-start gap-4 md:self-end pb-10">
            <span className="font-[Cinzel] text-white/40 text-sm tracking-widest uppercase">
              Application Architecture
            </span>
            <p className="text-white/20 text-xs leading-tight">
              Building scalable Java systems with clean design and robust APIs.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-end mt-16 border-t border-white/10 pt-8">
          <span className="font-[Cinzel] text-white/60 text-lg mt-15 md:mt-0 self-start ">
            Still exploring...
          </span>

          <div className="text-white w-full md:w-1/2 flex flex-col">
            <h2 className="heading text-xl font-[Montserrat] font-bold tracking-tighter mb-4 text-white/90">
              WHAT I FOCUS ON
            </h2>
            <p className="about-text2 text-white/70 font-[Montserrat] tracking-wide leading-relaxed">
              I build Java full-stack applications with Spring Boot, REST APIs,
              responsive frontend interfaces, and reliable backend services. I
              focus on maintainable code, performance optimization, and seamless
              integration between client and server.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;