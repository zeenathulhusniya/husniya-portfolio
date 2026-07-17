import { useState } from "react";
import { Github, ExternalLink, Code, Layers, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = ["All", "Java", "Python", "JavaScript / React"];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Java") return project.technologies.includes("Java");
    if (filter === "Python") return project.technologies.includes("Python");
    if (filter === "JavaScript / React") {
      return (
        project.technologies.includes("JavaScript") ||
        project.technologies.includes("React")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Glow effect */}
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div id="projects-heading-container" className="flex flex-col items-center text-center mb-12">
          <motion.p
            className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            PROJECT PORTFOLIO
          </motion.p>
          <motion.h2
            id="projects-title"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          {/* Filtering Buttons */}
          <div id="project-filters" className="flex flex-wrap justify-center items-center gap-2 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 max-w-lg mx-auto mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group flex flex-col justify-between bg-[#0b0f19]/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 opacity-60" />
                  <img
                    id={`project-image-${project.id}`}
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Technology Overlay on Top Corner */}
                  <div className="absolute top-4 right-4 z-20 flex gap-1.5">
                    {project.isNew && (
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse">
                        New
                      </span>
                    )}
                    {project.status ? (
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${
                        project.status === "Live" || project.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : project.status === "Coming Soon"
                          ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                          : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                      }`}>
                        {project.status}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-indigo-400">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                  {/* Category */}
                  {project.category && (
                    <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-400 uppercase mb-1.5 block">
                      {project.category}
                    </span>
                  )}
                  {/* Title & Badge */}
                  <h3 id={`project-title-${project.id}`} className="font-display text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Tech stack row */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Expandable Key Features & Learning Outcomes */}
                  {Boolean(project.features || project.learningOutcomes) && (
                    <div className="mb-6 border-t border-slate-800/40 pt-4">
                      <button
                        onClick={() => setExpandedProjectId(expandedProjectId === project.id ? null : project.id)}
                        className="flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none cursor-pointer"
                      >
                        {expandedProjectId === project.id ? (
                          <>
                            <ChevronUp size={14} className="shrink-0 text-indigo-400" />
                            <span>Hide Architectural Details</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown size={14} className="shrink-0 text-indigo-400" />
                            <span>View Architectural Details</span>
                          </>
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {expandedProjectId === project.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 space-y-4 text-xs">
                              {project.features && (
                                <div>
                                  <h4 className="font-semibold text-slate-200 mb-1.5 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                    Key Features
                                  </h4>
                                  <ul className="list-none pl-2.5 space-y-1.5 text-slate-400 leading-relaxed">
                                    {project.features.map((feat, fIdx) => (
                                      <li key={fIdx} className="flex items-start gap-1.5">
                                        <span className="text-indigo-500/80 mt-0.5">•</span>
                                        <span>{feat}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {project.learningOutcomes && (
                                <div>
                                  <h4 className="font-semibold text-slate-200 mb-1.5 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                                    Learning Outcomes
                                  </h4>
                                  <ul className="list-none pl-2.5 space-y-1.5 text-slate-400 leading-relaxed">
                                    {project.learningOutcomes.map((out, oIdx) => (
                                      <li key={oIdx} className="flex items-start gap-1.5">
                                        <span className="text-purple-500/80 mt-0.5">•</span>
                                        <span>{out}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Buttons/Links Row */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60 mt-auto">
                    <a
                      id={`project-github-link-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-sm font-medium text-white transition-all hover:border-slate-700"
                    >
                      <Github size={16} />
                      {project.githubLabel || "Code"}
                    </a>

                    {project.liveUrl ? (
                      <a
                        id={`project-live-link-${project.id}`}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-sm font-medium text-white shadow-lg shadow-indigo-500/10 transition-all cursor-pointer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span
                        id={`project-live-disabled-${project.id}`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/40 border border-slate-900/60 text-sm font-medium text-slate-600 select-none"
                        title="Desktop/Server Application"
                      >
                        Local Build
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
