import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "motion/react";
import { educationData } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div id="education-heading-container" className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Academic Journey
          </motion.p>
          <motion.h2
            id="education-title"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Education Timeline
          </motion.h2>
          <motion.div
            className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12 pl-8 md:pl-12 py-2 space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              id={`education-item-${index}`}
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#030712] border-2 border-indigo-500 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
              </div>

              {/* Education Card */}
              <div className="p-8 rounded-2xl bg-[#0b0f19]/40 border border-slate-800 hover:border-slate-700/60 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-slate-300 font-medium mt-1">{item.institution}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-1.5 text-xs font-mono shrink-0">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1.5 text-slate-500 mr-2 md:mr-0">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                {item.description && (
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed border-t border-slate-800/60 pt-4 mt-2">
                    {item.description}
                  </p>
                )}

                {item.points && item.points.length > 0 && (
                  <ul className="space-y-3 border-t border-slate-800/60 pt-4 mt-4">
                    {item.points.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/60 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Additional Decorative Badges / Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-2">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/5 text-indigo-400 border border-indigo-500/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
