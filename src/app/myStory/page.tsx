"use client";
import { ReactElement, useEffect, useState } from "react";

import { Header2 } from "./Header2";
import { Footer2 } from "./Footer2";
import LineWaveLoader from "@/components/Loader";

export default function MyStory(): ReactElement {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LineWaveLoader loading={loading} />;

  // Real milestones reflecting your journey
  const milestones = [
    {
      title: "School Days – First Coding Steps",
      period: "7th to 10th",
      description:
        "Learned C and Java in school. Built small console programs and simple logic-based exercises. It was fun but mostly academic; my curiosity was slowly igniting.",
    },
    {
      title: "Exploring Ideas & Logic",
      period: "College Early Days",
      description:
        "Before diving deep into coding, I spent time exploring my thoughts logically and philosophically. I reflected on problems, patterns, and how ideas can grow into something bigger.",
    },
    {
      title: "Starting the Coding Journey",
      period: "University Early Semester",
      description:
        "Began learning HTML, CSS, Python, and JavaScript. Started building small web pages, simple scripts, and experimenting with projects. Learned that every small experiment teaches more than theory.",
    },
    {
      title: "From Basics to Bigger Projects",
      period: "From Last Semester",
      description:
        "Progressed from basic webpages to more complex projects integrating multiple technologies. Facing challenges in both hardware and software, I realized true learning comes from solving real problems, not just following tutorials.",
    },
    {
      title: "Reflections & Next Steps",
      period: "Ongoing",
      description:
        "Ideas are always high-end, but I now know that scaling them requires strong foundations. Every project, success, or failure teaches me patience, problem-solving, and structured thinking. The journey continues with learning, experimenting, and building impactful solutions.",
    },
  ];

  const coreValues = [
    {
      title: "Curiosity",
      desc: "Every idea starts with a question — I love exploring it until I find answers.",
    },
    {
      title: "Persistence",
      desc: "I embrace failures as lessons and push forward through challenges.",
    },
    {
      title: "Continuous Learning",
      desc: "High-end ideas need strong foundations. I focus on mastering fundamentals to build bigger things.",
    },
    {
      title: "Impact",
      desc: "I aim to create projects that solve real problems and help people.",
    },
  ];

  return (
    <>
      <Header2 />
      <main className="py-10 px-6 max-w-4xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-light font-bold mb-4">
            My Story
          </h1>
          <p className="text-sub text-lg max-w-2xl mx-auto mt-4">
            A journey of learning, experimentation, challenges, and growth.
          </p>
        </section>

        <section className="mb-16 text-center bg-gradient-to-r from-dark/5 to-dark/10 p-8 rounded-2xl">
          <h2 className="text-2xl text-light font-semibold mb-4">
            Resume & Highlights
          </h2>
          <p className="text-sub mb-6 max-w-2xl mx-auto">
            Explore all my projects, milestones, and hands-on experiences.
          </p>
          <a
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-dark rounded-lg font-medium 
                       transition-all duration-300 hover:-translate-y-1 gap-2
                       active:translate-y-0.5 shadow-sm hover:shadow-md"
          >
            View / Download Resume
          </a>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl text-light font-semibold mb-8 text-center">
            Journey & Learnings
          </h2>
          <div className="space-y-10">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border-themed shadow-themed bg-light"
              >
                <h3 className="text-xl text-light font-semibold mb-1">
                  {m.period} – {m.title}
                </h3>
                <p className="text-sub">{m.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl text-light font-semibold mb-8 text-center">
            What Drives Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border-themed shadow-themed bg-light"
              >
                <h3 className="text-xl text-light font-semibold mb-2">
                  {v.title}
                </h3>
                <p className="text-sub">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer2 />
    </>
  );
}
