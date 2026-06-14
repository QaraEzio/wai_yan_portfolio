import { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine, FileText } from 'lucide-react';

interface HeaderProps {
  onResumeClick: () => void;
}

export default function Header({ onResumeClick }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  // Track scrolling to change background transparency & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-blue-50/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-1 cursor-pointer group"
          id="navbar-logo-btn"
        >
          <span className="font-display font-bold text-2xl tracking-tight text-slate-800 transition-colors duration-200 group-hover:text-slate-900">
            Wai Yan
          </span>
          <span className="font-display font-bold text-2xl text-blue-400 select-none">
            Htet
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans text-sm font-medium transition-all duration-200 relative py-1 cursor-pointer ${
                activeSection === item.id
                  ? 'text-blue-500'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              id={`nav-link-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Resume Action */}
        <div className="hidden md:block">
          <button
            onClick={onResumeClick}
            className="flex items-center space-x-2 px-5 py-2 rounded-full border border-blue-300 text-blue-500 hover:bg-blue-50/50 transition-all duration-200 text-sm font-medium cursor-pointer"
            id="desktop-resume-btn"
          >
            <FileText className="w-4 h-4" />
            <span>Interactive Resume</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer"
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute left-0 right-0 px-6 py-6 flex flex-col space-y-4 shadow-lg animate-fadeIn z-40">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left font-sans text-base font-medium py-2 px-3 rounded-lg transition-colors duration-150 cursor-pointer ${
                activeSection === item.id
                  ? 'bg-blue-50/50 text-blue-600 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
              id={`mobile-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onResumeClick();
              }}
              className="flex items-center justify-center space-x-2 w-full px-5 py-3 rounded-full border border-blue-300 text-blue-500 hover:bg-blue-50/50 transition-all duration-200 text-sm font-medium cursor-pointer"
              id="mobile-resume-btn"
            >
              <FileText className="w-4 h-4" />
              <span>Interactive Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
