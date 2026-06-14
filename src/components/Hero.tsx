import { motion } from 'motion/react';
import { Mail, Briefcase, GraduationCap } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/20 via-indigo-50/10 to-white z-10"
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20 flex flex-col items-center">
        {/* Academic Tag */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm"
          id="hero-academic-tag"
        >
          <GraduationCap className="w-4 h-4" />
          <span>UCSY Software Engineering Graduate</span>
        </motion.div> */}

        {/* Brand/Name Header */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="font-display font-bold text-6xl sm:text-7xl md:text-8 text-slate-800 tracking-tight leading-none mb-4"
          id="hero-main-name"
        >
          Wai Yan <span className="text-blue-400 font-extrabold">Htet</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-2xl sm:text-3xl font-display font-medium text-slate-600 tracking-wide mb-6"
          id="hero-subtitle-role"
        >
          Software Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed mb-10 font-sans font-light"
          id="hero-desc-para"
        >
          Crafting pristine digital experiences using modern technologies. Passionate about software architecture, clean code practices, and building highly scalable, user-centric web applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          id="hero-actions-container"
        >
          <button
            onClick={onContactClick}
            className="flex items-center justify-center space-x-2.5 w-full sm:w-auto px-8 py-3.5 bg-blue-450 hover:bg-blue-500 text-white font-medium rounded-xl shadow-lg shadow-blue-450/20 hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            style={{ backgroundColor: '#323B4C' }}
            id="hero-contact-btn"
          >
            <Mail className="w-5 h-5 pointer-events-none" />
            <span className="text-base">Get In Touch</span>
          </button>

          <button
            onClick={onProjectsClick}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            id="hero-projects-btn"
          >
            <Briefcase className="w-5 h-5 pointer-events-none text-slate-400" />
            <span className="text-base">View My Work</span>
          </button>
        </motion.div>
      </div>

      {/* Smooth fade visual overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
}
