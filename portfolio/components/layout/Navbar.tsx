"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex flex-col justify-center",
          scrolled
            ? "border-b backdrop-blur-xl"
            : "border-b border-transparent"
        )}
        style={{
          height: "clamp(64px, 5vw, 72px)",
          backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 85%, transparent)" : "transparent",
          borderColor: scrolled ? "var(--border)" : "transparent",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            style={{ 
              color: "var(--text-primary)",
              fontSize: "clamp(1.5rem, 1.4rem + 0.4vw, 1.875rem)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em"
            }}
          >
            Saif<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative inline-flex items-center h-[44px] text-[14px] lg:text-[15px] font-[500] tracking-[0.01em] transition-colors duration-300"
                style={{ 
                  color: hoveredLink === link.href ? "var(--text-primary)" : "var(--text-secondary)",
                  lineHeight: 1
                }}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
                {hoveredLink === link.href && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute bottom-[8px] left-0 right-0 h-[2px] rounded-full"
                    style={{ backgroundColor: "var(--text-primary)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300"
              style={{
                color: "var(--text-primary)",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--surface-alt)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--surface)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300"
              style={{
                color: "var(--text-primary)",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2"
              style={{ color: "var(--text-primary)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
        style={{ backgroundColor: "var(--bg)" }}
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-2xl font-[500] tracking-wide"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={
                mobileOpen
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.4,
                delay: mobileOpen ? i * 0.05 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
