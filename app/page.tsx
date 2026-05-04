"use client";

import { useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Custom cursor overlay */}
      <CustomCursor />

      {/* Loading animation that plays on first visit */}
      <LoadingScreen />

      {/* ─── Navigation ─── */}
      <Navbar />

      {/* ─── Page Sections ─── */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
