"use client";
import { SectionWrapper } from "@/components/SectionWrapper";
import TypingText from "@/components/TypingEffect";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const HeroSection = () => {
  return (
    <SectionWrapper className="flex flex-col justify-center items-center min-h-[90vh] text-center space-y-6 relative px-4 sm:px-6 md:px-8">
      <section className="flex flex-col justify-center items-center min-h-[90vh] text-center space-y-6 relative px-4 sm:px-6 md:px-8">
        <div className="flex flex-col justify-center items-center space-y-3">
          <div className="text-2xl sm:text-3xl md:text-3xl text-light">
            Student of Code & Curiosity
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-light-700 pb-2 leading-tight">
            <TypingText texts={["Learning", "Experimenting", "Creating"]} />
          </div>
          <div className="text-sub text-sm sm:text-md md:text-md">
            B.Tech CSE ’28 @ VIT-AP | Exploring AI, ML & Web
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row sm:space-x-6 md:space-x-10 space-y-3 sm:space-y-0 mt-4">
          <button
            className="px-6 sm:px-8 md:px-9 py-2 sm:py-3 bg-primary text-dark rounded-lg transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0.5 active:scale-95 shadow-sm hover:shadow-md"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>
          <button
            className="px-6 sm:px-8 md:px-9 py-2 sm:py-3 bg-secondary rounded-lg transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0.5 active:scale-95 shadow-sm hover:shadow-md"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-10 h-10 border-2 border-light/50 rounded-full flex justify-center items-center animate-bounce">
            <svg
              className="w-5 h-5 text-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};
