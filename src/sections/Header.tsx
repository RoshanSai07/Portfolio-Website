"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // close menu on mobile after click
    }
  };

  return (
    <header className="flex justify-between items-center py-5 px-4 md:px-8 font-heading sticky top-0 bg-light/80 backdrop-blur-md z-50">
      <div className="text-primary text-2xl font-bold">
        <span className="text-secondary">Kandregula</span>Roshan
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-10">
        <button
          className="text-primary-hover transition-colors cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          Home
        </button>
        <button
          className="text-primary-hover transition-colors cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          About Me
        </button>
        <button
          className="text-primary-hover transition-colors cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className="text-primary-hover transition-colors cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          Get in Touch
        </button>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-dark text-dark w-9 h-9 flex items-center justify-center rounded-full transition-transform duration-300 hover:rotate-30"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        )}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center gap-2">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-dark text-dark w-9 h-9 flex items-center justify-center rounded-full transition-transform duration-300 hover:rotate-30"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        )}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-primary hover:text-primary-hover transition"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-light shadow-md flex flex-col items-center py-4 md:hidden space-y-3 z-40">
          <button
            className="text-primary-hover transition-colors cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Home
          </button>
          <button
            className="text-primary-hover transition-colors cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            About Me
          </button>
          <button
            className="text-primary-hover transition-colors cursor-pointer"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="text-primary-hover transition-colors cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
};
