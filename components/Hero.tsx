"use client";

import { motion } from "framer-motion";
import FloatingAvatar from "./FloatingAvatar";

/**
 * Hero Section
 * The very first thing visitors see. Features:
 * - Animated greeting and title
 * - Floating avatar with orbital rings
 * - Background mesh gradient
 * - CTA buttons
 */
export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ─── Background Effects ─── */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />

      {/* Glowing orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent2/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ─── Main Content ─── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full
                       border border-accent/20 bg-accent/5 text-accent text-xs font-mono"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Open to opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.65, duration: 0.6 }}
            className="text-text-dim text-lg mb-2 font-body"
          >
            Hi there, I&apos;m 👋
          </motion.p>

          {/* ─── 📝 REPLACE: Your full name below ─── */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4"
          >
            <span className="gradient-text">Tasnim Nova</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.95, duration: 0.6 }}
            className="flex items-center gap-3 justify-center lg:justify-start mb-6"
          >
            <div className="h-px w-8 bg-accent/50" />
            <span className="text-text-dim text-base font-mono tracking-wide">
              Aspiring Web Developer
            </span>
          </motion.div>

          {/* ─── 📝 REPLACE: Your own tagline / short bio ─── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.6 }}
            className="text-text-dim text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
          >
            CSE student by day, web builder by night. I turn caffeine and
            curiosity into{" "}
            <span className="text-accent font-medium">clean, fast</span> &amp;{" "}
            <span className="gradient-text font-medium">beautiful</span>{" "}
            web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.25, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollToSection("#projects")}
              className="group px-6 py-3 bg-accent text-bg font-semibold rounded-xl
                         hover:bg-accent/90 transition-all duration-200
                         hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:-translate-y-0.5"
            >
              View My Work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-3 border border-border text-text-dim rounded-xl
                         hover:border-accent/40 hover:text-text transition-all duration-200
                         hover:-translate-y-0.5"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.6 }}
            className="flex gap-8 mt-12 justify-center lg:justify-start"
          >
            {[
              // ─── 📝 REPLACE: Update with your actual stats ───
              { value: "5+", label: "Projects Built" },
              { value: "2+", label: "Years Learning" },
              { value: "∞", label: "Cups of Tea" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-text-dim mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Floating Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.7, duration: 0.8, type: "spring" }}
          className="flex-shrink-0"
        >
          <FloatingAvatar />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-dim font-mono">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent" />
      </motion.div>
    </section>
  );
}
