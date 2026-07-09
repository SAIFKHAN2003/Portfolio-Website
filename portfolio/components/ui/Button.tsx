"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  download?: string;
  icon?: "download" | "arrow" | "none";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  href,
  download,
  icon = "none",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isGhost = variant === "secondary" || variant === "ghost";

  const baseStyles =
    "inline-flex items-center gap-2 px-[28px] py-[14px] text-[14px] font-[500] tracking-[0.02em] rounded-[6px] transition-all duration-[220ms] cursor-pointer ease-[cubic-bezier(0.16,1,0.3,1)]";

  const primaryStyles = {
    backgroundColor: isHovered ? "oklch(0.50 0.13 155)" : "oklch(0.45 0.13 155)",
    color: "#f0f4ee",
    border: "none",
    boxShadow: isHovered ? "0 4px 20px oklch(0.45 0.13 155 / 0.35)" : "none",
  };

  const ghostStyles = {
    backgroundColor: "transparent",
    color: isHovered ? "var(--color-text)" : "var(--color-text-muted)",
    border: isHovered
      ? "1px solid oklch(from var(--color-text) l c h / 0.6)"
      : "1px solid oklch(from var(--color-text) l c h / 0.25)",
    boxShadow: "none",
  };

  const currentStyles = isGhost ? ghostStyles : primaryStyles;

  const iconElement =
    icon === "download" ? (
      <Download size={16} />
    ) : icon === "arrow" ? (
      <ArrowRight 
        size={16} 
        style={{ 
          transform: isHovered ? "translateX(4px)" : "translateX(0)", 
          transition: "transform 220ms cubic-bezier(0.16, 1, 0.3, 1)" 
        }} 
      />
    ) : null;

  const content = (
    <motion.span
      className={clsx(baseStyles, className)}
      style={{
        ...currentStyles,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {iconElement && icon === "download" && iconElement}
      {children}
      {iconElement && icon === "arrow" && iconElement}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} download={download} target={download ? undefined : undefined} style={{ display: "inline-block" }}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} style={{ padding: 0, border: "none", background: "none" }}>
      {content}
    </button>
  );
}
