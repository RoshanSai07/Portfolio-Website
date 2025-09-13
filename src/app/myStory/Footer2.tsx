"use client";

import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const Footer2 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-light py-8 mt-12 shadow-t-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Get in Touch Section */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-lg sm:text-xl font-semibold text-light">
            Get in Touch
          </h3>
          <p className="text-sub text-sm">
            Always open for new projects, ideas, or collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-5 justify-center md:justify-start">
            <a
              href="mailto:roshankandregula07@gmail.com"
              className="flex items-center gap-2 px-3 py-2 bg-primary text-dark rounded-lg hover:shadow-md transition transform hover:-translate-y-0.5 text-sm"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="tel:+919550737746"
              className="flex items-center gap-2 px-3 py-2 bg-secondary text-dark rounded-lg hover:shadow-md transition transform hover:-translate-y-0.5 text-sm"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>
        </div>

        <div className="text-center md:text-right space-y-2 mt-4 md:mt-0">
          <p className="text-sm">
            © {currentYear} Roshan Kandregula. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end gap-3 mt-3">
            <a
              href="https://www.linkedin.com/in/roshan-kandregula/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-light-hover hover:bg-primary transition-colors text-primary hover:text-dark shadow-sm hover:shadow-md"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/RoshanSai07"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-light-hover hover:bg-primary transition-colors text-primary hover:text-dark shadow-sm hover:shadow-md"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
