"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ─────────────────────────────────────────────────────────────────
// 📝 REPLACE: Add your own real projects here!
//
// For each project:
// - title: Project name
// - description: 1-2 sentence description
// - tags: technologies used
// - demo: your live demo URL (or "#" if none yet)
// - github: your GitHub repo URL
// - emoji: a relevant emoji for the placeholder image
// - featured: set true for your best project
//
// To add a real screenshot: replace `emoji` with an `image: "/projects/name.png"`
// and update ProjectCard to use <Image> instead of the emoji placeholder.
// ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: "Personal Portfolio",
    description:
      "The very portfolio you're looking at! Built with Next.js, Tailwind CSS, and Framer Motion to showcase my skills and projects.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "#",
    github: "https://github.com/yourusername/portfolio", // ← replace
    emoji: "🎨",
    featured: true,
    gradient: "from-cyan-500/10 to-purple-500/10",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather app that shows real-time forecasts using the OpenWeatherMap API with dynamic backgrounds.",
    tags: ["React", "API", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/yourusername/weather-app", // ← replace
    emoji: "⛅",
    featured: false,
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Todo App",
    description:
      "A feature-rich todo application with local storage persistence, priority levels, and drag-and-drop reordering.",
    tags: ["React", "Hooks", "Local Storage"],
    demo: "#",
    github: "https://github.com/yourusername/todo-app", // ← replace
    emoji: "✅",
    featured: false,
    gradient: "from-green-500/10 to-teal-500/10",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "A beautiful, animated landing page for a fictional restaurant with smooth scrolling and a menu section.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "https://github.com/yourusername/restaurant", // ← replace
    emoji: "🍕",
    featured: false,
    gradient: "from-orange-500/10 to-red-500/10",
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application with multiple categories, score tracking, and a leaderboard feature.",
    tags: ["JavaScript", "HTML", "CSS"],
    demo: "#",
    github: "https://github.com/yourusername/quiz-app", // ← replace
    emoji: "🧠",
    featured: false,
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Expense Tracker",
    description:
      "A personal finance tracker that helps users manage income and expenses with charts and monthly summaries.",
    tags: ["React", "Chart.js", "CSS"],
    demo: "#",
    github: "https://github.com/yourusername/expense-tracker", // ← replace
    emoji: "💰",
    featured: false,
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className={`glass glass-hover rounded-2xl overflow-hidden group flex flex-col
                  ${project.featured ? "md:col-span-2" : ""}`}
    >
      {/* Project image / preview area */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        {/* Animated background grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Project emoji placeholder - replace with actual screenshot if you have one */}
        <motion.span
          className="text-6xl z-10 relative"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {project.emoji}
        </motion.span>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-accent/20 border border-accent/30 rounded-md text-accent text-xs font-mono">
            ★ Featured
          </div>
        )}

        {/* Hover overlay with quick links */}
        <div
          className="absolute inset-0 bg-bg/80 backdrop-blur-sm opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 flex items-center justify-center gap-4"
        >
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-accent text-bg text-sm font-semibold rounded-lg
                       hover:bg-accent/90 transition-colors"
          >
            Live Demo ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-surface border border-border text-text text-sm rounded-lg
                       hover:border-accent/40 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-text-dim text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded bg-surface border border-border text-text-dim"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom action links */}
        <div className="flex gap-4 mt-4 pt-4 border-t border-border/50">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors"
          >
            <span>🚀</span> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-text-dim hover:text-text transition-colors"
          >
            <span>📁</span> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-accent3/5 rounded-full blur-3xl pointer-events-none" />

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
            03. projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Things I&apos;ve{" "}
            <span className="gradient-text-warm">Built</span>
          </h2>
          <p className="text-text-dim mt-4 max-w-xl mx-auto">
            A collection of projects I&apos;ve worked on — from learning
            exercises to real-world apps.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-text-dim text-sm mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/yourusername" // ← 📝 REPLACE with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-border
                       rounded-xl text-sm text-text hover:border-accent/40 hover:text-accent
                       transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>📁</span> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
