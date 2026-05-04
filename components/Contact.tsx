"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// ─── 📝 REPLACE: Update with your own social media links ───
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    emoji: "🐱",
    url: "https://github.com/yourusername",
    label: "@yourusername",
  },
  {
    name: "LinkedIn",
    emoji: "💼",
    url: "https://linkedin.com/in/yourprofile",
    label: "Your Name",
  },
  {
    name: "Twitter / X",
    emoji: "🐦",
    url: "https://twitter.com/yourhandle",
    label: "@yourhandle",
  },
  {
    name: "Email",
    emoji: "✉️",
    url: "mailto:your.email@example.com",  // ← replace with your email
    label: "your.email@example.com",
  },
];

export default function Contact() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Form submission handler
  // 📝 NOTE: This is a placeholder. To make it actually send emails, you can:
  // - Use Formspree.io (free, easy to set up)
  // - Use EmailJS
  // - Build a simple API route with Next.js
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending (replace with real email service)
    await new Promise((r) => setTimeout(r, 1500));

    // For Formspree, replace the above with:
    // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    // if (res.ok) setStatus("sent"); else setStatus("error");

    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-28 relative">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent2/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent text-sm tracking-widest">
            04. contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-dim mt-4 max-w-xl mx-auto">
            Have a project in mind? Looking to collaborate? Or just want to say
            hi? My inbox is always open! 📬
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 shimmer rounded-t-2xl" />

              <h3 className="font-display text-xl font-semibold mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field */}
                <div>
                  <label className="block text-sm text-text-dim mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text
                               placeholder:text-muted outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                               transition-colors duration-200"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-sm text-text-dim mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text
                               placeholder:text-muted outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                               transition-colors duration-200"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-sm text-text-dim mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hi! I'd love to work with you on..."
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text
                               placeholder:text-muted outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                               transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200
                    ${
                      status === "sent"
                        ? "bg-green-500/20 border border-green-500/30 text-green-400"
                        : status === "sending"
                          ? "bg-accent/20 text-accent cursor-wait"
                          : "bg-accent text-bg hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
                    }`}
                >
                  {status === "sent"
                    ? "✓ Message Sent!"
                    : status === "sending"
                      ? "Sending..."
                      : "Send Message →"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right: Social links + info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between gap-6"
          >
            {/* Availability badge */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">
                  Available for work
                </span>
              </div>
              <p className="text-text-dim text-sm leading-relaxed">
                {/* ─── 📝 REPLACE: Update with your availability ─── */}
                I&apos;m currently open to internship opportunities, freelance
                projects, and collaboration. Don&apos;t hesitate to reach out!
              </p>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold mb-5">
                Find Me Online
              </h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface/50 hover:bg-surface
                               border border-transparent hover:border-border transition-all duration-200 group"
                  >
                    <span className="text-xl w-8 text-center">{social.emoji}</span>
                    <div>
                      <div className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                        {social.name}
                      </div>
                      <div className="text-xs text-text-dim">{social.label}</div>
                    </div>
                    <span className="ml-auto text-muted group-hover:text-accent transition-colors text-xs">
                      ↗
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
