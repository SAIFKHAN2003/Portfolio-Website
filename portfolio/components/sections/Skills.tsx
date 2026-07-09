"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { skillGroups } from "@/data/skills";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <SectionHeader label="Skills" title="Technical toolkit" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {skillGroups.map((group, groupIndex) => (
            <RevealOnScroll key={group.title} delay={groupIndex * 0.15}>
              <div
                className="p-6 rounded-xl h-full"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <h3
                  className="text-xs font-mono uppercase tracking-[0.15em] mb-5 pb-4 border-b"
                  style={{
                    color: "var(--accent)",
                    borderColor: "var(--border)",
                  }}
                >
                  {group.title}
                </h3>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.04,
                        delayChildren: groupIndex * 0.15
                      }
                    }
                  }}
                >
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                        }
                      }}
                    >
                      <Tag isHighlighted={skill === "NumPy / Pandas" || skill === "MATLAB Simulink" || skill === "PEM Fuel Cells"}>{skill}</Tag>
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
