"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { experience } from "@/data/experience";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <SectionHeader label="Experience" title="Professional timeline" />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="relative pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2"
                    style={{
                      borderColor: item.isCurrent ? "var(--accent)" : "var(--border)",
                      backgroundColor: item.isCurrent ? "var(--accent)" : "var(--surface)",
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  />

                  {/* Glow for current */}
                  {item.isCurrent && (
                    <div
                      className="absolute left-1 md:left-3 top-0 w-5 h-5 rounded-full animate-pulse"
                      style={{
                        backgroundColor: "var(--accent)",
                        opacity: 0.15,
                      }}
                    />
                  )}

                  <div
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: "var(--surface)",
                      border: `1px solid ${item.isCurrent ? "rgba(45, 212, 168, 0.3)" : "var(--border)"}`,
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.role}
                      </h3>
                      <span
                        className="text-xs font-mono shrink-0"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.duration}
                      </span>
                    </div>

                    <p
                      className="text-sm mb-4"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.company} · {item.location}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2.5">
                      {item.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="flex gap-3 text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span
                            className="w-1 h-1 rounded-full mt-2.5 shrink-0"
                            style={{ backgroundColor: "var(--accent)", opacity: 0.6 }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
