import { GraduationCap, MapPin, Calendar, Heart, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "../data";

export default function About() {
  const cards = [
    {
      id: "about-card-education",
      icon: <GraduationCap className="text-indigo-400" size={24} />,
      title: "Education",
      desc: "Cyber Security Internship",
      sub: "Mars Tech Campus (2026)"
    },
    {
      id: "about-card-location",
      icon: <MapPin className="text-purple-400" size={24} />,
      title: "Location",
      desc: "Colombo",
      sub: "Sri Lanka"
    },
    {
      id: "about-card-focus",
      icon: <BookOpen className="text-emerald-400" size={24} />,
      title: "Focus Areas",
      desc: "Software Development",
      sub: "Java • Python • Full-Stack Development"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div id="about-heading-container" className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Introduction
          </motion.p>
          <motion.h2
            id="about-title"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Side: Stats/Cards Grid */}
          <div id="about-cards-container" className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                id={card.id}
                key={card.id}
                className="p-6 rounded-2xl bg-[#0b0f19]/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-center gap-4 text-center sm:text-left lg:text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">{card.title}</h3>
                  <p className="text-base font-semibold text-white mt-1">{card.desc}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Narrative */}
          <div id="about-text-container" className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
                Junior Software Developer based in Sri Lanka
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed">
                {personalInfo.detailedAbout}
              </p>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border border-indigo-500/10 flex items-start gap-4">
                <Heart size={20} className="text-purple-400 shrink-0 mt-1" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  "I enjoy developing secure, efficient, and user-friendly software while continuously expanding my technical knowledge."
                </p>
              </div>
            </motion.div>

            {/* Quick Profile Stats */}
            <motion.div
              id="about-profile-details"
              className="grid grid-cols-2 gap-4 pt-8 mt-8 border-t border-slate-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <span className="text-xs font-mono text-slate-500">TRAINING</span>
                <p className="text-sm font-semibold text-white mt-1">Cyber Security Internship</p>
                <p className="text-xs text-slate-400 mt-0.5">Mars Tech Campus (2026)</p>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500">ORGANIZATION</span>
                <p className="text-sm font-semibold text-white mt-1">Mars Tech Campus</p>
                <p className="text-xs text-slate-400 mt-0.5">Internship Training</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
