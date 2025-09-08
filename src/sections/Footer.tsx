"use client";

import { Info, FolderGit2, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-light text-light py-6 mt-12 shadow-t-xl">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {currentYear} Roshan Kandregula. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-1 text-light-hover hover:-translate-y-0.5 transition transform"
          >
            <Info size={16} />
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="flex items-center gap-1 text-light-hover hover:-translate-y-0.5 transition transform"
          >
            <FolderGit2 size={16} />
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-1 text-light-hover-900 hover:-translate-y-0.5 transition transform"
          >
            <Mail size={16} />
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
};
