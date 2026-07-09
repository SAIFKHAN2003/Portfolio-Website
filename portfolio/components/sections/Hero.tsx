"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center grid-pattern overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(45,212,168,0.3) 0%, transparent 70%)",
            top: "10%",
            right: "-10%",
          }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(163,230,53,0.25) 0%, transparent 70%)",
            bottom: "10%",
            left: "-5%",
          }}
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative z-10 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content — 3 cols */}
          <div className="lg:col-span-3">
            {/* Availability tag */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider mb-8"
              style={{
                backgroundColor: "rgba(45, 212, 168, 0.08)",
                border: "1px solid rgba(45, 212, 168, 0.2)",
                color: "var(--accent)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Open to opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Saif Ur Rahman
              <br />
              <span style={{ fontStyle: "italic" }}>Khan</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg leading-relaxed max-w-2xl mb-10"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              R&D Trainee at{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                Denso International India
              </strong>{" "}
              · Electrical Engineer building at the intersection of{" "}
              <strong style={{ color: "var(--text-primary)" }}>e-mobility</strong>,{" "}
              <strong style={{ color: "var(--text-primary)" }}>green hydrogen</strong>,
              and{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                hybrid renewable energy
              </strong>{" "}
              — from PEM fuel cells to industrial-scale electrolyzer systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button href="#projects" variant="primary" icon="arrow">
                View Projects
              </Button>
              <Button
                href="/Saif_Rahman_CV.pdf"
                variant="secondary"
                icon="download"
                download="Saif_Ur_Rahman_Khan_CV.pdf"
              >
                Download CV
              </Button>
            </motion.div>
          </div>

          {/* Photo — 2 cols */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-2xl opacity-20"
                style={{
                  border: "1px solid var(--accent)",
                  transform: "rotate(3deg)",
                }}
              />
              <div
                className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden"
                style={{ border: "2px solid var(--border)" }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Saif Ur Rahman Khan"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--bg) 0%, transparent 40%)",
                    opacity: 0.6,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats ribbon */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t"
          style={{ borderColor: "var(--border)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <AnimatedCounter target="8.5" label="CGPA / 10" />
          <AnimatedCounter target="3" label="Industry Internships" />
          <AnimatedCounter target="1" label="IEEE Publication" />
          <AnimatedCounter target="4+" label="Research Projects" />
        </motion.div>
      </div>
    </section>
  );
}
