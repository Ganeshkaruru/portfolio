import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PORTFOLIO_DATA } from './data/portfolioData';

export const App: React.FC = () => {
  // Dark mode as default initial state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('gk_portfolio_theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default dark mode
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState<boolean>(false);

  // Synchronize 'dark' class on <html> document element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('gk_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('gk_portfolio_theme', 'light');
    }
  }, [darkMode]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setEmailCopied(true);
    setToastMessage(`Email address copied: ${PORTFOLIO_DATA.personal.email}`);
    setTimeout(() => {
      setEmailCopied(false);
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0B] text-slate-900 dark:text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-400 font-sans transition-colors duration-200">
      
      {/* Sticky Glassmorphic Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Sections */}
      <main>
        <Hero onCopyEmail={handleCopyEmail} />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Copy Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-[#121215] text-slate-900 dark:text-zinc-100 border border-emerald-500/40 shadow-xl shadow-slate-300/30 dark:shadow-2xl dark:shadow-black/60 font-mono text-xs">
          <div className="p-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="font-semibold text-emerald-700 dark:text-emerald-400">Copied to Clipboard!</div>
            <div className="text-slate-500 dark:text-zinc-400 text-[11px]">{toastMessage}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
