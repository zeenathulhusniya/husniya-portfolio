import { useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowUpRight, ChevronRight, Code2 } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleScrollToSection = (targetId: string) => {
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

  const handleDownloadResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-radial from-slate-950 via-[#030712] to-[#030712]"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy */}
        <div id="hero-left-content" className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          {/* Tagline */}
          <motion.div
            id="hero-greeting"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Hello, I'm
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            id="hero-name"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            id="hero-role"
            className="font-display text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personalInfo.role}
          </motion.h2>

          {/* Description */}
          <motion.p
            id="hero-description"
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            id="hero-actions"
            className="flex flex-wrap gap-4 items-center mb-8"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              id="hero-btn-projects"
              onClick={() => handleScrollToSection("projects")}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all flex items-center gap-2 cursor-pointer group"
            >
              View Projects
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-btn-resume"
              onClick={handleDownloadResume}
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800/80 hover:border-slate-700 text-white font-medium transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download size={16} />
              Download Resume
            </button>

            <button
              id="hero-btn-contact"
              onClick={() => handleScrollToSection("contact")}
              className="px-6 py-3.5 rounded-xl bg-transparent border border-indigo-500/30 hover:border-indigo-500/60 hover:bg-indigo-500/5 text-indigo-400 hover:text-indigo-300 font-medium transition-all flex items-center gap-2 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            id="hero-socials"
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-sm font-mono text-slate-500 tracking-wider">CONNECT:</span>
            <div className="flex gap-3">
              <a
                id="hero-social-github"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800/80 transition-all shadow-md"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                id="hero-social-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-slate-700 hover:bg-slate-800/80 transition-all shadow-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                id="hero-social-email"
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-slate-700 hover:bg-slate-800/80 transition-all shadow-md"
                aria-label="Email Me"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Professional Image */}
        <div id="hero-right-content" className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            id="hero-image-wrapper"
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Ambient background glows */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-2xl -z-10 scale-105 animate-pulse" />

            {/* Circular image container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-600 shadow-2xl shadow-indigo-500/10 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-full bg-[#030712] overflow-hidden flex items-center justify-center relative">
                <img
                  id="hero-profile-avatar"
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover select-none scale-[1.05]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
            </div>

            {/* Interactive floating badges */}
            <motion.div
              id="hero-floating-badge-1"
              className="absolute -bottom-2 -left-4 bg-slate-900/90 border border-slate-800 backdrop-blur-md py-2.5 px-4 rounded-xl flex items-center gap-2 shadow-lg shadow-black/40"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-ping absolute -top-1 -right-1" />
              <div className="w-3 h-3 rounded-full bg-green-500 absolute -top-1 -right-1" />
              <span className="text-xs font-mono font-bold text-slate-500">STATUS:</span>
              <span className="text-xs font-semibold text-white">Open to Work</span>
            </motion.div>

            <motion.div
              id="hero-floating-badge-2"
              className="absolute -top-6 -right-6 bg-slate-950/80 backdrop-blur-md border border-purple-500/30 rounded-xl p-3 flex flex-col items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:border-purple-400/50"
              initial={{ y: -20, opacity: 0 }}
              animate={{ 
                y: [0, -6, 0],
                opacity: 1,
              }}
              transition={{ 
                y: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                },
                opacity: {
                  delay: 0.7,
                  duration: 0.5,
                }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-purple-500/10 p-1.5 rounded-lg border border-purple-500/20 flex items-center justify-center">
                <Code2 className="text-white" size={18} />
              </div>
              <span className="text-[10px] font-bold tracking-wider text-purple-200 uppercase font-sans">
                Software Developer
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
