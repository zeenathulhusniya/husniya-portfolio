import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
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
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="navbar-container"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-md border-b border-gray-800/60 py-4 shadow-lg shadow-black/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white group"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <Code2 size={20} />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-purple-500 transition-all">
            Husniya
          </span>
          <span className="text-indigo-400 font-semibold font-display text-xl">.dev</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div id="desktop-nav-menu" className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <motion.a
                id={`desktop-nav-link-${link.name.toLowerCase()}`}
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-full ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {isActive && (
                  <motion.span
                    id={`active-indicator-${link.name.toLowerCase()}`}
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </motion.a>
            );
          })}
        </div>

        {/* Hamburger Mobile Toggle */}
        <div className="md:hidden">
          <motion.button
            id="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            className="absolute top-full left-0 right-0 bg-[#030712] border-b border-gray-800/80 shadow-2xl py-6 px-6 md:hidden z-50 flex flex-col gap-3"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`flex items-center px-4 py-3 rounded-xl font-medium text-base transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/10 border-l-4 border-indigo-500 text-white font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
