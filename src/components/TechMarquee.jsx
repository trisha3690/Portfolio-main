import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TechMarquee = () => {
  const container = useRef();

  const techStack = [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Hibernate",
    "REST APIs",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "React.js",
    "Git",
    "Docker",
    "Maven",
    "JPA",
  ];

  useGSAP(
    () => {
      gsap.to(".row-1", {
        xPercent: -50,
        repeat: -1,
        duration: 40,
        ease: "none",
      });

      gsap.fromTo(
        ".row-2",
        { xPercent: -50 },
        {
          xPercent: 0,
          repeat: -1,
          duration: 40,
          ease: "none",
        },
      );

      gsap.from(container.current, {
        y: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          scrub: 1,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-[#17181b] py-20 overflow-hidden select-none"
    >
      <div className="flex whitespace-nowrap border-y border-white/5 py-6 overflow-hidden">
        <div className="row-1 marquee-inner flex gap-12 pr-12">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="text-white/20 text-5xl md:text-7xl font-[Azonix] uppercase italic"
            >
              {tech} <span className="ml-12 opacity-10">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex whitespace-nowrap border-b border-white/5 py-6 mt-4 overflow-hidden">
        <div className="row-2 marquee-inner flex gap-12 pr-12">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="text-white/80 text-5xl md:text-7xl font-[Montserrat] font-bold uppercase italic"
            >
              {tech} <span className="ml-12 opacity-20">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
