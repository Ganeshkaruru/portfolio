import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Briefcase className="w-4 h-4" />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Professional Engineering Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
            Hands-on software development internship focused on production-grade Spring Boot micro-services, relational schema modeling, and client-server integration.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative rounded-xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm dark:bg-[#121215] dark:border-white/10 dark:shadow-none hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Header: Role & Organization */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-emerald-700 dark:text-emerald-400/90 font-mono mt-0.5">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="py-5 space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                    <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-zinc-300">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 text-slate-800 border border-slate-200 dark:bg-white/5 dark:text-zinc-300 dark:border-white/10 group-hover:border-emerald-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
