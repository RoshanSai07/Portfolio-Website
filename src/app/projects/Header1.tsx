"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Header1 = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const navLinks = (
    <>
      <Link
        href="/"
        className="text-primary-hover transition-colors cursor-pointer leading-none"
      >
        Home
      </Link>
      <button
        onClick={() => scrollToSection("footer")}
        className="text-primary-hover transition-colors cursor-pointer leading-none"
      >
        Get in Touch
      </button>
    </>
  );

  return (
    <header className="flex justify-between items-center py-5 px-6 md:px-8 font-heading sticky top-0 bg-light/80 dark:bg-dark/80 backdrop-blur-md z-50">
      <div className="text-primary text-2xl font-bold">
        <span className="text-secondary">Kandregula</span>Roshan
      </div>

      <nav className="hidden md:flex space-x-10 items-center">
        {navLinks}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-dark text-dark w-9 h-9 flex items-center justify-center rounded-full transition-transform duration-300 hover:rotate-30"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        )}
      </nav>

      <div className="flex items-center md:hidden space-x-3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-dark text-dark w-9 h-9 flex items-center justify-center rounded-full transition-transform duration-300 hover:rotate-30"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        )}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md bg-dark/20 dark:bg-light/20"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-light dark:bg-dark flex flex-col items-center space-y-4 py-6 md:hidden shadow-lg z-40">
          {navLinks}
        </div>
      )}
    </header>
  );
};
