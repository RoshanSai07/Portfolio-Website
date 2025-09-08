import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { ContactSection } from "@/sections/Contact";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <main>
      <Header />
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
