import { MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";

const DateAndLocation = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed  right-8 md:top-3 top-1 md:right-50 z-500 flex items-center gap-4 text-white/40 text-[10px] font-mono tracking-[0.2em] uppercase mix-blend-difference">
      <div className="flex items-center gap-3">
        <span className="text-white/90">{time}</span>
        <span className="w-px h-3 bg-white/20"></span>
      </div>

      <div className="flex items-center gap-2 group">
        <div className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
        </div>
        <span className="text-white/70 group-hover:text-white transition-colors duration-300">
          Kolkata, IN
        </span>
      </div>
    </div>
  );
};

export default DateAndLocation;
