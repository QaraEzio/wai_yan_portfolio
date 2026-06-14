import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBubbles from './components/FloatingBubbles';
import ResumeModal from './components/ResumeModal';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-800 bg-[#f7fbfe] selection:bg-blue-150 selection:text-blue-900" id="applet-core-root">
      
      {/* Background Graphic Ambient Bubbles (From designs) */}
      <FloatingBubbles />

      {/* Primary Fixed Navigation */}
      <Header onResumeClick={() => setIsResumeOpen(true)} />

      {/* Main Sections flow */}
      <main className="relative z-10">
        
        {/* HERO STAGE */}
        <Hero
          onContactClick={() => handleScrollToSection('contact')}
          onProjectsClick={() => handleScrollToSection('projects')}
        />

        {/* ABOUT ME GRID */}
        <About />

        {/* SKILLS METRIC BOARD */}
        <Skills />

        {/* PROJECTS FILTER SHOWCASE */}
        <Projects />

        {/* TIMELINE BRANCHES (UCSY & PROF) */}
        <Experience />

        {/* SECURE CONTACT FORM LOG */}
        <Contact />

      </main>

      {/* GLOBAL SIGNATURE FOOTER */}
      <Footer onScrollToTop={handleScrollToTop} />

      {/* INTERACTIVE PRINTABLE RESUME POPUP */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>

    </div>
  );
}
