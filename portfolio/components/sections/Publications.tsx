"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { publications } from "@/data/publications";
import { ExternalLink, FileText, Clock } from "lucide-react";

export function Publications() {
  return (
    <div className="mt-16">
      <RevealOnScroll>
        <h3
          className="text-xs font-mono uppercase tracking-[0.2em] mb-6"
          style={{ color: "var(--accent)" }}
        >
          Publications
        </h3>
      </RevealOnScroll>

      <div className="space-y-6">
        {publications.map((pub, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-2 rounded-lg shrink-0 mt-0.5"
                  style={{
                    backgroundColor:
                      pub.status === "published"
                        ? "rgba(45, 212, 168, 0.08)"
                        : "rgba(245, 158, 11, 0.08)",
                    color:
                      pub.status === "published"
                        ? "var(--accent)"
                        : "var(--amber)",
                  }}
                >
                  {pub.status === "published" ? (
                    <FileText size={18} />
                  ) : (
                    <Clock size={18} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor:
                          pub.status === "published"
                            ? "rgba(45, 212, 168, 0.1)"
                            : "rgba(245, 158, 11, 0.1)",
                        color:
                          pub.status === "published"
                            ? "var(--accent)"
                            : "var(--amber)",
                        border: `1px solid ${
                          pub.status === "published"
                            ? "rgba(45, 212, 168, 0.2)"
                            : "rgba(245, 158, 11, 0.2)"
                        }`,
                      }}
                    >
                      {pub.status === "published" ? "Published" : "In Progress"}
                    </span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {pub.publisher} · {pub.year}
                    </span>
                  </div>

                  <h4
                    className="text-base font-semibold mb-2 leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {pub.title}
                  </h4>

                  <p
                    className="text-sm mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {pub.authors}
                  </p>

                  <p
                    className="text-xs italic"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {pub.venue}
                    {pub.pages && ` ${pub.pages}`}
                  </p>

                  {pub.doiUrl && (
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono mt-3 transition-colors duration-300"
                      style={{ color: "var(--accent)" }}
                    >
                      DOI: {pub.doi}
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
