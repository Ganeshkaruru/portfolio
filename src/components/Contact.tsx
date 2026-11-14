import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  FileDown, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export const Contact: React.FC<ContactProps> = ({ onCopyEmail, emailCopied }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSending(true);
    
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Ganesh,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
      )}`;
    }, 800);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Let's Discuss Engineering Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
            Currently actively seeking Backend & Full-Stack Engineering Internships (Bengaluru / Onsite & Remote). Have an opening or a technical challenge? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Email Copy Card */}
            <div className="rounded-xl p-6 bg-white border border-slate-200 shadow-sm dark:bg-[#121215] dark:border-white/10 dark:shadow-none space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-zinc-500 uppercase">
                  Primary Direct Email
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-slate-100 border border-slate-200 dark:bg-black/30 dark:border-white/5 font-mono text-xs sm:text-sm">
                <span className="truncate text-emerald-700 dark:text-emerald-400 font-semibold">
                  {PORTFOLIO_DATA.personal.email}
                </span>
                <button
                  onClick={onCopyEmail}
                  type="button"
                  title="Copy email address"
                  className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
                >
                  {emailCopied ? (
                    <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                      <Check className="w-4 h-4" /> Copied!
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                Click copy above or reach out through your preferred mail application. Typical turnaround is within 24 hours.
              </p>
            </div>

            {/* Direct Connect Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Phone Card */}
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/[^0-9+]/g, '')}`}
                className="group p-4 rounded-xl bg-white border border-slate-200 shadow-sm dark:bg-[#121215] dark:border-white/10 dark:shadow-none hover:border-emerald-500/30 transition-all flex items-center gap-3"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10 text-emerald-600 dark:text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                    Direct Phone
                  </div>
                  <div className="text-xs font-mono font-semibold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {PORTFOLIO_DATA.personal.phone}
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white border border-slate-200 shadow-sm dark:bg-[#121215] dark:border-white/10 dark:shadow-none hover:border-sky-500/30 transition-all flex items-center gap-3"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10 text-sky-600 dark:text-sky-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                    LinkedIn Profile
                  </div>
                  <div className="text-xs font-mono font-semibold text-slate-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    karuru-ganesh
                  </div>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white border border-slate-200 shadow-sm dark:bg-[#121215] dark:border-white/10 dark:shadow-none hover:border-emerald-500/30 transition-all flex items-center gap-3"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10 text-slate-700 dark:text-zinc-300">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                    GitHub Repos
                  </div>
                  <div className="text-xs font-mono font-semibold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    @Ganeshkaruru
                  </div>
                </div>
              </a>

              {/* Resume Card */}
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white border border-slate-200 shadow-sm dark:bg-[#121215] dark:border-white/10 dark:shadow-none hover:border-emerald-500/30 transition-all flex items-center gap-3"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10 text-emerald-600 dark:text-emerald-400">
                  <FileDown className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                    Official Resume
                  </div>
                  <div className="text-xs font-mono font-semibold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Download PDF
                  </div>
                </div>
              </a>

            </div>

          </div>

          {/* Right Column: Direct Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm dark:bg-[#121215] dark:border-white/10 dark:shadow-none">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-3">
                  <div className="inline-flex p-3 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-zinc-100">
                    Mail Client Initialized!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                    Your message draft has been passed to your system mail program. If it didn't trigger automatically, write directly to <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">{PORTFOLIO_DATA.personal.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 underline hover:opacity-80"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-zinc-400 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Hunter"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 border border-slate-300 text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none dark:bg-black/20 dark:border-white/10 dark:text-zinc-100 dark:focus:border-emerald-500/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-zinc-400 mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@techcorp.com"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 border border-slate-300 text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none dark:bg-black/20 dark:border-white/10 dark:text-zinc-100 dark:focus:border-emerald-500/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-zinc-400 mb-1.5 font-medium">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="SDE Internship / Backend Engineer Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 border border-slate-300 text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none dark:bg-black/20 dark:border-white/10 dark:text-zinc-100 dark:focus:border-emerald-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-zinc-400 mb-1.5 font-medium">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Ganesh, we reviewed your work on Spring Boot JPA Specifications and would like to invite you for an interview..."
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 border border-slate-300 text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none dark:bg-black/20 dark:border-white/10 dark:text-zinc-100 dark:focus:border-emerald-500/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-zinc-950 shadow-md shadow-emerald-600/20 dark:shadow-emerald-500/20 transition-all disabled:opacity-50"
                  >
                    {sending ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
