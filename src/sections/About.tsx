import { SectionWrapper } from "@/components/SectionWrapper";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <SectionWrapper className="max-w-6xl mx-auto">
      <section className="py-8 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="mb-12 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl mb-4 heading">
            Who am I, Really?
          </h2>
          <p className="text-sub text-sm sm:text-base mb-3">
            I’m Roshan, a student, yes, but more than that, someone who loves
            building with code. My journey is less about grades, more about
            sparks, small ideas that turn into projects and maybe something
            bigger one day.
          </p>
          <p className="text-sub text-sm sm:text-base mb-3">
            I don’t always follow a straight plan; I just keep experimenting,
            sometimes messy, always curious. For me, learning means building
            things that make me stop and think, “Hey, this actually works.”
          </p>
          <p className="text-sub text-sm sm:text-base mb-6">
            Each little experiment pushes me forward, and even when I fail, I
            find a new path to explore. I may just be starting out, but I
            believe these sparks will one day grow into something meaningful,
            something worth sharing with the world.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-5">
            <span className="px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm bg-secondary text-dark-secondary/70 transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:bg-secondary/80">
              Student @ VIT-AP (CSE ’28)
            </span>
            <span className="px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm bg-secondary text-dark-secondary/70 transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:bg-secondary/80">
              Curious Tinkerer
            </span>
            <span className="px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm bg-secondary text-dark-secondary/70 transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:bg-secondary/80">
              Still Learning
            </span>
            <span className="px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm bg-secondary text-dark-secondary/70 transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:bg-secondary/80">
              Curious (sometimes messy)
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-2xl text-center mb-6 heading">
            What I Know (So Far)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6 rounded-xl border-themed bg-light">
              <h4 className="font-bold mb-2 sm:mb-3">Text Editors / IDEs</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  VS Code
                </span>
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  IntelliJ
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl border-themed bg-light">
              <h4 className="font-bold mb-2 sm:mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  Python{" "}
                  <span className="text-gray-100/70 text-xs sm:text-sm ml-1">
                    Exploring
                  </span>
                </span>
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  Java{" "}
                  <span className="text-gray-100/70 text-xs sm:text-sm ml-1">
                    Exploring
                  </span>
                </span>
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  C{" "}
                  <span className="text-gray-100/70 text-xs sm:text-sm ml-1">
                    Exploring
                  </span>
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl border-themed bg-light">
              <h4 className="font-bold mb-2 sm:mb-3">Web</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  HTML{" "}
                  <span className="text-gray-100/70 text-xs sm:text-sm ml-1">
                    Exploring
                  </span>
                </span>
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  CSS{" "}
                  <span className="text-gray-100/70 text-xs sm:text-sm ml-1">
                    Exploring
                  </span>
                </span>
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  JavaScript{" "}
                  <span className="text-gray-100/70 text-xs sm:text-sm ml-1">
                    Exploring
                  </span>
                </span>
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  Next.js{" "}
                  <span className="text-gray-100/70 text-xs sm:text-sm ml-1">
                    Learning
                  </span>
                </span>
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  Tailwind CSS{" "}
                  <span className="text-gray-100/70 text-xs sm:text-sm ml-1">
                    Learning
                  </span>
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl border-themed bg-light">
              <h4 className="font-bold mb-2 sm:mb-3">AI / ML</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  Decision Trees{" "}
                  <span className="text-gray-100/70 text-xs sm:text-sm ml-1">
                    Learning
                  </span>
                </span>
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary text-white rounded-md text-xs sm:text-md transition-transform duration-300 hover:-translate-y-0.5">
                  scikit-learn{" "}
                  <span className="text-gray-100/70 text-xs sm:text-sm ml-1">
                    Learning
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/myStory"
              className="text-sub text-sm sm:text-base font-medium hover:text-primary transition inline-flex items-center space-x-2 transform hover:scale-105 active:scale-95"
            >
              <span>Know more about me</span>
              <svg
                className="w-5 h-5 text-gray-400 animate-bounce-x"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m0 0l-4-4m4 4l-4 4"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};
