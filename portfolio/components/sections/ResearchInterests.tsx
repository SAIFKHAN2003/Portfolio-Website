"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ResearchInterests() {
  const interests = [
    "Renewable Energy",
    "E-Mobility",
    "Digital Twins for Hybrid Microgrids",
    "Off-grid Energy Systems",
    "Techno-economic Study of Hybrid RE Systems",
    "Vehicle-to-X (V2X)",
  ];

  return (
    <div className="mt-16">
      <RevealOnScroll>
        <h3
          className="text-xs font-mono uppercase tracking-[0.2em] mb-6"
          style={{ color: "var(--accent)" }}
        >
          Research Interests
        </h3>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div
          className="p-6 rounded-xl"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="flex flex-wrap gap-3 mb-6">
            {interests.map((interest) => (
              <span
                key={interest}
                className="text-xs font-mono px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(45, 212, 168, 0.08)",
                  border: "1px solid rgba(45, 212, 168, 0.2)",
                  color: "var(--accent)",
                }}
              >
                {interest}
              </span>
            ))}
          </div>

          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            My research interests lie at the intersection of{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              Renewable Energy, E-Mobility, and Digital Twins for Hybrid Microgrids
            </strong>
            . I&apos;m particularly focused on techno-economic analysis of off-grid hybrid
            energy systems, Vehicle-to-X (V2X) integration, and intelligent battery
            management — leveraging machine learning for real-time SoC/SoH estimation. I
            aim to pursue Masters research in Europe within the regulatory and
            technological ecosystem driving the global energy transition.
          </p>
        </div>
      </RevealOnScroll>
    </div>
  );
}
