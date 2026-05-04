"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border/40 relative overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="font-display text-lg font-bold gradient-text"
        >
          {/* ─── 📝 REPLACE: Your initials ─── */}
          &lt;YN /&gt;
        </button>

        {/* Copyright */}
        <p className="text-text-dim text-xs text-center">
          {/* ─── 📝 REPLACE: Your name ─── */}
          © {new Date().getFullYear()} Your Name. Built with{" "}
          <span className="text-accent">Next.js</span> &{" "}
          <span className="text-accent2">Framer Motion</span>. Designed with ❤️
        </p>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          className="text-text-dim text-xs hover:text-accent transition-colors flex items-center gap-1"
        >
          Back to top ↑
        </motion.button>
      </div>
    </footer>
  );
}
