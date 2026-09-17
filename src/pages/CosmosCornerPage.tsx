import React, { useState } from 'react';
import { Compass, Sparkles, ExternalLink, BookOpen, Telescope, HelpCircle, ArrowLeft, Share2 } from 'lucide-react';
import { COSMOS_CORNER_DATA } from '../data/clubData';

interface CosmosCornerPageProps {
  onNavigate: (path: string) => void;
}

export const CosmosCornerPage: React.FC<CosmosCornerPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 pb-20 relative min-h-screen">
      <div className="absolute inset-0 space-grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb & Sub-tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Mission Overview</span>
          </button>

          {/* Sub-tabs: Discovery vs Quiz */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800">
            <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-amber-400 text-black">
              Weekly Discovery Series
            </span>
            <button
              onClick={() => onNavigate('/quiz')}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Weekly Quiz Series</span>
            </button>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Compass className="w-3.5 h-3.5" />
            <span>ANTRIKSH XPLORE • COSMOS CORNER</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            DEEP SPACE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">INSIGHTS</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Exploring cosmological frontiers and astronomical milestones observed by the James Webb Space Telescope.
          </p>
        </div>

        {/* Main Article Container */}
        <article className="hud-panel p-6 sm:p-10 rounded-3xl space-y-8 border-amber-500/30">
          
          {/* Article Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Telescope className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                  ASTRONOMICAL DISCOVERY
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {COSMOS_CORNER_DATA.article.title}
                </h2>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>

          {/* Highlight Callout Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/40 to-slate-900/80 border border-amber-500/30 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Key Observation: JWST Cosmic Dawn</span>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {COSMOS_CORNER_DATA.article.highlight}
            </p>
          </div>

          {/* Deep Content Body */}
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              {COSMOS_CORNER_DATA.article.content}
            </p>
          </div>

          {/* References & External Citations */}
          <div className="pt-8 border-t border-slate-800/80 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Verified Scientific References & Sources</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {COSMOS_CORNER_DATA.references.map((ref, idx) => (
                <a
                  key={idx}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/50 transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-display font-semibold text-white group-hover:text-amber-300 transition-colors">
                      {ref.title}
                    </p>
                    {ref.description && (
                      <p className="text-[11px] text-slate-400 font-sans leading-normal">
                        {ref.description}
                      </p>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 shrink-0 mt-0.5" />
                </a>
              ))}
            </div>

            <p className="text-xs font-mono text-slate-400 text-center pt-4">
              {COSMOS_CORNER_DATA.credits}
            </p>
          </div>

          {/* Call to Action: Take the quiz */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/60 to-orange-950/60 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-lg text-white">Test Your Cosmic Knowledge</h3>
              <p className="text-xs text-slate-300">Take this week's astrophysics challenge on Saturn's rings!</p>
            </div>
            <button
              onClick={() => onNavigate('/quiz')}
              className="px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-amber-400 text-black hover:bg-amber-300 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.3)] shrink-0 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Launch Quiz</span>
            </button>
          </div>

        </article>

      </div>
    </div>
  );
};
