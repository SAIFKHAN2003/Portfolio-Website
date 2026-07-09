"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { siteConfig } from "@/data/site";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" style={{ backgroundColor: "var(--surface-alt)" }}>
      <div className="container">
        <SectionHeader label="Contact" title="Let's connect" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Info */}
          <RevealOnScroll direction="left">
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m actively exploring opportunities across India for Full-time,
              Part-time, and Internship roles in Renewable Energy and E-Mobility.
              Open to research collaborations, academic advising, or engineering
              conversations.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Mail size={18} />,
                  label: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  icon: <Phone size={18} />,
                  label: siteConfig.phone,
                  href: `tel:${siteConfig.phone}`,
                },
                {
                  icon: <Linkedin size={18} />,
                  label: "linkedin.com/in/saif-ur-rahman-khan",
                  href: siteConfig.social.linkedin,
                  external: true,
                },
                {
                  icon: <Github size={18} />,
                  label: "github.com/SaifKhan1748",
                  href: siteConfig.social.github,
                  external: true,
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group"
                  style={{
                    color: "var(--text-secondary)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--surface)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </RevealOnScroll>

          {/* Form */}
          <RevealOnScroll direction="right">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-xl space-y-5"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div>
                <label
                  htmlFor="contactName"
                  className="block text-xs font-mono uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300"
                  style={{
                    backgroundColor: "var(--surface-alt)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-xs font-mono uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300"
                  style={{
                    backgroundColor: "var(--surface-alt)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="contactMessage"
                  className="block text-xs font-mono uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Message
                </label>
                <textarea
                  id="contactMessage"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 resize-y"
                  style={{
                    backgroundColor: "var(--surface-alt)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--bg)",
                }}
              >
                <Send size={16} />
                Send Message
              </button>

              {submitted && (
                <div
                  className="text-sm text-center p-3 rounded-lg"
                  style={{
                    backgroundColor: "rgba(45, 212, 168, 0.1)",
                    color: "var(--accent)",
                    border: "1px solid rgba(45, 212, 168, 0.2)",
                  }}
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
