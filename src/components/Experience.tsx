import { Briefcase, Calendar, MapPin, Sparkles, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { experienceData } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-1/4 translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div id="experience-heading-container" className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Professional Growth
          </motion.p>
          <motion.h2
            id="experience-title"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience & Training
          </motion.h2>
          <motion.div
            className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12 pl-8 md:pl-12 py-2 space-y-12">
          {experienceData.map((exp, index) => {
            const isTraining = exp.type === "Training";
            
            return (
              <motion.div
                id={`experience-item-${exp.id}`}
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#030712] border-2 border-indigo-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                </div>

                {/* Card Container */}
                <div className="group relative p-8 rounded-2xl bg-[#0b0f19]/40 border border-slate-800 hover:border-slate-700/60 transition-all duration-300 hover:shadow-xl hover:shadow-black/20">
                  {/* Top glowing border accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-all duration-300 shrink-0">
                        {isTraining ? <BookOpen size={22} /> : <Briefcase size={22} />}
                      </div>

                      <div>
                        {/* Role / Title */}
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                          {exp.role}
                        </h3>

                        {/* Company / Hub */}
                        <div className="flex items-center gap-1.5 text-slate-300 font-medium mt-1">
                          <span>{exp.company}</span>
                          {exp.type && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                              <Sparkles size={10} />
                              {exp.type}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col items-start md:items-end gap-1.5 text-xs font-mono shrink-0">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1.5 text-slate-500 mr-2 md:mr-0">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary Overview */}
                  {exp.summary && (
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {exp.summary}
                    </p>
                  )}

                  {/* Bullet description points */}
                  <ul className="space-y-3 border-t border-slate-800/60 pt-4 mt-2">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/60 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
