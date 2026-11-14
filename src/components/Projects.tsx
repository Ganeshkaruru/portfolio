import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Backend & AI' | 'Full-Stack'>('All');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              <FolderGit2 className="w-4 h-4" />
              <span>Architectural Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
              Featured Engineering Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl">
              Production-oriented backend pipelines, dynamic JPA predicate engines, and full-stack software built with clean layered architectures.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center p-1 rounded-lg bg-slate-200/70 border border-slate-300 dark:bg-[#121215] dark:border-white/10 shrink-0">
            {(['All', 'Backend & AI', 'Full-Stack'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-emerald-500 dark:text-black font-semibold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="group rounded-xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm dark:bg-[#121215] dark:border-white/10 dark:shadow-none hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Main Content Area */}
                <div className="space-y-4 flex-1">
                  
                  {/* Badges & Meta */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-zinc-500">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary / Problem Statement */}
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-zinc-400">
                    {project.summary}
                  </p>

                  {/* Key Engineering Bullets */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400/90 font-semibold flex items-center gap-1.5 pt-1">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Key Architectural Highlights</span>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-zinc-300">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">•</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 text-slate-800 border border-slate-200 dark:bg-[#16161A] dark:text-zinc-300 dark:border-white/10 group-hover:border-emerald-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Action Links */}
                <div className="lg:w-48 flex lg:flex-col gap-3 justify-start lg:items-end shrink-0 pt-2 lg:pt-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-100 dark:border-white/10 shadow-sm transition-colors"
                  >
                    <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>GitHub Repo</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                  >
                    <span>View Commits</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
