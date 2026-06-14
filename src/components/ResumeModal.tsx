import { motion } from 'motion/react';
import { X, Mail, MapPin, GraduationCap, Calendar, Phone, Award, Download, Printer, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:p-0 print:absolute print:inset-0" id="resume-modal-portal">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-xs print:hidden"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-white rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl relative z-10 max-h-[92vh] flex flex-col print:shadow-none print:rounded-none print:w-full print:max-w-none print:max-h-none print:static"
      >
        {/* Printable Control Bar (Hidden on Print) */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center flex-shrink-0 print:hidden">
          <div className="flex items-center space-x-2 text-slate-800">
            <span className="p-1 rounded bg-blue-100 text-blue-600">
              <GraduationCap className="w-4 h-4" />
            </span>
            <span className="font-display font-bold text-sm tracking-tight text-slate-700">Wai Yan Htet Curriculum Vitae</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-100 transition-colors text-xs font-semibold cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Draft</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-slate-150 text-slate-650 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Dismiss resume portal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document */}
        <div className="p-8 sm:p-10 overflow-y-auto flex-grow font-sans text-slate-800 print:overflow-visible print:p-0 print:text-black">
          
          <div className="max-w-3xl mx-auto space-y-8" id="printable-resume-body">
            
            {/* CV HEADER */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b pb-6 border-slate-150">
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-none print:text-black">
                  Wai Yan Htet
                </h1>
                <p className="text-blue-500 font-sans font-medium text-lg mt-1.5 print:text-blue-700">
                  Software Developer & Systems Engineer
                </p>
                <p className="text-xs text-slate-500 font-sans mt-1">
                  Specializing in Software Engineering • UCSY Graduate
                </p>
              </div>

              {/* Coordinates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-500 font-sans font-light">
                <span className="flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href="mailto:waiyanxtet04@gmail.com" className="hover:underline">waiyanxtet04@gmail.com</a>
                </span>
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Yangon, Myanmar</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="font-bold text-slate-400 font-mono">GH</span>
                  <a href="https://github.com/waiyanhtet" className="hover:underline" target="_blank" rel="noreferrer">github.com/waiyanhtet</a>
                </span>
                <span className="flex items-center space-x-1.5">
                  <span className="font-bold text-blue-400 font-mono">IN</span>
                  <a href="https://linkedin.com/in/waiyanhtet" className="hover:underline" target="_blank" rel="noreferrer">linkedin.com/in/waiyanhtet</a>
                </span>
              </div>
            </div>

            {/* PROFILE STATEMENT */}
            <div className="space-y-2">
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-400 border-b pb-1">Professional Profile</h2>
              <p className="text-sm font-normal leading-relaxed text-slate-650">
                Pristine-focused software engineer and graduate holding a deep specialization in design patterns, data schemes, and React modular frontend ecosystems. Recognized for lead-coordinating academic team portals and deploying robust, local persistent utilities. Eager to bring optimal software craftsmanship to active web teams worldwide.
              </p>
            </div>

            {/* EDUCATION */}
            <div className="space-y-4">
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-400 border-b pb-1">Education</h2>
              
              <div className="flex justify-between items-start text-sm">
                <div>
                  <h3 className="font-bold text-slate-800">Bachelor of Computer Science (Software Engineering)</h3>
                  <p className="text-blue-500 text-xs">University of Computer Studies, Yangon (UCSY)</p>
                  <ul className="list-disc pl-4 mt-2 text-xs text-slate-600 space-y-1 font-light">
                    <li>Maintained excellent academic results across 5 standard years of deep study.</li>
                    <li>Extensive focus on Algorithms, MVC patterns, testing metrics, and SQL implementations.</li>
                    <li>Awarded "Honorable Distinction" for final year capstone layout presentation.</li>
                  </ul>
                </div>
                <div className="text-right text-xs text-slate-400 whitespace-nowrap">
                  <span>2021 — 2026</span>
                </div>
              </div>
            </div>

            {/* EXPERIENCE & PROJECT HISTORY */}
            <div className="space-y-5">
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-400 border-b pb-1">Work & Leadership Highlights</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-start text-sm">
                  <div>
                    <h3 className="font-bold text-slate-800">Capstone Project Team Lead</h3>
                    <p className="text-slate-500 text-xs text-slate-400">UCSY Peer Portal initiative • Yangon, MM</p>
                    <p className="text-xs text-slate-600 mt-1.5 font-light">
                      Led 5 fellow cohort members to develop a multi-layered resource directory. Drafted relational tables, coded reactive dashboards, and optimized search query indexes reducing page load speed down to 110ms.
                    </p>
                  </div>
                  <div className="text-right text-xs text-slate-400 whitespace-nowrap">
                    <span>2025 — 2026</span>
                  </div>
                </div>

                <div className="flex justify-between items-start text-sm">
                  <div>
                    <h3 className="font-bold text-slate-800">Software Intern Developer</h3>
                    <p className="text-slate-500 text-xs text-slate-400">ByteWave Web Engineering • Intern Contract</p>
                    <p className="text-xs text-slate-600 mt-1.5 font-light">
                      Cooperated in daily standup reviews. Coded over 15 reusable web elements, modified state synchronization parameters, and resolved 22 key rendering bugs recorded in Jira tracking indices.
                    </p>
                  </div>
                  <div className="text-right text-xs text-slate-400 whitespace-nowrap">
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CORE TECHNICAL MATRIX */}
            <div className="space-y-3">
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-400 border-b pb-1">Technical Matrix</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-slate-650">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 print:bg-white print:border-none print:p-0">
                  <span className="font-bold text-slate-800 block mb-1">Development Frameworks:</span>
                  <span>React, HTML5, CSS3, ES6 JavaScript, TypeScript, Next.js, Express, REST APIs</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 print:bg-white print:border-none print:p-0">
                  <span className="font-bold text-slate-800 block mb-1">Systems & Toolchains:</span>
                  <span>Git, GitHub version controls, Node.js, Web Workers, Vite builder, Tailwind styling, Figma</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 print:bg-white print:border-none print:p-0">
                  <span className="font-bold text-slate-800 block mb-1">Database Environments:</span>
                  <span>PostgreSQL (relational query designs), MongoDB (document schemas), LocalStorage proxies</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 print:bg-white print:border-none print:p-0">
                  <span className="font-bold text-slate-800 block mb-1">Architectural Methodologies:</span>
                  <span>Agile/Scrum engineering, Test-Driven layouts, SEO parameters, clean documentation rules</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}
