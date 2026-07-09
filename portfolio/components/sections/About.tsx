"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function About() {
  return (
    <section id="about" className="relative" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <SectionHeader label="About" title="Engineering energy systems&#10;that move us forward." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
          {/* Photo */}
          <RevealOnScroll className="lg:col-span-4" direction="left">
            <div className="relative">
              <div
                className="relative w-full aspect-[3/4] rounded-xl overflow-hidden"
                style={{ border: "2px solid var(--border)" }}
              >
                <img
                  src="/images/casual.jpg"
                  alt="Saif in casual attire"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative backdrop */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-xl -z-10"
                style={{
                  border: "1px solid var(--accent)",
                  opacity: 0.15,
                }}
              />
            </div>
          </RevealOnScroll>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <RevealOnScroll delay={0.1}>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  I&apos;m Saif — an electrical engineer from{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    Jamia Millia Islamia, New Delhi
                  </strong>{" "}
                  (B.Tech EE, CGPA 8.5/10), currently working as an R&D Trainee at{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    Denso International India
                  </strong>{" "}
                  in Manesar. My work spans benchmarking V2X-capable OBC systems, HEV/BEV
                  compliance with AIS-038 standards, and on-site validation at Maruti Suzuki
                  and Toyota.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  I&apos;ve designed a hydrogen PEMFC–hybrid electric bicycle (100–120 km range),
                  modelled industrial-scale green hydrogen facilities (&gt;50 TPD), published a
                  conference paper on DNN-based battery SoC estimation at IEEE IC3ECSBHI-2025,
                  and won the DTU-IIF IdeaThon 2024 with an IoT solar irrigation system. I
                  bring both hardware prototyping and simulation depth.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  My research interests centre on{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    Renewable Energy, E-Mobility, Digital Twins for Hybrid Microgrids,
                    Vehicle-to-X
                  </strong>
                  , and techno-economic analysis of off-grid energy systems — areas where I
                  aim to pursue postgraduate research in Europe.
                </p>
              </RevealOnScroll>
            </div>

            {/* Stats */}
            <RevealOnScroll delay={0.4}>
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 p-6 rounded-xl"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <AnimatedCounter target="8.5" label="CGPA / 10" />
                <AnimatedCounter target="3" label="Industry Internships" />
                <AnimatedCounter target="1" label="IEEE Publication" />
                <AnimatedCounter target="4+" label="Research Projects" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
