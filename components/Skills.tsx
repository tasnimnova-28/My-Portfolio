"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// ─── 📝 REPLACE: Add / remove skills and adjust percentages ───
const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML5", level: 90, color: "#e44d26" },
      { name: "CSS3", level: 85, color: "#264de4" },
      { name: "JavaScript", level: 75, color: "#f7df1e" },
      { name: "React.js", level: 65, color: "#61dafb" },
      { name: "Next.js", level: 55, color: "#ffffff" },
      { name: "Tailwind CSS", level: 70, color: "#38bdf8" },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 75, color: "#f05032" },
      { name: "VS Code", level: 90, color: "#007acc" },
      { name: "Figma", level: 50, color: "#f24e1e" },
      { name: "Node.js", level: 40, color: "#68a063" },
      { name: "TypeScript", level: 45, color: "#3178c6" },
      { name: "REST APIs", level: 60, color: "#00e5ff" },
    ],
  },
];

// Technology logos grid (icons)
const TECH_LOGOS = [
  { name: "HTML", bg: "#e44d26", emoji: "🌐" },
  { name: "CSS", bg: "#264de4", emoji: "🎨" },
  { name: "JS", bg: "#f7df1e", emoji: "⚡" },
  { name: "React", bg: "#61dafb22", emoji: "⚛️" },
  { name: "Next.js", bg: "#ffffff11", emoji: "▲" },
  { name: "Tailwind", bg: "#38bdf822", emoji: "🌊" },
  { name: "Git", bg: "#f0503222", emoji: "📦" },
  { name: "Node", bg: "#68a06322", emoji: "🟢" },
];

/**
 * AnimatedSkillBar
 * A single animated progress bar that fills when scrolled into view.
 */
function AnimatedSkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center text-sm">
        <span className="text-text font-medium">{name}</span>
        <span className="text-text-dim font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-28 relative">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

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
            02. skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-text-dim mt-4 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech logo icons grid - quick visual overview */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-14"
        >
          {TECH_LOGOS.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex flex-col items-center gap-1.5 p-3 glass rounded-xl glass-hover cursor-default"
            >
              <span className="text-2xl">{tech.emoji}</span>
              <span className="text-xs text-text-dim">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed skills with progress bars */}
        <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 shimmer rounded-t-2xl" />

          {/* Category tabs */}
          <div className="flex gap-2 mb-8">
            {SKILL_CATEGORIES.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  activeTab === i
                    ? "bg-accent/15 border border-accent/30 text-accent"
                    : "text-text-dim hover:text-text hover:bg-surface/50"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.category}
              </button>
            ))}
          </div>

          {/* Skill bars grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-5"
          >
            {SKILL_CATEGORIES[activeTab].skills.map((skill, i) => (
              <AnimatedSkillBar
                key={skill.name}
                {...skill}
                delay={i * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
