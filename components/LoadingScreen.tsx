"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LoadingScreen
 * Shows a brief animated intro when the portfolio first loads.
 * Automatically hides after ~2.2 seconds.
 */
export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2.2 seconds
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-bg flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Animated logo / monogram */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative mb-8"
          >
            {/* Outer spinning ring */}
            <div className="w-24 h-24 rounded-full border border-accent/20 ring-rotate absolute inset-0" />
            <div className="w-24 h-24 rounded-full border-t border-accent ring-rotate flex items-center justify-center">
              {/* ─── 📝 REPLACE: Change "<YN>" to your initials ─── */}
              <span className="font-display text-2xl font-bold gradient-text">
                YN
              </span>
            </div>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="w-48 h-0.5 bg-border rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-accent2"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm text-text-dim font-mono tracking-widest"
          >
            initializing...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
