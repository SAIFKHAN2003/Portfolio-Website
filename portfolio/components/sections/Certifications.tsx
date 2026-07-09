"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Tag } from "@/components/ui/Tag";
import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

export function Certifications() {
  return (
    <section id="certificates" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <SectionHeader label="Continuous Learning" title="Licenses & Certifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {certifications.map((cert, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
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
                    <Award size={16} />
                  </div>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {cert.date}
                  </span>
                </div>

                <h3
                  className="text-base font-semibold mb-1 leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.title}
                </h3>

                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  {cert.provider}
                </p>

                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cert.description}
                </p>

                <motion.div 
                  className="flex flex-wrap gap-1.5 mt-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.04 } }
                  }}
                >
                  {cert.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                        }
                      }}
                    >
                      <Tag>{skill}</Tag>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
