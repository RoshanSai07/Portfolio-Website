import { ReactElement } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ui/projectCard";

import { SectionWrapper } from "@/components/SectionWrapper";

interface Project {
  title: string;
  type: string;
  status: "Live" | "In Progress" | "Preview Unavailable";
  description: string;
  codeUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "Machine Learning Model for Predicting Chronic Disease Risk",
    type: "ECS Project",
    status: "In Progress",
    description:
      "Building a predictive ML model designed to estimate the risk of chronic diseases for individuals, aimed at early detection and better preventive care.",
  },
  {
    title: "Smart Desk Companion",
    type: "AI Project",
    status: "In Progress",
    description:
      "Building an emotionally intelligent desk companion that monitors and responds to student emotions in real-time.",
  },
  {
    title: "Time-Table Optimizer",
    type: "Mini-Project",
    status: "Live",
    description:
      "A tool that helps students create an optimal class schedule without time slot conflicts.",
    codeUrl: "https://github.com/RoshanSai07/Timetable-Optimizer",
    liveUrl: "https://clashguard.netlify.app/",
    imageUrl: "/assets/Clashguard.png",
  },
  {
    title: "Hearts through Time",
    type: "Mini-Project",
    status: "Live",
    description:
      "An interactive website exploring the history and traditions of Valentine's Day around the world.",
    codeUrl: "https://github.com/RoshanSai07/Valentine",
    liveUrl: "https://valentinevibes.netlify.app/",
    imageUrl: "/assets/Valentine.png",
  },
];

export const ProjectsSection = () => {
  const mainProjects = projects.filter(
    (proj) => proj.type === "ECS Project" || proj.type === "AI Project"
  );
  const miniProjects = projects.filter((proj) => proj.type === "Mini-Project");

  return (
    <SectionWrapper className="py-8 px-6 max-w-6xl mx-auto">
      <section className="py-6 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl heading text-light text-center mb-10">
          Projects
        </h1>

        <h2 className="text-lg sm:text-xl text-light mb-6 text-center">
          Main Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-10">
          {mainProjects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>

        <h2 className="text-lg sm:text-xl text-light mb-6 text-center">
          Mini Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {miniProjects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="text-sub text-sm sm:text-base font-medium hover:text-primary transition inline-flex items-center space-x-2 transform hover:scale-105 active:scale-95"
          >
            <span>View more projects</span>
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
      </section>
    </SectionWrapper>
  );
};
