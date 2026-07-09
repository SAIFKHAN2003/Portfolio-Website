"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface AnimatedCounterProps {
  target: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({
  target,
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part
    const numMatch = target.match(/[\d.]+/);
    if (!numMatch) {
      setDisplay(target);
      return;
    }

    const numericTarget = parseFloat(numMatch[0]);
    const prefix = target.substring(0, target.indexOf(numMatch[0]));
    const suffix = target.substring(
      target.indexOf(numMatch[0]) + numMatch[0].length
    );
    const isFloat = numMatch[0].includes(".");
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(2, -10 * progress);
      const current = numericTarget * eased;

      if (isFloat) {
        setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
      } else {
        setDisplay(`${prefix}${Math.round(current)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(target);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="text-3xl md:text-4xl font-bold tabular-nums"
        style={{ color: "var(--accent)" }}
      >
        {display}
      </div>
      <div
        className="text-xs mt-1 uppercase tracking-wider"
        style={{ color: "var(--text-secondary)" }}
      >
        {label}
      </div>
    </motion.div>
  );
}
