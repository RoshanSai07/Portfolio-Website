"use client";
import { ReactElement, useEffect, useState } from "react";

import { Header1 } from "./Header1";
import { Footer1 } from "./Footer1";
import LineWaveLoader from "@/components/Loader";

import ProjectCard from "@/components/ui/projectCard";

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
    type: "AI Project",
    status: "In Progress",
    description:
      "Building a predictive ML model designed to estimate the risk of chronic diseases for individuals, aimed at early detection and better preventive care.",
  },
  {
    title: "Smart Desk Companion",
    type: "ECS Project",
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
  {
    title: "Java-bot",
    type: "Mini-Project",
    status: "Preview Unavailable",
    description:
      "A simple console-based chatbot in Java that responds to user input using keyword matching.",
    codeUrl: "https://github.com/RoshanSai07/Java-Simple-Chatbot",
  },

  {
    title: "Calculator",
    type: "Mini-Project",
    status: "Live",
    description:
      "A clean, responsive web calculator implementing basic arithmetic operations.",
    codeUrl: "https://github.com/RoshanSai07/Project5-CalC",
    liveUrl: "https://odinproject5.netlify.app/",
  },
  {
    title: "Rock-Paper-Scissors Game",
    type: "Mini-Project",
    status: "Live",
    description:
      "A simple browser-based game implementing classic Rock-Paper-Scissors mechanics with score tracking.",
    codeUrl: "https://github.com/RoshanSai07/Project3-Rock-Paper-Scissors",
    liveUrl: "https://odinproject3.netlify.app/",
  },
  {
    title: "Etch-a-Sketch",
    type: "Mini-Project",
    status: "Live",
    description:
      "A browser-based Etch-a-Sketch built with JavaScript, HTML, and CSS.",
    codeUrl: "https://github.com/RoshanSai07/Project4-Etch-a-Sketch",
    liveUrl: "https://odinproject4.netlify.app/",
  },
];
export default function Projects(): ReactElement {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // loader shows for 1.5s
    return () => clearTimeout(timer);
  }, []);

  const mainProjects = projects.filter(
    (proj) => proj.type === "ECS Project" || proj.type === "AI Project"
  );
  const miniProjects = projects.filter((proj) => proj.type === "Mini-Project");

  if (loading) return <LineWaveLoader loading={loading} />;

  return (
    <>
      <Header1 />
      <section className="py-6 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl heading text-light text-center mb-5">
          All My Projects
        </h1>
        <p className="text-sub text-center mb-8">
          Explore my projects, classified by category. Some are fully live with
          previews, while others are still in progress.
        </p>

        <h2 className="text-2xl text-light font-semibold mb-6 text-center">
          Main Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {mainProjects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>

        <h2 className="text-2xl text-light font-semibold mb-6 text-center">
          Mini Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {miniProjects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>
      </section>
      <section id="footer">
        <Footer1 />
      </section>
    </>
  );
}
