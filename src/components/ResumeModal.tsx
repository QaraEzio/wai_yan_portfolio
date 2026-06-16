import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Mail, MapPin, GraduationCap, Phone, Download, Printer, Eye, FileText, Globe, ExternalLink, Award } from 'lucide-react';
// @ts-ignore: Allow importing image asset without a dedicated module declaration
import profileImagePath from '../assets/images/profile.jpg';
 //@ts-ignore: Allow importing image asset without a dedicated module declaration
import resumeImagePath from '../assets/images/Wai Yan Htet Resume.jpg';
interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<'image' | 'interactive'>('image');
  // const resumeImagePath = '/src/assets/images/Wai Yan Htet Resume.jpg';

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
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs print:hidden z-0"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 12 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-white rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl relative z-10 max-h-[92vh] flex flex-col print:shadow-none print:rounded-none print:w-full print:max-w-none print:max-h-none print:static"
        id="resume-modal-container"
      >
        {/* Printable Control Bar (Hidden on Print) */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 flex-shrink-0 print:hidden">
          
          {/* Header Title with Subtitle */}
          <div className="flex items-center space-x-3 text-slate-800 self-start sm:self-center">
            <span className="p-2 rounded-xl bg-blue-50 text-blue-500 shadow-3xs">
              <GraduationCap className="w-5 h-5 animate-pulse" />
            </span>
            <div>
              <span className="font-display font-bold text-sm tracking-tight text-slate-800 block">Wai Yan Htet Curriculum Vitae</span>
              <span className="text-[10px] text-slate-400 font-mono">Specialized Software Engineer • UCSY</span>
            </div>
          </div>

          {/* Interactive tab switches row */}
          <div className="flex items-center bg-slate-150 p-1.5 rounded-2xl gap-1">
            <button
              onClick={() => setActiveTab('image')}
              className={`flex items-center space-x-2 px-4 py-1.5 rounded-xl transition-all text-xs font-semibold cursor-pointer ${
                activeTab === 'image'
                  ? 'bg-white text-blue-500 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              id="resume-tab-image"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Document Image</span>
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`flex items-center space-x-2 px-4 py-1.5 rounded-xl transition-all text-xs font-semibold cursor-pointer ${
                activeTab === 'interactive'
                  ? 'bg-white text-blue-500 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              id="resume-tab-interactive"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Interactive HTML</span>
            </button>
          </div>

          {/* Action buttons list */}
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            {activeTab === 'image' ? (
              <a
                href={resumeImagePath}
                download="Wai_Yan_Htet_Resume.jpg"
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-400 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
                style={{ backgroundColor: '#74b3e2' }}
                id="resume-direct-download-btn"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Image</span>
              </a>
            ) : (
              <button
                onClick={handlePrint}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-100 transition-colors text-xs font-semibold cursor-pointer"
                id="resume-direct-print-btn"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Draft</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 bg-slate-150 text-slate-650 hover:bg-slate-200 rounded-xl transition-all cursor-pointer"
              aria-label="Dismiss resume portal"
              id="close-resume-modal-btn"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Scrollable CV Document View */}
        <div className="overflow-y-auto flex-grow font-sans text-slate-800 print:overflow-visible print:p-0 print:text-black bg-slate-50">
          
          {/* TAB 1: ACTUAL DOCUMENT IMAGE PREVIEW WITH SCROLLABLE EMBEDDED LIGHTBOX */}
          {activeTab === 'image' && (
            <div className="p-6 flex flex-col items-center justify-center space-y-6 print:hidden" id="resume-image-viewer">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 max-w-xl group bg-white">
                <img
                  src={resumeImagePath}
                  alt="Wai Yan Htet Professional CV"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain max-h-[70vh] pointer-events-none"
                />
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white pointer-events-none">
                  <span className="bg-slate-950/85 backdrop-blur-xs px-4 py-2 rounded-xl text-xs font-semibold tracking-wide flex items-center space-x-1.5 shadow-md">
                    <Eye className="w-4 h-4 text-blue-300" />
                    <span>Exact CV Design</span>
                  </span>
                </div>
              </div>
              <div className="text-center space-y-1.5 max-w-sm">
                <p className="text-xs font-semibold text-slate-600 font-sans">Wai Yan Htet — Junior Software Developer CV</p>
                <p className="text-[11px] text-slate-400 font-light">
                  Click the blue button above to save the high fidelity image copy directly to your device.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PRISTINE INTERACTIVE PIXEL-PERFECT REPLICA WITH CLICKABLE LINK STREAMS */}
          {(activeTab === 'interactive' || typeof window === 'undefined') && (
            <div className="p-8 sm:p-12 print:p-0 bg-white" id="resume-interactive-body">
              <div className="max-w-3xl mx-auto border sm:border-slate-150 rounded-3xl overflow-hidden shadow-xs print:border-none print:shadow-none print:rounded-none">
                
                {/* 1. Header Profile segment */}
                <div className="bg-white p-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 border-b border-slate-100">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-white shadow-md relative ring-4 ring-slate-100 bg-slate-50 flex-shrink-0">
                    <img
                      src={profileImagePath}
                      alt="Wai Yan Htet Avatar"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
                      WAI YAN HTET
                    </h2>
                    <p className="text-blue-500 font-sans font-semibold tracking-widest text-xs sm:text-sm uppercase mt-2.5">
                      Junior Software Developer
                    </p>
                    <p className="text-xs text-slate-400 mt-1 font-light">
                      Bachelor of Computer Science Specializing in Software Engineering • UCSY
                    </p>
                  </div>
                </div>

                {/* 2. Horizontal capsule bar of contacts */}
                <div className="bg-slate-900 text-slate-200 py-3.5 px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs justify-items-center sm:justify-items-start border-y border-slate-850">
                  <span className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <a href="tel:09755565487" className="hover:underline">09755565487</a>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <a href="mailto:waiyanxtet04@gmail.com" className="hover:underline">waiyanxtet04@gmail.com</a>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    <a href="https://wai-yan-portfolio-rho.vercel.app" target="_blank" rel="noreferrer" className="hover:underline">wai-yan-portfolio-rho.vercel.app</a>
                  </span>
                  <span className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Shwe Pyi Thar, Yangon</span>
                  </span>
                </div>

                {/* 3. Split sections: Sidebar (Dark Slate) & Main Column (White) */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Left Column Component (Dark Panel) */}
                  <div className="md:col-span-5 bg-slate-805 text-white p-6 sm:p-8 space-y-8" style={{ backgroundColor: '#2c3246' }}>
                    
                    {/* Education */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-extrabold uppercase border-b border-white/10 pb-1.5 tracking-wider text-slate-300">Education</h4>
                      
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <h5 className="font-bold text-xs text-white">University of Computer Studies Yangon (UCSY)</h5>
                          <p className="text-[11px] text-blue-300 font-medium">B.C.Sc (Software Engineering)</p>
                          <p className="text-[10px] text-slate-400 font-mono">2022 — 2027</p>
                          <p className="text-[11px] text-slate-300 pt-0.5">GPA: 3.92 / 4.00</p>
                        </div>
                        
                        <div className="space-y-1 pt-1">
                          <h5 className="font-bold text-xs text-white">B.E.H.S (Ngathainggyaung)</h5>
                          <p className="text-[11px] text-slate-400">Passed Matriculation in 2020</p>
                          <p className="text-[10px] text-slate-400 font-mono">2019 — 2020</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-extrabold uppercase border-b border-white/10 pb-1.5 tracking-wider text-slate-300">Skills</h4>
                      <ul className="text-xs text-slate-300 space-y-1.5 font-light list-disc pl-3.5">
                        <li>Flutter</li>
                        <li>React, HTML, CSS, Tailwind</li>
                        <li>Python, Django</li>
                        <li>Java Spring Boot, REST API</li>
                        <li>Data Analysis</li>
                        <li>Machine Learning</li>
                      </ul>
                    </div>

                    {/* Focus on */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-extrabold uppercase border-b border-white/10 pb-1.5 tracking-wider text-slate-300">Focus on</h4>
                      <ul className="text-xs text-slate-300 space-y-1.5 font-light list-disc pl-3.5">
                        <li>Web Development</li>
                        <li>Backend Development</li>
                        <li>Database Management</li>
                      </ul>
                    </div>

                    {/* Language */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-extrabold uppercase border-b border-white/10 pb-1.5 tracking-wider text-slate-300">Language</h4>
                      <ul className="text-xs text-slate-300 space-y-1.5 font-light list-disc pl-3.5">
                        <li>English (Upper Intermediate)</li>
                        <li>Japanese (N4)</li>
                      </ul>
                    </div>

                  </div>

                  {/* Right Column Component (White Panel) */}
                  <div className="md:col-span-7 bg-white p-6 sm:p-8 space-y-6">
                    
                    {/* About me */}
                    <div className="space-y-2.5">
                      <h3 className="text-sm font-extrabold uppercase border-b border-slate-100 pb-1 text-slate-800 tracking-wider">About me</h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        I am a software Engineering student specializing database management, mobile development, backend development and React web development. Skilled in developing responsive, high-performance applications with a strong foundation in software engineering principles, problem-solving, and modern development tools. I am also expanding my knowledge of backend development by learning Java Spring Boot and modern software development practices.
                      </p>
                    </div>

                    {/* Experience */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-end border-b border-slate-100 pb-1">
                        <h3 className="text-sm font-extrabold uppercase text-slate-800 tracking-wider">Experience</h3>
                        <span className="text-[10px] text-slate-400 font-mono">2023 — 2026</span>
                      </div>

                      <div className="space-y-4">
                        <div className="text-xs font-bold text-blue-500 uppercase tracking-wide">Academic Projects</div>

                        {/* Project 1 */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-slate-850">Informational Assistance Website</span>
                            <span className="text-[10px] text-slate-400 font-mono">2023</span>
                          </div>
                          <p className="text-[11px] text-slate-600 font-light leading-relaxed">
                            Developed an educational web platform to help third-semester students access lecture materials, tutorial videos, and software tools in one centralized location. Built the application using HTML, CSS, Java Servlets, providing an organized and supportive learning environment for students.
                          </p>
                          <a href="https://jolly-bienenstitch-9279c8.netlify.app" target="_blank" rel="noreferrer" className="text-[10px] text-blue-500 font-medium hover:underline flex items-center space-x-0.5 pt-0.5">
                            <span>Live Demo</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>

                        {/* Project 2 */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-slate-850">Online Voting Management System</span>
                            <span className="text-[10px] text-slate-400 font-mono">2024</span>
                          </div>
                          <p className="text-[11px] text-slate-600 font-light leading-relaxed">
                            Developed a web platform that provides students with easy access to learning resources. Implemented database integration and backend functionality using Java Servlets while designing a responsive user interface with Tailwind CSS.
                          </p>
                        </div>

                        {/* Project 3 */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-slate-850">Green Stack</span>
                            <span className="text-[10px] text-slate-400 font-mono">Hackathon (2026)</span>
                          </div>
                          <p className="text-[11px] text-slate-600 font-light leading-relaxed">
                            Developed a responsive website to empower Myanmar farmers with digital tools and agricultural resources. Designed an intuitive user interface to promote sustainable farming practices and improve access to information.
                          </p>
                          <a href="https://green-stack-frontend.vercel.app" target="_blank" rel="noreferrer" className="text-[10px] text-blue-500 font-medium hover:underline flex items-center space-x-0.5 pt-0.5">
                            <span>Live Demo</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Reference */}
                    <div className="space-y-2.5 pt-2">
                      <h3 className="text-sm font-extrabold uppercase border-b border-slate-100 pb-1 text-slate-800 tracking-wider">Reference</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed text-slate-600 font-light">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-800">Github:</span>
                          <a href="https://github.com/QaraEzio" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">github.com/QaraEzio</a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-800">LinkedIn:</span>
                          <a href="https://linkedin.com/in/wai-yan-htet-571402276" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/wai-yan-htet-571402276</a>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
}
