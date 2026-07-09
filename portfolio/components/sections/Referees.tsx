"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { referees } from "@/data/referees";
import { Mail, Phone } from "lucide-react";

export function Referees() {
  return (
    <section style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <SectionHeader label="References" title="Academic Referees" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {referees.map((referee, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div
                className="p-6 rounded-xl h-full"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {referee.name}
                </h3>
                <p
                  className="text-sm mb-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {referee.title}, {referee.department}
                </p>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {referee.institution}
                </p>

                <div className="space-y-2">
                  <a
                    href={`mailto:${referee.email}`}
                    className="flex items-center gap-2 text-sm transition-colors duration-300"
                    style={{ color: "var(--accent)" }}
                  >
                    <Mail size={14} />
                    {referee.email}
                  </a>
                  <span
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Phone size={14} />
                    {referee.phone}
                  </span>
                </div>

                <div
                  className="mt-4 pt-3 border-t text-xs"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                    opacity: 0.7,
                  }}
                >
                  {referee.relationship}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
