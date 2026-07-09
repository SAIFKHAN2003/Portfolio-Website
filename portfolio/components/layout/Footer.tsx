"use client";

import { siteConfig } from "@/data/site";
import { Mail, Linkedin, Github, ArrowUp, Download } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span
            className="text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors duration-300"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.cvFile}
              download="Saif_Ur_Rahman_Khan_CV.pdf"
              className="transition-colors duration-300"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              aria-label="Download CV"
            >
              <Download size={18} />
            </a>
            <a
              href="#hero"
              className="p-2 rounded-full border transition-all duration-300"
              style={{
                color: "var(--text-secondary)",
                borderColor: "var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
