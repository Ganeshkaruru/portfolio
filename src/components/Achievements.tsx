import React from 'react';
import { Award, BookOpen, Trophy, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA, Achievement } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'Hackathon':
        return <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'Publication':
        return <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      default:
        return <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Award className="w-4 h-4" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Achievements & Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
            Recognition across competitive programming assessments, academic research publication, and engineering challenges.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.achievements.map((item: Achievement, idx: number) => (
            <div
              key={idx}
              className="rounded-xl p-6 bg-white border border-slate-200 shadow-sm dark:bg-[#121215] dark:border-white/10 dark:shadow-none hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="p-2 rounded-lg bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10">
                    {getBadgeIcon(item.type)}
                  </span>
                  {item.badgeText && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20">
                      {item.badgeText}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400/90 mt-1">
                    {item.organization} • {item.date}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-500">
                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Milestone
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
