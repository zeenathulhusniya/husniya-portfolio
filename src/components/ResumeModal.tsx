import { X, Printer, FileText, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const content = `ZEENATHUL HUSNIYA - RESUME
Junior Software Developer • Sri Lanka, Colombo • +94759353055 • zeenathul.it@gmail.com • linkedin.com/in/zeenathul-husniya

SUMMARY
Motivated and detail-oriented aspiring Junior Software Developer with a strong foundation in programming, software development, and web technologies. Proficient in Java, Python, JavaScript, HTML5, SQL, Git, and GitHub. Passionate about building efficient and user-friendly software solutions while continuously expanding technical knowledge and problem-solving skills. Seeking an opportunity to contribute to a professional software development team and grow as a software engineer.

EXPERIENCE & TRAINING
1. Cyber Security Internship Training (2026)
   Mars Tech Campus - Colombo, Sri Lanka
   Currently undergoing Cyber Security Internship Training with a focus on cybersecurity fundamentals, network security, ethical hacking concepts, secure software development, and industry best practices while strengthening practical technical skills.

2. Junior Software Developer (Present)
   Professional Development - Colombo, Sri Lanka
   Continuously improving software development skills by building responsive web applications and learning Java, Python, JavaScript, SQL, Git, GitHub, and modern development practices.
   • Developing responsive and user-friendly web applications.
   • Improving problem-solving and programming skills.
   • Learning secure coding principles and software development best practices.
   • Building projects to strengthen practical experience.

CERTIFICATIONS
- Full Stack Development
- Software Development
- Web Development

TECHNICAL SKILLS
- HTML
- Java
- JavaScript
- Python
- SQL

SOFT SKILLS
- Analytical Thinking
- Communication Skills
- Problem Solving
- Team Collaboration
- Time Management`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Zeenathul_Husniya_Resume.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          {/* Global Print-Only Styles to ensure perfect PDF formatting */}
          <style>{`
            @media print {
              /* Hide everything on the page except the print area */
              body * {
                visibility: hidden !important;
              }
              #resume-print-area, #resume-print-area * {
                visibility: visible !important;
              }
              #resume-print-area {
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                width: 100% !important;
                background: white !important;
                color: #0f172a !important;
                padding: 0 !important;
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
              }
              /* Avoid headers and footers from browser */
              @page {
                size: A4;
                margin: 1.5cm;
              }
            }
          `}</style>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900 border border-slate-800 w-full max-w-4xl h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
          >
            {/* Header Controls */}
            <div className="p-4 sm:px-6 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                <FileText className="text-indigo-400" size={22} />
                <div>
                  <h3 className="font-semibold text-white">Zeenathul's Resume</h3>
                  <p className="text-xs text-slate-400">Print or save as PDF to download the formatted version</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-indigo-600/10"
                >
                  <Printer size={16} />
                  <span>Print / Save as PDF</span>
                </button>

                <button
                  onClick={handleDownloadTxt}
                  className="px-4 py-2 text-sm font-medium bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white rounded-lg transition-all flex items-center gap-2 cursor-pointer border border-slate-700"
                >
                  {downloaded ? <CheckCircle2 size={16} className="text-emerald-400" /> : <FileText size={16} />}
                  <span>{downloaded ? "Downloaded TXT" : "Download TXT"}</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable Preview Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/40 flex justify-center">
              {/* White A4 Sheet Preview */}
              <div
                id="resume-print-area"
                className="bg-white text-slate-900 w-full max-w-[210mm] p-8 sm:p-12 md:p-16 rounded-lg shadow-xl border border-slate-200/80 font-sans leading-relaxed text-left flex flex-col justify-between"
                style={{ minHeight: "297mm" }}
              >
                <div>
                  {/* Name and Header Details */}
                  <div className="text-center mb-6">
                    <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 tracking-tight font-display mb-2">
                      Zeenathul Husniya
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
                      <span>Junior Software Developer</span>
                      <span className="text-slate-400">•</span>
                      <span>Sri Lanka, Colombo</span>
                      <span className="text-slate-400">•</span>
                      <span>+94759353055</span>
                      <span className="text-slate-400">•</span>
                      <a href="mailto:zeenathul.it@gmail.com" className="hover:text-indigo-600 underline decoration-indigo-400/30">
                        zeenathul.it@gmail.com
                      </a>
                      <span className="text-slate-400">•</span>
                      <a
                        href="https://linkedin.com/in/zeenathul-husniya"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-indigo-600 underline decoration-indigo-400/30"
                      >
                        linkedin.com/in/zeenathul-husniya
                      </a>
                    </p>
                  </div>

                  {/* Horizontal Bar divider */}
                  <div className="h-[2px] bg-slate-800 w-full mb-6" />

                  {/* Title and Summary Section */}
                  <div className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wide mb-3">
                      Junior Software Developer
                    </h2>
                    <p className="text-sm text-slate-700 text-justify leading-relaxed">
                      Motivated and detail-oriented aspiring Junior Software Developer with a strong foundation in programming,
                      software development, and web technologies. Proficient in Java, Python, JavaScript, HTML5, SQL, Git, and
                      GitHub. Passionate about building efficient and user-friendly software solutions while continuously expanding
                      technical knowledge and problem-solving skills. Seeking an opportunity to contribute to a professional
                      software development team and grow as a software engineer.
                    </p>
                  </div>

                   {/* EXPERIENCE & TRAINING */}
                  <div className="mb-6">
                    <h2 className="text-md font-bold text-indigo-600 uppercase tracking-wider border-b border-slate-300 pb-1 mb-3">
                      EXPERIENCE & TRAINING
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-bold text-slate-900">
                            Cyber Security Internship Trainee
                          </h3>
                          <span className="text-xs font-mono text-slate-500 font-semibold">2026 – Present</span>
                        </div>
                        <p className="text-xs text-slate-600 font-medium">Mars Tech Campus • Colombo, Sri Lanka</p>
                        <p className="text-xs text-slate-700 mt-1">
                          Currently undergoing Cyber Security Internship Training while continuously improving software development and cybersecurity skills through practical learning and hands-on exercises.
                        </p>
                        <ul className="list-disc pl-4 text-xs text-slate-700 mt-1 space-y-0.5">
                          <li>Learning cybersecurity fundamentals and secure software development practices.</li>
                          <li>Strengthening programming skills using Java, Python, JavaScript, and SQL.</li>
                          <li>Building responsive web applications and improving problem-solving abilities.</li>
                          <li>Using Git and GitHub for version control and project management.</li>
                          <li>Continuously learning modern software development technologies and industry best practices.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CERTIFICATIONS */}
                  <div className="mb-6">
                    <h2 className="text-md font-bold text-indigo-600 uppercase tracking-wider border-b border-slate-300 pb-1 mb-3">
                      CERTIFICATIONS
                    </h2>
                    <ul className="list-none text-sm text-slate-800 space-y-1 font-semibold">
                      <li>Full Stack Development</li>
                      <li>Software Development</li>
                      <li>Web Development</li>
                    </ul>
                  </div>

                  {/* SKILLS SECTION */}
                  <div className="mb-6">
                    <h2 className="text-md font-bold text-indigo-600 uppercase tracking-wider border-b border-slate-300 pb-1 mb-4">
                      SKILLS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* TECHNICAL SKILLS */}
                      <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                          TECHNICAL SKILLS
                        </h3>
                        <ul className="text-sm text-slate-800 space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-indigo-500">•</span> HTML
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-indigo-500">•</span> Java
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-indigo-500">•</span> JavaScript
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-indigo-500">•</span> Python
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-indigo-500">•</span> SQL
                          </li>
                        </ul>
                      </div>

                      {/* SOFT SKILLS */}
                      <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                          SOFT SKILLS
                        </h3>
                        <ul className="text-sm text-slate-800 space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-indigo-500">•</span> Analytical Thinking
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-indigo-500">•</span> Communication Skills
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-indigo-500">•</span> Problem Solving
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-indigo-500">•</span> Team Collaboration
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-indigo-500">•</span> Time Management
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optional subtle footer */}
                <div className="text-center text-[10px] text-slate-400 mt-12 shrink-0 print:hidden border-t border-slate-100 pt-4">
                  Zeenathul Husniya • Portfolio Resume Document • Generated via Modern Web Ingress
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
