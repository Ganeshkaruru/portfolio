import React from 'react';
import { GraduationCap, Calendar, Award, BookCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Education & Theoretical Foundations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
            Rigorous undergraduate training in computer systems, algorithmic complexity, relational data structures, and software engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="rounded-xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm dark:bg-[#121215] dark:border-white/10 dark:shadow-none hover:border-emerald-500/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-white/5">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20 mb-2">
                Class of {PORTFOLIO_DATA.personal.graduationYear}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100">
                {edu.degree}
              </h3>
              <p className="text-sm sm:text-base font-mono font-medium text-emerald-700 dark:text-emerald-400/90 mt-1">
                {edu.institution}
              </p>
            </div>

            <div className="flex md:flex-col items-end gap-2 text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-900 dark:bg-white/5 dark:border-white/10 dark:text-zinc-100 font-mono text-sm">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-bold text-emerald-700 dark:text-emerald-400">{edu.cgpa}</span>
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-zinc-400">
                <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{edu.duration}</span>
              </div>
            </div>
          </div>

          {/* Highlights & Coursework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            
            {/* Highlights */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-zinc-100 font-semibold">
                Academic Rigor & Focus
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-zinc-400">
                {edu.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coursework Grid */}
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-zinc-100 font-semibold flex items-center gap-1.5">
                <BookCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Relevant Core Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200 dark:bg-white/5 dark:text-zinc-300 dark:border-white/10"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
