import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import { lenis } from "../utils/lenis";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ startAnimation }) => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  // main animations (run once)
  useGSAP(
    () => {
      if (!startAnimation) return;

      const logo = document.querySelector(".logo");

      const magneticItems = gsap.utils.toArray(".nav-item");

      const moveItem = (e) => {
        const item = e.currentTarget;

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(item, {
          x: x,
          y: y,
          scale: 1.1,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      const resetItem = (e) => {
        const item = e.currentTarget;
        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      const logoOver = () => {
        gsap.to(".logo-track", {
          y: -28,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      const logoOut = () => {
        gsap.to(".logo-track", {
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      magneticItems.forEach((item) => {
        item.addEventListener("mousemove", moveItem);

        item.addEventListener("mouseleave", resetItem);
      });

      logo.addEventListener("mouseenter", logoOver);

      logo.addEventListener("mouseleave", logoOut);

      gsap.to(logo, { opacity: 1, duration: 2, ease: "power3.out" });

      gsap.fromTo(
        ".nav-item",
        {
          opacity: 0,
          y: -80,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.5,
          duration: 0.8,
        },
      );

      return () => {
        magneticItems.forEach((item) => {
          item.removeEventListener("mousemove", moveItem);
          item.removeEventListener("mouseleave", resetItem);
        });
        logo.removeEventListener("mouseenter", logoOver);
        logo.removeEventListener("mouseleave", logoOut);
      };
    },
    [startAnimation],
    { scope: navRef },
  );

  // hamburger animation
  useGSAP(
    () => {
      gsap.fromTo(
        menuRef.current,
        {
          opacity: 0,
          scale: 0.36,
          pointerEvents: "none",
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          pointerEvents: "auto",
          ease: "power3.out",
          scrollTrigger: {
            trigger: document.body,
            start: "top -150",
            toggleActions: "play none none reverse",
          },
        },
      );
      if (open) {
        gsap.to(".line1", { y: 8, rotate: 45, duration: 0.4 });
        gsap.to(".line2", { opacity: 0, duration: 0.3 });
        gsap.to(".line3", { y: -13, rotate: -45, duration: 0.4 });
      } else {
        gsap.to(".line1", { y: 0, rotate: 0 });
        gsap.to(".line2", { opacity: 1 });
        gsap.to(".line3", { y: 0, rotate: 0 });
      }
    },
    [open],
    { scope: navRef },
  );

  useEffect(() => {
    if (open) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [open]);

  return (
    <nav
      ref={navRef}
      className=" absolute top-0 left-0 z-50 w-full flex justify-between items-center py-8 px-7 sm:p-10 md:p-14 text-white text-lg nav-font"
    >
      <Link to="/home" className="scale-cursor">
        <div className="logo opacity-0 h-6 sm:h-8 overflow-hidden cursor-pointer">
          <div className="logo-track flex flex-col will-change-transform">
            <h2 className="text-[16px] sm:text-xl tracking-tighter">
              Tanisha Chakraborty
            </h2>
            <h2 className="text-[16px] sm:text-xl tracking-tighter">
              Portfolio
            </h2>
          </div>
        </div>
      </Link>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex md:gap-12 lg:gap-20">
        <li className="nav-item cursor-pointer opacity-0">
          <a
            href="#project"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              setTimeout(() => {
                lenis.scrollTo("#projects", {
                  offset: 1000,
                  duration: 4,
                });
              }, 600);
            }}
          >
            {" "}
            Project
          </a>
        </li>

        <li className="nav-item cursor-pointer opacity-0">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              setTimeout(() => {
                lenis.scrollTo("#about", { duration: 2 });
              }, 600);
            }}
          >
            {" "}
            About me
          </a>
        </li>

        <li className="nav-item cursor-pointer opacity-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              setTimeout(() => {
                lenis.scrollTo("#contact", {
                  duration: 4,
                });
              }, 600);
            }}
          >
            {" "}
            Get in touch
          </a>
        </li>
      </ul>

      {/* MOBILE MENU BUTTON */}

      <button
        ref={menuRef}
        onClick={() => setOpen(!open)}
        className="fixed top-10 md:top-15 right-8 z-50 w-20 h-20  flex  bg-blue-900  
      items-center justify-center rounded-full cursor-pointer overflow-hidden group will-change-transform"
      >
        <div className="w-8 h-6 flex flex-col justify-between z-10">
          <span className={`line line1 h-0.5 w-full block bg-white `}></span>
          <span className={`line line2 h-0.5 w-full block bg-white`}></span>
          <span className={`line line3 h-0.5 w-full block bg-white `}></span>
        </div>

        <span className="bg-blue-800/80 w-full h-full absolute top-0 translate-x-full rounded-full group-hover:translate-0 transition-all duration-300" />
      </button>

      <button
        onClick={() => setOpen(!open)}
        className="z-50 md:hidden  cursor-pointer text-sm font-medium hover:text-white/70 border-b transition-all duration-300"
      >
        <span className="font-extrabold text-xl">.</span>{" "}
        {open ? "close" : "Menu"}
      </button>

      <Sidebar open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
