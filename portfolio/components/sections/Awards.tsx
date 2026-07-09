"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { awards } from "@/data/awards";
import { motion } from "framer-motion";

const typeColors: Record<string, { bg: string; border: string; color: string }> = {
  competition: {
    bg: "rgba(245, 158, 11, 0.08)",
    border: "rgba(245, 158, 11, 0.2)",
    color: "var(--amber)",
  },
  publication: {
    bg: "rgba(45, 212, 168, 0.08)",
    border: "rgba(45, 212, 168, 0.2)",
    color: "var(--accent)",
  },
  funding: {
    bg: "rgba(163, 230, 53, 0.08)",
    border: "rgba(163, 230, 53, 0.2)",
    color: "var(--lime)",
  },
  leadership: {
    bg: "rgba(45, 212, 168, 0.08)",
    border: "rgba(45, 212, 168, 0.15)",
    color: "var(--accent)",
  },
};

export function Awards() {
  return (
    <div className="mt-16">
      <RevealOnScroll>
        <h3
          className="text-xs font-mono uppercase tracking-[0.2em] mb-6"
          style={{ color: "var(--accent)" }}
        >
          Awards & Achievements
        </h3>
      </RevealOnScroll>

      <div className="space-y-4">
        {awards.map((award, i) => {
          const colors = typeColors[award.type] || typeColors.competition;
          return (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <motion.div
                className="flex gap-4 p-5 rounded-xl items-start"
                style={{
                  backgroundColor: "var(--surface)",
                  border: `1px solid var(--border)`,
                }}
                whileHover={{
                  borderColor: colors.border,
                }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className="text-2xl shrink-0 mt-0.5 w-10 h-10 flex items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: colors.bg,
                  }}
                >
                  {award.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h4
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {award.title}
                    </h4>
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: colors.bg,
                        border: `1px solid ${colors.border}`,
                        color: colors.color,
                      }}
                    >
                      {award.type}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {award.description}
                  </p>
                </div>
                <span
                  className="text-xs font-mono shrink-0 hidden sm:block"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {award.date}
                </span>
              </motion.div>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}
