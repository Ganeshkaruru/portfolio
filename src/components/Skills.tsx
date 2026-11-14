import React from 'react';
import { Code2, Server, Database, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Code2 className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Core Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
            A focused backend & full-stack toolchain centered on Java enterprise systems, relational schema integrity, and high-performance querying.
          </p>
        </div>

        {/* 4 Clean Scannable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((cat: SkillCategory, idx: number) => (
            <div
              key={idx}
              className="rounded-xl p-6 sm:p-7 bg-white border border-slate-200 shadow-sm dark:bg-[#121215] dark:border-white/10 dark:shadow-none hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10">
                    {getIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-5">
                  {cat.description}
                </p>

                {/* Pill Grid */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                        skill.highlight
                          ? 'text-emerald-700 bg-emerald-50 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/25'
                          : 'bg-slate-100 text-slate-800 border border-slate-200 dark:bg-white/5 dark:text-zinc-300 dark:border-white/10'
                      }`}
                    >
                      {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Metric indicator */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                <span>{cat.skills.length} proficiencies listed</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Production Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
