"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";

interface TagProps {
  children: string;
  className?: string;
  isHighlighted?: boolean;
}

export function Tag({ children, className, isHighlighted = false }: TagProps) {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyles = {
    bg: "oklch(0.22 0.03 155)",
    color: "oklch(0.75 0.06 155)",
    border: "1px solid oklch(0.35 0.06 155 / 0.5)",
    hoverBg: "oklch(0.28 0.05 155)",
    hoverColor: "oklch(0.85 0.06 155)",
    hoverBorder: "1px solid oklch(0.45 0.06 155 / 0.8)"
  };

  const highlightedStyles = {
    bg: "oklch(0.35 0.10 165)",
    color: "oklch(0.88 0.08 155)",
    border: "1px solid oklch(0.50 0.12 165 / 0.6)",
    hoverBg: "oklch(0.40 0.12 165)",
    hoverColor: "oklch(0.95 0.08 155)",
    hoverBorder: "1px solid oklch(0.60 0.12 165 / 0.8)"
  };

  const currentStyles = isHighlighted ? highlightedStyles : defaultStyles;

  return (
    <motion.span
      className={clsx(
        "inline-block font-mono cursor-default select-none transition-all duration-[150ms] ease-out",
        className
      )}
      style={{
        backgroundColor: isHovered ? currentStyles.hoverBg : currentStyles.bg,
        border: isHovered ? currentStyles.hoverBorder : currentStyles.border,
        color: isHovered ? currentStyles.hoverColor : currentStyles.color,
        borderRadius: "4px",
        padding: "4px 10px",
        fontSize: "12px",
        letterSpacing: "0.05em",
        fontWeight: 400,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
    </motion.span>
  );
}
