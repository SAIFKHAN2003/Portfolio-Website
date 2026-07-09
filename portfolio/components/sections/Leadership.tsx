"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { leadership } from "@/data/leadership";
import { Users } from "lucide-react";

export function Leadership() {
  return (
    <div className="mt-16">
      <RevealOnScroll>
        <h3
          className="text-xs font-mono uppercase tracking-[0.2em] mb-6"
          style={{ color: "var(--accent)" }}
        >
          Leadership & Extracurricular
        </h3>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {leadership.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <div
              className="p-5 rounded-xl h-full"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="p-1.5 rounded-md"
                  style={{
                    backgroundColor: "rgba(45, 212, 168, 0.08)",
                    color: "var(--accent)",
                  }}
                >
                  <Users size={14} />
                </div>
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.duration}
                </span>
              </div>
              <h4
                className="text-sm font-semibold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h4>
              <p
                className="text-xs mb-2"
                style={{ color: "var(--accent)" }}
              >
                {item.organization}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.description}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
