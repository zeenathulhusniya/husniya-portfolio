import { useState, useEffect, MouseEvent } from "react";
import { 
  Award, 
  FolderOpen, 
  Layers, 
  ExternalLink, 
  CheckCircle, 
  X, 
  ZoomIn, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Calendar, 
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { certificationsData, latestCertificatesData } from "../data";
import { Certification } from "../types";

export default function Certifications() {
  const [isFolderGalleryOpen, setIsFolderGalleryOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeCertIndex, setActiveCertIndex] = useState<number | null>(null);
  const [activeCertList, setActiveCertList] = useState<Certification[]>(latestCertificatesData);

  // Synchronize active index when selectedCert changes
  useEffect(() => {
    if (selectedCert) {
      const idx = activeCertList.findIndex((c) => c.id === selectedCert.id);
      setActiveCertIndex(idx !== -1 ? idx : 0);
    } else {
      setActiveCertIndex(null);
    }
  }, [selectedCert, activeCertList]);

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (isFolderGalleryOpen || selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFolderGalleryOpen, selectedCert]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedCert) {
          setSelectedCert(null);
        } else if (isFolderGalleryOpen) {
          setIsFolderGalleryOpen(false);
        }
      } else if (selectedCert && activeCertIndex !== null && activeCertList.length > 1) {
        if (e.key === "ArrowLeft") {
          const newIdx = (activeCertIndex - 1 + activeCertList.length) % activeCertList.length;
          setActiveCertIndex(newIdx);
          setSelectedCert(activeCertList[newIdx]);
        } else if (e.key === "ArrowRight") {
          const newIdx = (activeCertIndex + 1) % activeCertList.length;
          setActiveCertIndex(newIdx);
          setSelectedCert(activeCertList[newIdx]);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFolderGalleryOpen, selectedCert, activeCertIndex, activeCertList]);

  const openCertModal = (cert: Certification, list: Certification[]) => {
    setActiveCertList(list);
    setSelectedCert(cert);
  };

  const handleNextCert = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeCertIndex !== null && activeCertList.length > 0) {
      const nextIdx = (activeCertIndex + 1) % activeCertList.length;
      setActiveCertIndex(nextIdx);
      setSelectedCert(activeCertList[nextIdx]);
    }
  };

  const handlePrevCert = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeCertIndex !== null && activeCertList.length > 0) {
      const prevIdx = (activeCertIndex - 1 + activeCertList.length) % activeCertList.length;
      setActiveCertIndex(prevIdx);
      setSelectedCert(activeCertList[prevIdx]);
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Decorative Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div id="certifications-heading-container" className="flex flex-col items-center text-center mb-16">
          <motion.p
            className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2 flex items-center gap-1.5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Award size={14} className="text-indigo-400" />
            Continuous Learning
          </motion.p>
          <motion.h2
            id="certifications-title"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Certifications & Courses
          </motion.h2>
          <motion.p
            className="text-slate-400 max-w-2xl text-sm sm:text-base mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Demonstrated commitment to upgrading technical knowledge and adhering to industry-standard engineering practices through verified certifications and global job simulations.
          </motion.p>
          <motion.div
            className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* ========================================================================= */}
        {/* FEATURED: ONE FOLDER / COLLECTION FOR 6 NEW CERTIFICATES                 */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <motion.div
            id="certificate-folder-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setIsFolderGalleryOpen(true)}
            className="group relative cursor-pointer rounded-3xl bg-gradient-to-b from-[#0e1628]/85 via-[#0a0f1d]/90 to-[#070b14] border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 shadow-2xl shadow-blue-950/20 hover:shadow-blue-500/10 overflow-hidden"
          >
            {/* Top Folder Tab Header Graphic */}
            <div className="absolute top-0 left-8 sm:left-12 px-6 py-1.5 rounded-b-xl bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-purple-600/20 border-x border-b border-blue-500/30 backdrop-blur-md flex items-center gap-2 z-20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-300">
                Verified Digital Vault
              </span>
            </div>

            {/* Glowing Accent Top Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-6 sm:p-10 lg:p-12 pt-12 sm:pt-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Folder Details & Action Button */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    {/* Badge Row */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/15 border border-blue-500/30 text-xs font-mono font-bold text-blue-300 shadow-inner">
                        <FolderOpen size={14} className="text-blue-400" />
                        <span>6 Certificates</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-semibold text-emerald-400">
                        <ShieldCheck size={14} />
                        <span>Industry Verified</span>
                      </span>
                    </div>

                    {/* Folder Title */}
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 tracking-tight mb-3">
                      My Latest Certificates
                    </h3>

                    {/* Folder Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      A curated collection of 6 verified software engineering, solutions architecture, venture capital, and cloud technology job simulations completed through Forage.
                    </p>

                    {/* Included Certificates Tag List */}
                    <div className="space-y-2 mb-8">
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles size={12} className="text-blue-400" />
                        Included in this folder:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {latestCertificatesData.map((c) => (
                          <span
                            key={c.id}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors"
                          >
                            {c.title.split("–")[0].trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Certificates Button */}
                  <div>
                    <button
                      id="view-certificates-folder-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFolderGalleryOpen(true);
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-600/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <FolderOpen size={17} />
                      <span>View Certificates (6)</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Right Column: 6-Certificate Preview / Collage Grid */}
                <div className="lg:col-span-7">
                  <div className="relative p-3.5 sm:p-5 rounded-2xl bg-[#070b14]/90 border border-slate-800/90 group-hover:border-blue-500/30 transition-colors duration-500 shadow-inner">
                    {/* Subtle Interior Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-transparent rounded-2xl pointer-events-none" />

                    {/* 6-Certificate Collage Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 relative z-10">
                      {latestCertificatesData.map((cert, idx) => (
                        <div
                          key={cert.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            openCertModal(cert, latestCertificatesData);
                          }}
                          className="group/item relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800/90 hover:border-blue-400/60 transition-all duration-300 aspect-[4/3] shadow-md hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer"
                        >
                          <img
                            src={cert.imageUrl}
                            alt={cert.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/item:scale-105"
                          />
                          
                          {/* Bottom title gradient banner */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80 group-hover/item:opacity-95 transition-opacity flex flex-col justify-end p-2 sm:p-2.5">
                            <p className="text-[10px] sm:text-[11px] font-bold text-white truncate leading-tight">
                              {cert.title.split("–")[0].trim()}
                            </p>
                            <p className="text-[9px] text-blue-300/90 truncate font-mono">
                              {cert.title.includes("–") ? cert.title.split("–")[1].trim() : "Job Simulation"}
                            </p>
                          </div>

                          {/* Index Badge */}
                          <div className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full bg-slate-950/80 border border-slate-700/80 flex items-center justify-center text-[10px] font-mono font-bold text-blue-400 backdrop-blur-sm">
                            {idx + 1}
                          </div>

                          {/* Hover Zoom Icon */}
                          <div className="absolute top-1.5 right-1.5 p-1 rounded-md bg-blue-600/90 text-white opacity-0 group-hover/item:opacity-100 transition-opacity">
                            <ZoomIn size={12} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Collage Footer Caption */}
                    <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 px-1">
                      <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                        <Layers size={13} className="text-blue-400" />
                        Interactive Certificate Folder
                      </span>
                      <span className="text-[11px] text-blue-400 font-medium group-hover:underline flex items-center gap-1">
                        Click to view all 6 <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Sub-heading for Prior Certificates */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
            <Award size={16} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Foundational & Specialized Certifications
            </h3>
            <p className="text-xs text-slate-400">
              Completed engineering courses, web design masteries, and full-stack modules.
            </p>
          </div>
          <div className="h-px bg-slate-800 flex-grow ml-4 hidden sm:block" />
        </div>

        {/* ========================================================================= */}
        {/* EXISTING CERTIFICATES (ALL 4 RETAINED EXACTLY AS BEFORE)                   */}
        {/* ========================================================================= */}
        <div id="certifications-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              id={`certification-card-${cert.id}`}
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl bg-[#090d16]/90 border border-slate-800 hover:border-blue-500/40 hover:bg-[#0b101d] transition-all duration-300 shadow-xl shadow-black/40 overflow-hidden"
            >
              {/* Certificate Image Frame */}
              <div
                id={`certification-image-${cert.id}`}
                onClick={() => openCertModal(cert, certificationsData)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-800 cursor-pointer"
              >
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Status Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-emerald-500/30 text-xs font-mono font-semibold text-emerald-400 backdrop-blur-md">
                    <CheckCircle size={12} />
                    {cert.status}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-medium text-xs shadow-lg shadow-black/40 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn size={14} />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  {/* Issuer & Period */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono text-blue-400 font-semibold flex items-center gap-1.5">
                      <Building2 size={13} />
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-slate-500 flex items-center gap-1">
                      <Calendar size={12} />
                      {cert.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => openCertModal(cert, certificationsData)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <Sparkles size={13} />
                    <span>Preview Certificate</span>
                  </button>

                  <a
                    href={cert.credentialUrl || cert.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODAL / GALLERY: ALL 6 CERTIFICATES IN THE LATEST CERTIFICATES FOLDER     */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isFolderGalleryOpen && (
          <motion.div
            id="certificates-folder-gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setIsFolderGalleryOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
              className="relative w-full max-w-6xl max-h-[90vh] my-auto flex flex-col bg-[#090d16] border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/90 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Topbar */}
              <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-slate-800/90 bg-[#0b0f19]/95 backdrop-blur-md shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <FolderOpen size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        My Latest Certificates
                      </h3>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                        6 Certificates
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 hidden sm:block">
                      Click any certificate to enlarge, zoom, and view full completion details.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFolderGalleryOpen(false)}
                    className="p-2 sm:p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                    title="Close gallery (Esc)"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal 6-Card Gallery Grid */}
              <div className="p-4 sm:p-8 overflow-y-auto flex-grow bg-gradient-to-b from-[#090d16] to-[#060911]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {latestCertificatesData.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      onClick={() => openCertModal(cert, latestCertificatesData)}
                      className="group/card cursor-pointer flex flex-col rounded-2xl bg-[#0d1322]/80 border border-slate-800/90 hover:border-blue-500/40 hover:bg-[#0f172a]/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden"
                    >
                      {/* Certificate Thumbnail Frame */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 border-b border-slate-800/90">
                        <img
                          src={cert.imageUrl}
                          alt={cert.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-medium text-xs shadow-lg shadow-black/40 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                            <ZoomIn size={14} />
                            <span>Enlarge Certificate</span>
                          </div>
                        </div>

                        {/* Top corner badge */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400 bg-slate-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                            <CheckCircle size={10} />
                            Completed
                          </span>
                        </div>
                      </div>

                      {/* Info Body */}
                      <div className="p-5 flex flex-col flex-grow justify-between">
                        <div>
                          {/* Issuer & Period */}
                          <div className="flex items-center justify-between text-xs mb-2.5">
                            <span className="font-mono text-blue-400 flex items-center gap-1 font-semibold truncate max-w-[170px]">
                              <Building2 size={12} className="shrink-0" />
                              {cert.issuer}
                            </span>
                            <span className="font-mono text-slate-500 flex items-center gap-1 shrink-0">
                              <Calendar size={11} />
                              {cert.period}
                            </span>
                          </div>

                          {/* Title */}
                          <h4 className="font-bold text-white text-base group-hover/card:text-blue-300 transition-colors leading-snug line-clamp-2 mb-2.5">
                            {cert.title}
                          </h4>

                          {/* Description */}
                          <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
                            {cert.description}
                          </p>

                          {/* Skills preview tags */}
                          {cert.skills && cert.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-4">
                              {cert.skills.slice(0, 3).map((skill) => (
                                <span
                                  key={skill}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                                >
                                  {skill}
                                </span>
                              ))}
                              {cert.skills.length > 3 && (
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                                  +{cert.skills.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Bottom action bar */}
                        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 group-hover/card:text-blue-400 transition-colors font-medium flex items-center gap-1">
                            Click to expand
                          </span>
                          <div className="p-1.5 rounded-lg bg-slate-900 group-hover/card:bg-blue-600 text-slate-400 group-hover/card:text-white transition-all">
                            <ArrowRight size={13} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-slate-800 bg-[#0b0f19] flex items-center justify-between text-xs text-slate-400 shrink-0">
                <span className="font-mono text-[11px]">
                  All 6 certificates are verified and issued via Forage.
                </span>
                <button
                  onClick={() => setIsFolderGalleryOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* FULLSCREEN LIGHTBOX: ENLARGED CERTIFICATE VIEW FOR ANY SELECTED CERT      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            id="certificate-single-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-lg"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.45 }}
              className="relative w-full max-w-4xl bg-[#090d16] border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Topbar */}
              <div className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-800 bg-[#0b0f19]">
                <div className="flex items-center gap-3 pr-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                      {selectedCert.issuer} • {selectedCert.period}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <a
                    href={selectedCert.credentialUrl || selectedCert.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    title="Open full resolution in a new tab"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    title="Close preview (Esc)"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Image Body with Next/Prev Arrows */}
              <div className="relative p-3 sm:p-6 max-h-[65vh] overflow-y-auto flex items-center justify-center bg-slate-950/80">
                {activeCertList.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevCert}
                      className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700/80 transition-all z-20 backdrop-blur-sm shadow-lg shadow-black/50 cursor-pointer"
                      title="Previous certificate"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={handleNextCert}
                      className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700/80 transition-all z-20 backdrop-blur-sm shadow-lg shadow-black/50 cursor-pointer"
                      title="Next certificate"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Large Certificate Image */}
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[55vh] object-contain rounded-xl border border-slate-800 shadow-2xl"
                />
              </div>

              {/* Modal Details Footer */}
              <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#0b0f19] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-300 leading-relaxed max-w-xl">
                  <p className="font-semibold text-white mb-1">Key Competencies & Practical Tasks:</p>
                  <p className="text-slate-400 mb-2">{selectedCert.description}</p>
                  {selectedCert.skills && (
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCert.skills.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
                  <span className="text-[11px] font-mono px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle size={12} />
                    Verified
                  </span>
                  <a
                    href={selectedCert.credentialUrl || selectedCert.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2.5 rounded-lg shadow-lg shadow-blue-900/20"
                  >
                    <span>Open High-Res</span>
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
