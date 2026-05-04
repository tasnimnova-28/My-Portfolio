"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * FloatingAvatar
 *
 * Displays your profile picture inside an animated frame with:
 * - Floating up/down animation
 * - Rotating orbital rings
 * - Decorative tech icons orbiting around
 * - Glowing border effect
 *
 * 📝 REPLACE: Add your photo as /public/avatar.jpg (or .png)
 *             Then uncomment the <Image> component and remove the placeholder
 */
export default function FloatingAvatar() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full"
      >
        {/* Outer glow ring - rotates slowly */}
        <div className="absolute inset-0 rounded-full ring-rotate">
          <svg viewBox="0 0 320 320" className="w-full h-full">
            <defs>
              <linearGradient id="ring1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle
              cx="160"
              cy="160"
              r="155"
              fill="none"
              stroke="url(#ring1)"
              strokeWidth="1"
              strokeDasharray="20 10"
            />
          </svg>
        </div>

        {/* Inner ring - rotates opposite direction */}
        <div className="absolute inset-4 rounded-full ring-rotate-rev">
          <svg viewBox="0 0 280 280" className="w-full h-full">
            <circle
              cx="140"
              cy="140"
              r="135"
              fill="none"
              stroke="rgba(124,58,237,0.3)"
              strokeWidth="0.5"
              strokeDasharray="4 8"
            />
          </svg>
        </div>

        {/* Small orbiting dots */}
        {[0, 72, 144, 216, 288].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent/60"
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: "0 0",
            }}
            animate={{ rotate: [deg, deg + 360] }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="w-2 h-2 rounded-full bg-accent"
              style={{
                transform: `translate(-50%, -50%) rotate(${0}deg) translateX(120px)`,
              }}
            />
          </motion.div>
        ))}

        {/* Main avatar container */}
        <div
          className="absolute inset-8 rounded-full overflow-hidden border-2 border-accent/30
                      bg-gradient-to-br from-accent/10 to-accent2/10 glow-cyan"
        >
          {/* ─────────────────────────────────────────────────────────────────
           *  📝 REPLACE: To use your photo:
           *  1. Add your image to the /public/ folder as "avatar.jpg"
           *  2. Delete the placeholder <div> below
           *  3. Uncomment the <Image> component
           *  ────────────────────────────────────────────────────────────── */}

          {/* PLACEHOLDER - delete this when you add your photo */}
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-surface to-card">
            {/* Cartoon-style avatar placeholder */}
            <div className="relative">
              {/* Head */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-amber-300 to-amber-400 mx-auto relative">
                {/* Eyes */}
                <div className="absolute top-7 left-4 w-3 h-3 rounded-full bg-gray-800" />
                <div className="absolute top-7 right-4 w-3 h-3 rounded-full bg-gray-800" />
                {/* Eye shine */}
                <div className="absolute top-7 left-5 w-1 h-1 rounded-full bg-white" />
                <div className="absolute top-7 right-5 w-1 h-1 rounded-full bg-white" />
                {/* Smile */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-4 border-b-2 border-gray-700 rounded-b-full"
                />
                {/* Hair */}
                <div className="absolute -top-2 left-1 right-1 h-8 bg-gray-800 rounded-t-full" />
              </div>
              {/* Body */}
              <div className="w-24 h-12 bg-gradient-to-b from-accent/40 to-accent2/40 rounded-t-3xl mx-auto mt-1" />
            </div>
            {/* ─── 📝 REPLACE: Your name initial ─── */}
            <span className="text-xs text-text-dim mt-2 font-mono">You!</span>
          </div>

          {/* YOUR PHOTO - uncomment this block and delete the placeholder above
          <Image
            src="/avatar.jpg"
            alt="Your Name"          // ← replace with your name
            fill
            className="object-cover"
            priority
          />
          */}
        </div>

        {/* Tech badges floating around the avatar */}
        {[
          { label: "React", color: "#61dafb", angle: -45, radius: 115 },
          { label: "JS", color: "#f7df1e", angle: 45, radius: 110 },
          { label: "CSS", color: "#264de4", angle: 135, radius: 115 },
          { label: "HTML", color: "#e44d26", angle: 225, radius: 110 },
        ].map((badge) => {
          const rad = (badge.angle * Math.PI) / 180;
          const x = Math.cos(rad) * badge.radius;
          const y = Math.sin(rad) * badge.radius;
          return (
            <motion.div
              key={badge.label}
              className="absolute glass rounded-lg px-2.5 py-1 text-xs font-mono font-semibold"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
                color: badge.color,
                borderColor: `${badge.color}44`,
              }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: badge.angle / 180,
              }}
            >
              {badge.label}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
