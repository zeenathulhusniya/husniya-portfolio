import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#020617] border-t border-slate-900 pt-16 pb-8 relative overflow-hidden">
      {/* Visual background line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        {/* Top block */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-between pb-12 border-b border-slate-900">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <a
              id="footer-logo"
              href="#home"
              onClick={(e) => handleScrollTo(e, "#home")}
              className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-1"
            >
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Husniya
              </span>
              <span className="text-indigo-400">.dev</span>
            </a>
            <p className="text-xs font-mono text-slate-500">Junior Software Developer</p>
          </div>

          {/* Quick Links Nav */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <a
                id={`footer-nav-${link.name.toLowerCase()}`}
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              id="footer-social-github"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              id="footer-social-linkedin"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-slate-700 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              id="footer-social-email"
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-slate-700 transition-all"
              aria-label="Email Me"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom block */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left font-mono">
            Copyright © 2026 Zeenathul Husniya. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <motion.button
            id="scroll-to-top-btn"
            onClick={handleScrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-indigo-400 hover:text-indigo-300 transition-all cursor-pointer flex items-center justify-center shadow-lg shadow-black/20"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to Top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
