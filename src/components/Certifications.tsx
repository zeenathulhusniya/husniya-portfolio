import { useState, useEffect } from "react";
import { Award, Calendar, BookOpen, ExternalLink, CheckCircle, X, ZoomIn, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { certificationsData } from "../data";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certificationsData[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div id="certifications-heading-container" className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold uppercase tracking-widest text-blue-400 mb-3"
          >
            <Award size={14} />
            Certifications
          </motion.div>
          <motion.h2
            id="certifications-title"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Certifications & Continuous Learning
          </motion.h2>
          <motion.p
            className="text-slate-400 max-w-xl text-sm sm:text-base mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Demonstrated commitment to upgrading technical knowledge and adhering to industry-standard engineering practices.
          </motion.p>
          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Certificate Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {certificationsData.map((cert, index) => {
            return (
              <motion.div
                id={`cert-item-${cert.id}`}
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col h-full rounded-2xl bg-[#0b0f19]/40 border border-slate-800/80 hover:border-blue-500/30 hover:bg-[#0c1222]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden"
              >
                {/* Accent Top Border glow */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                {/* Certificate Image Frame */}
                {cert.imageUrl && (
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-800/80 cursor-pointer group-hover:border-slate-700/50"
                  >
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* View overlay */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-blue-600/90 text-white font-medium text-sm transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-black/30">
                        <ZoomIn size={16} />
                        Enlarge Certificate
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Info Area */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Header meta */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="text-xs font-mono text-blue-400 flex items-center gap-1.5 font-semibold bg-blue-500/5 px-2.5 py-1 rounded border border-blue-500/10">
                        <BookOpen size={12} className="shrink-0" />
                        {cert.issuer}
                      </span>
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                        <Calendar size={12} className="shrink-0" />
                        {cert.period}
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 leading-snug">
                      {cert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm mt-3.5 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer controls */}
                  <div className="mt-8 pt-5 border-t border-slate-800/60 flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                      <CheckCircle size={12} />
                      Completed
                    </span>
                    
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 px-4.5 py-2.5 rounded-lg hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-blue-900/15"
                    >
                      <span>View Certificate</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.45 }}
              className="relative w-full max-w-4xl bg-[#090d16] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/80"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Topbar */}
              <div className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-800 bg-[#0b0f19]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-none">
                      {selectedCert.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.credentialUrl || selectedCert.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    title="Open in a new tab"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    title="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Image Body */}
              <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto flex items-center justify-center bg-slate-950/60">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[60vh] object-contain rounded-lg border border-slate-800 shadow-md"
                />
              </div>

              {/* Modal Details Footer */}
              <div className="p-5 sm:px-6 border-t border-slate-800 bg-[#0b0f19] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400 leading-relaxed max-w-xl">
                  {selectedCert.description}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    Issued: {selectedCert.period}
                  </span>
                  <a
                    href={selectedCert.credentialUrl || selectedCert.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-lg"
                  >
                    <span>Open Original</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
