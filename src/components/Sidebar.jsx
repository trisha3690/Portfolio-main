import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { lenis } from "../utils/lenis";
import Socials from "./Socials";
import Resume from "./Resume";

const Sidebar = ({ open, setOpen }) => {
  const asideRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(
    () => {
      if (open) {
        gsap.fromTo(
          asideRef.current,
          {
            clipPath: "circle(0% at 95% 5%)",
          },
          {
            clipPath: "circle(150% at 95% 5%)",
            duration: 1,
            ease: "power4.out",
          },
        );

        gsap.to(overlayRef.current, {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.4,
        });

        gsap.from(".menu-item", {
          y: 80,
          opacity: 0,
          rotate: 12,
          skewX: 25,
          stagger: 0.12,
          delay: 0.3,
        });
      } else {
        gsap.to(asideRef.current, {
          clipPath: "circle(0% at 95% 5%)",
          duration: 0.6,
          ease: "power3.in",
        });

        gsap.to(overlayRef.current, {
          opacity: 0,
          pointerEvents: "none",
        });
      }

      gsap.utils.toArray(".menu-item").forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            textShadow: "0px 0px 10px rgba(255,255,255,0.6)",
            duration: 0.3,
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            textShadow: "none",
            duration: 0.3,
          });
        });
      });
    },
    [open],
    { scope: asideRef },
  );

  return (
    <>
      <div
        ref={overlayRef}
        onClick={() => setOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-md opacity-0 pointer-events-none z-40"
      />

      <div
        ref={asideRef}
        className="fixed top-0 right-0 h-screen w-full md:w-150 bg-[#121010]  z-45 px-5 sm:px-8 py-5 border border-white/6"
      >
        <div className="flex flex-col  w-full h-full items-center justify-between ">
          <div className="w-full flex flex-col mt-20">
            <span className="self-end mr-40  font-[Cinzel] text-white">
              Navigation
            </span>
            <div className="h-[1.5px] w-[90%] bg-white/90 mx-auto rounded-full " />

            <ul
              className="flex flex-col gap-10 md:gap-10 text-4xl text-center  sm:text-5xl  font-semibold mt-15 ml-5
                     font-[Azonix] text-white"
            >
              <li className="menu-item  flex items-center gap-3 cursor-pointer group">
                <a
                  href="#project"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    setTimeout(() => {
                      lenis.scrollTo("#projects", {
                        duration: 4,
                      });
                    }, 600);
                  }}
                  className="transition-transform duration-300 group-hover:translate-x-2   "
                >
                  {" "}
                  <span>Project</span>
                </a>

                <span className="opacity-0 group-hover:opacity-100 transition">
                  →
                </span>
              </li>
              <li className="menu-item flex items-center gap-3 cursor-pointer group ">
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    setTimeout(() => {
                      lenis.scrollTo("#about");
                    }, 600);
                  }}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                >
                  {" "}
                  <span>About me</span>
                </a>

                <span className="opacity-0 group-hover:opacity-100 transition">
                  →
                </span>
              </li>

              <li className="menu-item flex items-center gap-3 cursor-pointer group">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    setTimeout(() => {
                      lenis.scrollTo("#contact");
                    }, 600);
                  }}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                >
                  <span className=" text-nowrap transition-transform duration-300  group-hover:translate-x-2">
                    Lets Talk
                  </span>
                </a>

                <span className="opacity-0 group-hover:opacity-100 transition">
                  →
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  w-full  justify-between  gap-4 text-white">
            <Resume className="flex mb-4 self-end " />

            <div className=" flex flex-col gap-1">
              <span className=" text-white/40 text-sm font-semibold">
                E mail
              </span>
              <p className="sm:text-sm text-[14px]  tracking-wide font-light font-[Montserrat] ">
                chakrabortytanisha79@gmail.com
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-white/40 text-nowrap">
                Socials
              </span>
              <Socials className="text-sm " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
