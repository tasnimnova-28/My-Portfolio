"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * About Section
 * Tells the story of who you are, your background, and what drives you.
 * Uses scroll-triggered animations so content fades in as user scrolls.
 */
export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent2/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest">
            01. about
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Visual card with fun elements */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              {/* Shimmer bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 shimmer rounded-t-2xl" />

              {/* Code snippet decoration */}
              <div className="font-mono text-sm space-y-2 mb-6">
                <p className="text-text-dim">
                  <span className="text-accent2">const</span>{" "}
                  <span className="text-accent">developer</span>{" "}
                  <span className="text-text">= {"{"}</span>
                </p>
                {/* ─── 📝 REPLACE: Update with your actual info ─── */}
                <p className="text-text pl-4">
                  <span className="text-text-dim">name</span>:{" "}
                  <span className="text-accent3">&apos;Your Name&apos;</span>,
                </p>
                <p className="text-text pl-4">
                  <span className="text-text-dim">role</span>:{" "}
                  <span className="text-accent3">
                    &apos;CSE Student&apos;
                  </span>,
                </p>
                <p className="text-text pl-4">
                  <span className="text-text-dim">university</span>:{" "}
                  <span className="text-accent3">
                    &apos;Your University&apos;
                  </span>,
                </p>
                <p className="text-text pl-4">
                  <span className="text-text-dim">passion</span>:{" "}
                  <span className="text-accent3">
                    &apos;Building cool stuff&apos;
                  </span>,
                </p>
                <p className="text-text pl-4">
                  <span className="text-text-dim">available</span>:{" "}
                  <span className="text-green-400">true</span>,
                </p>
                <p className="text-text">{"}"}</p>
              </div>

              {/* Fun facts */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🎓", text: "CSE Student" },
                  { icon: "💻", text: "Frontend Dev" },
                  { icon: "🌱", text: "Always Learning" },
                  { icon: "☕", text: "Tea Powered" },
                ].map((fact) => (
                  <div
                    key={fact.text}
                    className="flex items-center gap-2 bg-surface/50 rounded-lg px-3 py-2 text-sm text-text-dim"
                  >
                    <span>{fact.icon}</span>
                    <span>{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative corner badge */}
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 border border-accent/20">
              <span className="text-accent text-2xl font-display font-bold">2+</span>
              <p className="text-xs text-text-dim">years coding</p>
            </div>
          </motion.div>

          {/* Right: Bio text */}
          <motion.div variants={itemVariants} className="space-y-5">
            {/* ─────────────────────────────────────────────────────────
             *  📝 REPLACE: Write your own bio below.
             *  Keep it friendly, personal, and not too long!
             *  ──────────────────────────────────────────────────────── */}
            <p className="text-text-dim text-base leading-relaxed">
              Hey! I&apos;m a passionate{" "}
              <span className="text-accent font-medium">
                Computer Science & Engineering
              </span>{" "}
              student with a deep love for building things on the web. My
              journey into coding started when I customized my first HTML page —
              and I&apos;ve been hooked ever since.
            </p>
            <p className="text-text-dim text-base leading-relaxed">
              I love the intersection of creativity and logic that web
              development offers. From crafting pixel-perfect UIs to writing
              clean, maintainable code, I&apos;m always looking for ways to
              level up my skills and build projects that make a real difference.
            </p>
            <p className="text-text-dim text-base leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or just
              brewing the perfect cup of tea ☕ while dreaming up my next big
              project.
            </p>

            {/* Currently learning / interests */}
            <div className="pt-2">
              <p className="text-sm text-text-dim mb-3 font-mono">
                // currently exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  /* ─── 📝 REPLACE: Add your own learning topics ─── */
                  "Next.js 14",
                  "MongoDB",
                  "UI/UX Design",
                  "Node.js",
                  "Open Source",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/20 text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="/resume.pdf"   // ← 📝 REPLACE: Link to your actual resume PDF
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors mt-2"
            >
              View My Resume
              <span>→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
