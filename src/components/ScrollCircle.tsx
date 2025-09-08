"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollCircle() {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScroll(progress);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[99] cursor-pointer rounded-full p-2 
                  bg-light/80 backdrop-blur-lg 
                  hover:scale-105 transition-all duration-300 
                  ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <span className="absolute inset-0 rounded-full bg-light/80 backdrop-blur-lg z-0" />

      <svg
        className="w-14 h-14 transform -rotate-90 relative z-10"
        viewBox="0 0 36 36"
      >
        <path
          className="text-gray-300 dark:text-gray-700"
          strokeWidth="3"
          fill="none"
          stroke="currentColor"
          d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-primary"
          strokeWidth="3"
          fill="none"
          strokeDasharray={`${scroll}, 100`}
          strokeLinecap="round"
          stroke="currentColor"
          d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      <ChevronUp className="w-6 h-6 text-sub absolute inset-0 m-auto" />
    </button>
  );
}
