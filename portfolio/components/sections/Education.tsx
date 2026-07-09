"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";
import { Publications } from "./Publications";
import { ResearchInterests } from "./ResearchInterests";
import { Awards } from "./Awards";
import { Leadership } from "./Leadership";

export function Education() {
  return (
    <section id="education" style={{ backgroundColor: "var(--surface-alt)" }}>
      <div className="container">
        <SectionHeader label="Education & Research" title="Academic foundation" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {education.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div
                className="p-6 rounded-xl h-full flex flex-col"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      backgroundColor: "rgba(45, 212, 168, 0.08)",
                      color: "var(--accent)",
                    }}
                  >
                    <GraduationCap size={18} />
                  </div>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.duration}
                  </span>
                </div>
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.degree}
                </h3>
                <p
                  className="text-sm mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.school}
                </p>
                <span
                  className="text-sm font-semibold mt-auto"
                  style={{ color: "var(--accent)" }}
                >
                  {item.score}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Sub-sections */}
        <Publications />
        <ResearchInterests />
        <Awards />
        <Leadership />
      </div>
    </section>
  );
}
