import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, Code, Sparkles, X, Terminal, CheckCircle } from 'lucide-react';
import { Project } from '../types';
// @ts-ignore: Allow importing image asset without a dedicated module declaration

import pjimage_1 from '../assets/images/greenstack.png';
// @ts-ignore: Allow importing image asset without a dedicated module declaration
import pjimage_2 from '../assets/images/info_ass.png';
// @ts-ignore: Allow importing image asset without a dedicated module declaration
import pjimage_3 from '../assets/images/expense.png';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Web App' | 'Mobile App' | 'API' | 'Tool'>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories: ('All' | 'Web App' | 'Mobile App' )[] = [
    'All', 'Web App', 'Mobile App', 
  ];

  const projects: Project[] = [
    {
      id: 'informational_assistance',
      title: 'Informational Assistance',
      category: 'Web App',
      description: 'Developed an educational web platform to help third-semester students access lecture materials, tutorial videos, and software tools in one centralized location. Built the application using HTML, CSS, Java Servlets, providing an organized and supportive learning environment for students.',
      longDescription: 'Developed an educational web platform to help third-semester students access lecture materials, tutorial videos, and software tools in one centralized location. Built the application using HTML, CSS, Java Servlets, providing an organized and supportive learning environment for students.',
      image: pjimage_2,
      tags: ['HTML', 'CSS', 'MySQL', 'Tomcat','Java Servlet' ],
      liveUrl: 'https://jolly-bienenstitch-9279c8.netlify.app/',
      githubUrl: 'https://github.com/waiyanhtet/ecommerce-react-node',
      featured: false
    },
    {
      id: 'greenstack',
      title: 'GreenStack',
      category: 'Web App',
      description: 'Developed a web-based platform that supports Myanmar farmers by providing agricultural information, crop recommendations, and a chatbot for answering farming-related questions. The system helps farmers make informed decisions and improve productivity through accessible digital assistance.',
      longDescription: 'Developed a web-based platform that supports Myanmar farmers by providing agricultural information, crop recommendations, and a chatbot for answering farming-related questions. The system helps farmers make informed decisions and improve productivity through accessible digital assistance.',
      image: pjimage_1,
      tags: ['React', 'TailwindCss', 'MongoDB', 'Python'],
      liveUrl: 'https://green-stack-frontend.vercel.app',
      githubUrl: 'https://github.com/Hsu-Lae-Waddy/GreenStack.git',
      featured: true
    },
    {
      id: 'xpense',
      title: 'Expense Tracker',
      category: 'Web App',
      description: 'Built an Expense Tracker Management System to help users keep track of their daily income and expenses. It allows easy recording, categorizing, and viewing of spending..',
      longDescription: 'Built an Expense Tracker Management System to help users keep track of their daily income and expenses. It allows easy recording, categorizing, and viewing of spending..',
      image: pjimage_3,
      tags: ['React', 'TypeScript', 'Python', 'Django', 'SQL lite'],
      liveUrl: 'https://weather-trends.example.com',
      githubUrl: 'https://github.com/QaraEzio/ExpenseTracker_Django.git',
      featured: false
    },
    // {
    //   id: 'ucsy-helper',
    //   title: 'UCSY Student Helper Portal',
    //   category: 'Tool',
    //   description: 'Internal academic assistant utility for university students consolidating course timetables, credit tracking, and source materials files.',
    //   longDescription: 'An organic development built to assist fellow University of Computer Studies, Yangon (UCSY) students. Consolidates curriculum schedules, computes weighted GPA scales across semesters, and establishes a secure peer-to-peer catalog of lecture records and coding templates.',
    //   image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    //   tags: ['React', 'UCSY Resources', 'Local Storage', 'Fuzzy Search', 'Vite'],
    //   liveUrl: 'https://ucsy-portal.example.com',
    //   githubUrl: 'https://github.com/waiyanhtet/ucsy-student-helper',
    //   featured: true
    // },
    // {
    //   id: 'dev-docs-finder',
    //   title: 'DevDocs Search Engine',
    //   category: 'Tool',
    //   description: 'Instant local offline search compiler scanning documentation manifests with indexed caching vectors.',
    //   longDescription: 'An high-speed utility crafted to aid developer workflows. Utilizes deep client-side indexing and Web Workers to process over 50,000 code glossary entries in under 4ms, functioning completely offline without server-side compute relays.',
    //   image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    //   tags: ['TypeScript', 'Web Workers', 'Fuse.js', 'Offline Caching', 'Tailwind'],
    //   liveUrl: 'https://fast-docs.example.com',
    //   githubUrl: 'https://github.com/waiyanhtet/docs-search-engine',
    //   featured: false
    // }
  ];

  // Filtering Logic
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="projects-header">
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-slate-800 tracking-tight mb-4">
            Featured <span className="text-blue-400 font-bold">Projects</span>
          </h2>
          <p className="text-slate-500 font-sans font-light text-base sm:text-lg leading-relaxed">
            A showcase of my recent work across various domains, from web applications to mobile apps and developer tools.
          </p>
        </div>

        {/* Categories Tab list (from design screenshot) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="projects-categories-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-sans text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-400 text-white shadow-md shadow-blue-400/20'
                  : 'bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200/70'
              }`}
              id={`tab-btn-${cat.toLowerCase().replace(' ', '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with entry effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full cursor-pointer"
                onClick={() => setActiveProjectModal(proj)}
                id={`project-card-${proj.id}`}
              >
                {/* Visual Image container */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Pill Tag Overlay */}
                  <span className="absolute top-4 left-4 text-xs font-bold text-blue-600 bg-white/95 rounded-full px-3 py-1 shadow-sm font-sans mix-blend-normal">
                    {proj.category}
                  </span>

                  {/* Featured Tag (If featured) */}
                  {proj.featured && (
                    <span className="absolute top-4 right-4 text-[10px] font-semibold text-white bg-amber-500 rounded-full px-2.5 py-1 uppercase tracking-wider flex items-center space-x-1 shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                  
                  {/* Dark Visual Overlay on card hover */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 text-slate-800 text-xs font-bold tracking-wide hover:shadow-md px-4 py-2 rounded-xl scale-90 group-hover:scale-100 transition-all duration-300">
                      Learn More & View Specs
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-xl text-slate-800 mb-2 group-hover:text-blue-500 transition-colors duration-200 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-slate-500 font-sans text-sm font-light leading-relaxed mb-6 flex-grow">
                    {proj.description}
                  </p>

                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {proj.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects on GitHub Button */}
        <div className="flex justify-center mt-14" id="view-all-github-wrapper">
          <a
            href="https://github.com/QaraEzio"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2.5 px-8 py-3.5 bg-white border border-blue-300 hover:border-blue-400 text-blue-500 hover:text-blue-600 rounded-xl hover:bg-blue-50/20 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base font-semibold"
            id="view-all-github-btn"
          >
            <Github className="w-5 h-5 text-blue-400 hover:text-blue-500" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>

        {/* Project Details Modal Popover */}
        <AnimatePresence>
          {activeProjectModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="project-detail-modal">
              {/* Backing backdrop screen with blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProjectModal(null)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              />

              {/* Dynamic dialog card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl relative z-10 max-h-[90vh] flex flex-col"
              >
                {/* Header Graphic Cover */}
                <div className="relative max-h-56 overflow-hidden bg-slate-150 flex-shrink-0">
                  <img
                    src={activeProjectModal.image}
                    alt={activeProjectModal.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  
                  {/* Close button inside image header context */}
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/35 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-200 cursor-pointer"
                    aria-label="Close portal modal"
                    id="modal-close-icon-btn"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/90 text-white rounded-full px-2.5 py-0.5 mb-2 inline-block">
                      {activeProjectModal.category}
                    </span>
                    <h3 className="font-display font-medium text-2xl sm:text-3xl tracking-tight leading-tight">
                      {activeProjectModal.title}
                    </h3>
                  </div>
                </div>

                {/* Content Inner Area Scroll */}
                <div className="p-6 overflow-y-auto space-y-6 flex-grow font-sans text-sm sm:text-base">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-1.5 mb-2.5">
                      <Terminal className="w-4 h-4 text-slate-400" />
                      <span>Architecture & Overview</span>
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed">
                      {activeProjectModal.longDescription || activeProjectModal.description}
                    </p>
                  </div>

                  {/* Highlights Bullet points */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-1.5 mb-3">
                      <Layers className="w-4 h-4 text-slate-400" />
                      <span>Key Technical Integrations</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 font-light">
                      {activeProjectModal.tags.map((tag, idx) => (
                        <li key={tag} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Implemented <strong>{tag}</strong> patterns</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Source Control & Demos */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4 flex-shrink-0">
                    {/* <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                      <Code className="w-3.5 h-3.5" />
                      <span>Verified Sandbox Mock Release</span>
                    </div> */}

                    <div className="flex items-center space-x-3.5">
                      {activeProjectModal.githubUrl && (
                        <a
                          href={activeProjectModal.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center space-x-1.5 text-slate-600 hover:text-slate-900 font-medium text-sm border border-slate-200 px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-colors"
                          id="modal-github-link"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code repository</span>
                        </a>
                      )}
                      {activeProjectModal.liveUrl && (
                        <a
                          href={activeProjectModal.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center space-x-1.5 bg-blue-400 hover:bg-blue-500 text-white font-medium text-sm px-4 py-2 rounded-xl shadow-lg shadow-blue-400/25 hover:shadow-blue-500/35 transition-all duration-350"
                          style={{ backgroundColor: '#74b3e2' }}
                          id="modal-live-link"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live launch demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
