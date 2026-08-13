import React from "react";

const socialHandles = [
  {
    handle: "Instagram",
    path: "https://www.instagram.com/tanisha906268/",
  },
  { handle: "GitHub", path: "https://github.com/trisha3690" },
  {
    handle: "LinkedIn",
    path: "https://www.linkedin.com/in/tanisha-chakraborty04",
  },
];
const Socials = ({ className }) => {
  return (
    <ul className={`flex ${className}`}>
      {socialHandles.map((social, i) => (
        <li key={social.handle} className="hover:opacity-70 transition flex">
          <a href={social.path} target="_blank">
            {social.handle}{" "}
          </a>
          {i < socialHandles.length - 1 ? (
            <span className="text-white/30 mx-2 sm:ml-4">|</span>
          ) : (
            ""
          )}{" "}
        </li>
      ))}
    </ul>
  );
};

export default Socials;
