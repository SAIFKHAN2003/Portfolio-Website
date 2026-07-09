"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";

export function Projects() {
  const flagships = projects.filter((p) => p.isFlagship);
  const secondary = projects.filter((p) => !p.isFlagship);

  return (
    <section id="projects" style={{ backgroundColor: "var(--surface-alt)" }}>
      <div className="container">
        <SectionHeader label="Projects" title="Selected work" />

        {/* Flagship Projects */}
        <div className="space-y-8 mt-16">
          {flagships.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.15}>
              <motion.article
                className="group relative rounded-xl overflow-hidden"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-[2px]"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent), var(--lime), transparent)",
                  }}
                />

                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(45, 212, 168, 0.1)",
                        color: "var(--accent)",
                        border: "1px solid rgba(45, 212, 168, 0.2)",
                      }}
                    >
                      {project.year}
                    </span>
                    <span
                      className="text-xs font-mono uppercase tracking-wider"
                      style={{ color: "var(--accent)" }}
                    >
                      Flagship Project
                    </span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl mb-4 leading-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm md:text-base leading-relaxed mb-6 max-w-4xl"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div
                      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 rounded-lg"
                      style={{
                        backgroundColor: "var(--surface-alt)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div
                            className="text-lg md:text-xl font-bold"
                            style={{ color: "var(--accent)" }}
                          >
                            {metric.value}
                          </div>
                          <div
                            className="text-xs mt-1"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tools */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.04 } }
                    }}
                  >
                    {project.tools.map((tool) => (
                      <motion.div
                        key={tool}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                          }
                        }}
                      >
                        <Tag>{tool}</Tag>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Link */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group/link"
                    style={{ color: "var(--accent)" }}
                  >
                    View Case Study
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            </RevealOnScroll>
          ))}
        </div>

        {/* Secondary Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {secondary.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.15}>
              <motion.article
                className="group p-6 md:p-8 rounded-xl h-full"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-mono px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(45, 212, 168, 0.1)",
                      color: "var(--accent)",
                      border: "1px solid rgba(45, 212, 168, 0.2)",
                    }}
                  >
                    {project.year}
                  </span>
                  {project.isWinner && (
                    <span
                      className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(245, 158, 11, 0.1)",
                        color: "var(--amber)",
                        border: "1px solid rgba(245, 158, 11, 0.2)",
                      }}
                    >
                      <Trophy size={12} /> Winner
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl md:text-2xl mb-3 leading-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                <motion.div 
                  className="flex flex-wrap gap-2 mb-5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.04 } }
                  }}
                >
                  {project.tools.map((tool) => (
                    <motion.div
                      key={tool}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                        }
                      }}
                    >
                      <Tag>{tool}</Tag>
                    </motion.div>
                  ))}
                </motion.div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group/link"
                  style={{ color: "var(--accent)" }}
                >
                  View Case Study
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </a>
              </motion.article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
