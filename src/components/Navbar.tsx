import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileDown, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav-light dark:glass-nav-dark shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Monospace Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group font-mono text-sm sm:text-base font-semibold tracking-tight transition-colors"
        >
          <span className="p-1.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 group-hover:border-emerald-400 dark:group-hover:border-emerald-500/40 transition-colors">
            <Terminal className="w-4 h-4" />
          </span>
          <span className="text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            &lt;GaneshKaruru /&gt;
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Active & Available" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions: Theme Toggle & Resume */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light/Dark Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Resume CTA */}
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 transition-all duration-200 shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="p-2 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 border border-slate-200 dark:border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0A0A0B]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-mono font-medium bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 shadow-sm"
            >
              <FileDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
