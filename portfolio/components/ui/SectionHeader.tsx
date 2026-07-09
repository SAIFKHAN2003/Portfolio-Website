"use client";

import { RevealOnScroll } from "./RevealOnScroll";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className = "" }: SectionHeaderProps) {
  return (
    <div className={className}>
      <RevealOnScroll>
        <p
          className="uppercase mb-4"
          style={{ 
            color: "oklch(0.60 0.13 175)",
            fontSize: "11px",
            letterSpacing: "0.15em",
            fontWeight: 500,
          }}
        >
          {label}
        </p>
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h2>
      </RevealOnScroll>
    </div>
  );
}
