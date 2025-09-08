import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { ThemeProviderWrapper } from "./ThemeProviderWrapper";
import ScrollCircle from "../components/ScrollCircle";
import Cursor from "@/components/ui/Cursor";

import "./globals.css";

import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roshan's Protfolio",
  description: "B.Tech CSE '28 | Exploring AI, ML & Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ScrollCircle />
        <ThemeProviderWrapper>
          <Cursor />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
