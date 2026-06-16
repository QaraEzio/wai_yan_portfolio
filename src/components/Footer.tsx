import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 relative border-t border-slate-800 z-10" id="global-footer">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-slate-800 gap-8">
          {/* Brand Logo Repeat */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-1 cursor-pointer focus:outline-none mb-3"
              id="footer-logo-btn"
            >
              <span className="font-display font-bold text-2xl text-white">Wai Yan</span>
              <span className="font-display font-bold text-2xl text-blue-400">Htet</span>
            </button>
            <p className="text-sm text-slate-400 font-sans max-w-sm leading-relaxed font-light">
              Bachelor of Computer Science, Software Engineering. Dedicated to constructing scalable systems and premium digital experiences.
            </p>
          </div>

          {/* Quick links footer navigations */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-400">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="hover:text-white capitalize transition-colors duration-150 cursor-pointer"
                id={`footer-link-${section}`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Up arrow Scroll to top button */}
          <button
            onClick={onScrollToTop}
            className="p-3.5 rounded-full bg-blue-400 hover:bg-blue-500 text-white shadow-lg shadow-blue-400/20 hover:shadow-blue-500/35 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top of portfolio"
            style={{ backgroundColor: '#74b3e2' }}
            id="scroll-top-arrow-btn"
          >
            <ArrowUp className="w-5 h-5 animate-pulse" />
          </button>
        </div>

        {/* Lower row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-slate-500 font-sans gap-4">
          <div className="text-center sm:text-left">
            <span>&copy; {currentYear} Wai Yan Htet. All rights reserved. </span>

           
          </div>

          <div className="flex items-center space-x-5" id="footer-socials">
            <a
              href="https://github.com/QaraEzio"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-150"
              aria-label="GitHub Profile Link"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="http://www.linkedin.com/in/wai-yan-htet-571402276"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors duration-150"
              aria-label="LinkedIn Profile Link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:waiyanxtet04@gmail.com"
              className="text-slate-500 hover:text-rose-400 transition-colors duration-150"
              aria-label="Email Address Link"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
