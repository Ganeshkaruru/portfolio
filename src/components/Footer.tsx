import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#070708] py-12 text-slate-500 dark:text-zinc-500 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand & Availability */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-zinc-100">
              <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>&lt;GaneshKaruru /&gt;</span>
            </div>
            <span className="hidden sm:inline text-slate-300 dark:text-white/20">•</span>
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 inline-block animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.statusBadge}</span>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-600 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              aria-label="Email"
              className="text-slate-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-slate-200 text-slate-800 border border-slate-300 dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-100 dark:border-white/10 shadow-sm transition-colors ml-2"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Subtext */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Ganesh Karuru. Built for high performance & clean architecture.</p>
          <p>React • TypeScript • Tailwind CSS • Spring Boot API Specification</p>
        </div>
      </div>
    </footer>
  );
};
