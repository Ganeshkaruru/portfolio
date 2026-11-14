import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  Terminal as TerminalIcon, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail }) => {
  const [copiedTerminal, setCopiedTerminal] = useState(false);
  const [activeTab, setActiveTab] = useState<'response' | 'curl'>('response');

  const curlCommand = `curl -X GET "https://ganesh.dev/api/v1/engineer/ganesh" \\\n     -H "Accept: application/json"`;

  const copyJsonPayload = () => {
    const textToCopy = activeTab === 'response' 
      ? JSON.stringify(PORTFOLIO_DATA.apiTerminalData.response, null, 2)
      : curlCommand;
    navigator.clipboard.writeText(textToCopy);
    setCopiedTerminal(true);
    setTimeout(() => setCopiedTerminal(false), 2000);
  };

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Engineering Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-ping" />
              <span>{PORTFOLIO_DATA.personal.heroStatusPill}</span>
            </div>

            {/* Bold Name & Role Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 dark:from-emerald-400 dark:via-teal-300 dark:to-sky-400">
                {PORTFOLIO_DATA.personal.roleHeadline}
              </p>
            </div>

            {/* Location & Context */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-mono">
              <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{PORTFOLIO_DATA.personal.location}</span>
            </div>

            {/* Engineering Bio */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-400 max-w-2xl font-normal">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-zinc-950 font-semibold shadow-md shadow-emerald-600/20 dark:shadow-emerald-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 shadow-sm transition-colors"
              >
                <FileDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Download Resume</span>
              </a>

              {/* Social Icon Buttons */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 bg-white hover:bg-slate-100 border border-slate-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-700 shadow-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 bg-white hover:bg-slate-100 border border-slate-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-700 shadow-sm transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <button
                  onClick={onCopyEmail}
                  type="button"
                  aria-label="Copy Email"
                  title="Click to copy email"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 bg-white hover:bg-slate-100 border border-slate-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-700 shadow-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-white/10">
              {PORTFOLIO_DATA.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-mono text-base font-bold text-slate-900 dark:text-zinc-100">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-zinc-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Code-Editor Dark Terminal in BOTH light & dark modes */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-300 dark:border-white/10 bg-[#111114] text-zinc-100 shadow-xl dark:shadow-2xl dark:shadow-black/60">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0D0D10] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                    ganesh-api.sh
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab('response')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'response' 
                        ? 'bg-white/10 text-emerald-400 font-semibold' 
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    JSON
                  </button>
                  <button
                    onClick={() => setActiveTab('curl')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'curl' 
                        ? 'bg-white/10 text-emerald-400 font-semibold' 
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    cURL
                  </button>
                  <button
                    onClick={copyJsonPayload}
                    aria-label="Copy code"
                    className="ml-2 p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Copy to clipboard"
                  >
                    {copiedTerminal ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Endpoint Request Bar */}
              <div className="px-4 py-2 bg-[#09090B] border-b border-white/5 flex items-center justify-between font-mono text-xs text-zinc-300">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <span className="text-emerald-400 font-bold">GET</span>
                  <span className="text-zinc-400">/api/v1/engineer/ganesh</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    200 OK
                  </span>
                  <span className="text-[10px] text-zinc-500">14ms</span>
                </div>
              </div>

              {/* Terminal Code View */}
              <div className="p-4 font-mono text-xs overflow-x-auto max-h-[380px] leading-relaxed text-zinc-300 select-text">
                {activeTab === 'response' ? (
                  <pre className="space-y-1">
                    <span className="text-zinc-500">&#123;</span>{'\n'}
                    {'  '}<span className="text-sky-300">"name"</span>: <span className="text-emerald-300">"Ganesh Karuru"</span>,{'\n'}
                    {'  '}<span className="text-sky-300">"role"</span>: <span className="text-emerald-300">"Backend & Full-Stack Engineer"</span>,{'\n'}
                    {'  '}<span className="text-sky-300">"status"</span>: <span className="text-emerald-300">"Available for Internships"</span>,{'\n'}
                    {'  '}<span className="text-sky-300">"academics"</span>: &#123;{'\n'}
                    {'    '}<span className="text-sky-300">"degree"</span>: <span className="text-emerald-300">"B.Tech CSE (2027)"</span>,{'\n'}
                    {'    '}<span className="text-sky-300">"cgpa"</span>: <span className="text-amber-300">8.5</span>{'\n'}
                    {'  '}&#125;,{'\n'}
                    {'  '}<span className="text-sky-300">"primaryStack"</span>: [{'\n'}
                    {'    '}<span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"Spring Boot"</span>, <span className="text-emerald-300">"Spring Data JPA"</span>,{'\n'}
                    {'    '}<span className="text-emerald-300">"MySQL"</span>, <span className="text-emerald-300">"Redis"</span>, <span className="text-emerald-300">"AWS"</span>, <span className="text-emerald-300">"Docker"</span>, <span className="text-emerald-300">"React"</span>{'\n'}
                    {'  '}],{'\n'}
                    {'  '}<span className="text-sky-300">"coreStrengths"</span>: [{'\n'}
                    {'    '}<span className="text-amber-200">"RESTful API & Clean Architecture"</span>,{'\n'}
                    {'    '}<span className="text-amber-200">"Dynamic Predicate JPA Specifications"</span>,{'\n'}
                    {'    '}<span className="text-amber-200">"Normalized Relational Schema Design"</span>{'\n'}
                    {'  '}],{'\n'}
                    {'  '}<span className="text-sky-300">"location"</span>: <span className="text-emerald-300">"Bengaluru / Madanapalle, IN"</span>{'\n'}
                    <span className="text-zinc-500">&#123;</span>
                  </pre>
                ) : (
                  <pre className="text-emerald-300 leading-normal">
                    {`# Run directly in your terminal:\n\n` + curlCommand}
                  </pre>
                )}
              </div>

              {/* Terminal Footer info */}
              <div className="px-4 py-2.5 bg-[#0D0D10] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <div className="flex items-center gap-1 text-zinc-400">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>Spring Boot 3.3 • Java 21 LTS</span>
                </div>
                <span>JSON 1.2 KB</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
