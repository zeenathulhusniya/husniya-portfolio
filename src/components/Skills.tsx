import { motion } from "motion/react";
import { skillsData } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div id="skills-heading-container" className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Capabilities
          </motion.p>
          <motion.h2
            id="skills-title"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Skills
          </motion.h2>
          <motion.div
            className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((categoryObj, catIdx) => (
            <motion.div
              id={`skills-category-${catIdx}`}
              key={categoryObj.category}
              className="p-8 rounded-2xl bg-[#0b0f19]/40 border border-slate-800 hover:border-slate-700 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center justify-between">
                <span>{categoryObj.category}</span>
                <span className="text-xs font-mono text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded bg-indigo-500/5">
                  Category {catIdx + 1}
                </span>
              </h3>

              <div className="space-y-6">
                {categoryObj.list.map((skill, skillIdx) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="font-mono text-xs text-slate-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800/50">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIdx * 0.1 + catIdx * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
