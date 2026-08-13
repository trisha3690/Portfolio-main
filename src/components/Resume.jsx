import { ArrowDownToLine } from "lucide-react";
import React from "react";

const Resume = ({ className }) => {
  return (
    <>
      <a
        className={` ${className} scale-cursor group text-white font-[Montserrat] 
      text-sm overflow-hidden whitespace-nowrap cursor-pointer z-10 `}
        href="/Tanisha_Resume.pdf"
        download
      >
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          <ArrowDownToLine size={14} />

          <span className="relative inline-block overflow-hidden whitespace-nowrap">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
              Resume
            </span>
            <span className="block absolute left-0 top-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 whitespace-nowrap">
              Resume
            </span>
          </span>
        </span>
      </a>
    </>
  );
};

export default Resume;
