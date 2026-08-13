import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight, Mail } from "lucide-react";
import EmailForm from "../components/EmailForm";
import { lenis } from "../utils/lenis";
import MagneticCircle from "../components/MagneticCircle";
import Socials from "../components/Socials";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Contact = () => {
  const contactSecRef = useRef(null);
  const contactHeading = useRef(null);

  useGSAP(
    () => {
      let split; // Instance variable for cleanup

      document.fonts.ready.then(() => {
        // Guard clause to prevent errors if component unmounted during font load
        if (!contactHeading.current) return;

        split = new SplitText(contactHeading.current, {
          type: "chars",
          charsClass: "inline-block",
        });

        gsap.set(split.chars, { opacity: 1, visibility: "visible" });

        gsap.from(split.chars, {
          y: 60,
          opacity: 0,
          rotateX: -60,
          stagger: 0.02,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contactHeading.current,
            start: "top 95%",
            end: "top 70%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        ScrollTrigger.refresh();
      });

      gsap.from(".go-top", {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".go-top",
          start: "top 95%",
        },
      });

      // Manual cleanup for SplitText structure
      return () => {
        if (split) {
          split.revert();
        }
      };
    },
    { scope: contactSecRef },
  );

  return (
    <section
      id="contact"
      ref={contactSecRef}
      className="w-full bg-[#111214] py-10 px-5 relative flex flex-col gap-12 overflow-hidden tracking-wide font-light font-[Montserrat]"
    >
      <div
        style={{ perspective: "1000px" }}
        className="overflow-visible w-full relative"
      >
        <h2
          ref={contactHeading}
          className="font-[Azonix] text-white text-[10vw] md:text-[8vw] text-center text-wrap tracking-tight leading-[1.1] mb-15 pt-10 px-3 overflow-visible"
          style={{ transformStyle: "preserve-3d" }}
        >
          Lets work <br /> together
        </h2>
      </div>

      <p className="text-white/60 text-center text-sm font-[Montserrat] -mt-10">
        Available for Work opportunities <br /> & worldwide collaboration
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 w-full mx-auto max-w-7xl gap-16 items-start border-t border-white/10 pt-16 mt-10">
        <div className="lg:col-span-7 text-white">
          <h3 className="text-white/20 text-xs uppercase tracking-widest mb-10 font-bold">
            01 / Drop a message
          </h3>
          <EmailForm />
        </div>

        <div className="lg:col-span-5 flex flex-col gap-12">
          <div>
            <h3 className="text-white/20 text-xs uppercase tracking-widest mb-6 font-bold">
              02 / Contact Enquiries
            </h3>
            <a
              href="mailto:chakrabortytanisha79@gmail.com"
              className="group flex items-center gap-4 text-white text-[15px] md:text-lg font-light hover:text-white/60 transition-colors break-all"
            >
              <Mail size={18} className="text-white/40 shrink-0" />
              chakrabortytanisha79@gmail.com
              <ArrowUpRight
                size={16}
                className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all shrink-0"
              />
            </a>
          </div>

          <div>
            <h3 className="text-white/20 text-xs uppercase tracking-widest mb-6 font-bold">
              03 / Quick Chat
            </h3>
            <a
              href="https://wa.me/917439452981"
              target="_blank"
              rel="noreferrer"
              className="flex w-full md:w-2/3 px-8 py-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-700 text-sm uppercase tracking-widest justify-center gap-2 items-center"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i> Whatsapp
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full flex items-center my-16">
        <div className="absolute h-px w-full bg-white/10" />

        <MagneticCircle
          className="go-top bg-white absolute left-2/3 md:left-4/5 cursor-pointer group z-30 flex flex-col items-center justify-center h-20 w-20 rounded-full overflow-hidden"
          onClick={() => {
            lenis.scrollTo("#hero", { duration: 2 });
          }}
        >
          <ArrowUpRight className="-rotate-45 text-black relative z-10 transition-transform duration-500 group-hover:scale-110" />
          <span className="text-black text-[10px] font-bold uppercase text-center relative z-10">
            Top
          </span>
          <div className="absolute inset-0 bg-[#d6d6df] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </MagneticCircle>
      </div>

      <footer className="w-full h-[8vh] text-white flex justify-between uppercase flex-wrap text-xs items-center">
        <div className="text-xs">© 2026 Tanisha</div>
        <Socials className="sm:gap-5 text-xs flex-wrap" />
      </footer>
    </section>
  );
};

export default Contact;
