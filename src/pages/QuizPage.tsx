import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, ArrowLeft, Instagram, Sparkles, RefreshCw, BookOpen, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_DATA } from '../data/clubData';

interface QuizPageProps {
  onNavigate: (path: string) => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ onNavigate }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSelectOption = (id: string) => {
    if (hasSubmitted) return;
    setSelectedOptionId(id);
  };

  const handleCheckAnswer = () => {
    if (!selectedOptionId) return;
    setHasSubmitted(true);
    const chosen = QUIZ_DATA.options.find((o) => o.id === selectedOptionId);
    if (chosen?.isCorrect) {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setHasSubmitted(false);
  };

  const selectedOption = QUIZ_DATA.options.find((o) => o.id === selectedOptionId);
  const isCorrect = selectedOption?.isCorrect ?? false;

  return (
    <div className="pt-28 pb-20 relative min-h-screen">
      <div className="absolute inset-0 space-grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            <button
              onClick={() => onNavigate('/cosmoscorner')}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Weekly Discovery Series</span>
            </button>
            <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-amber-400 text-black">
              Weekly Quiz Series
            </span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-xs font-mono text-amber-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>WEEKLY QUIZ SERIES • WEEK {QUIZ_DATA.weekNumber}</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            COSMIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">QUIZ CHALLENGE</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Topic Focus: <span className="text-amber-400 font-semibold">{QUIZ_DATA.topic}</span>
          </p>
        </div>

        {/* Interactive Quiz Card */}
        <div className="hud-panel p-6 sm:p-10 rounded-3xl space-y-8 border-amber-500/30">
          
          {/* Question Box */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
              QUESTION #01
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
              {QUIZ_DATA.question}
            </h2>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {QUIZ_DATA.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              let optionStyle = 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-amber-500/50';

              if (hasSubmitted) {
                if (option.isCorrect) {
                  optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.3)]';
                } else if (isSelected && !option.isCorrect) {
                  optionStyle = 'bg-red-950/80 border-red-500 text-red-200 shadow-[0_0_15px_rgba(239,68,68,0.3)]';
                }
              } else if (isSelected) {
                optionStyle = 'bg-amber-500/20 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)]';
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  disabled={hasSubmitted}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono uppercase font-bold shrink-0 mt-0.5">
                    {option.id}
                  </span>
                  <span className="text-xs sm:text-sm leading-relaxed flex-1">
                    {option.text}
                  </span>

                  {hasSubmitted && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {hasSubmitted && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quiz Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            {!hasSubmitted ? (
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedOptionId}
                className="px-6 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-yellow-300 text-black hover:from-amber-300 hover:to-yellow-200 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Submit My Answer
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            )}

            <div className="text-xs font-mono text-slate-500">
              Source: <span className="text-slate-400">{QUIZ_DATA.source}</span>
            </div>
          </div>

          {/* Scientific Explanation Reveal */}
          {hasSubmitted && (
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 animate-in fade-in">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider">
                {isCorrect ? (
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Correct! Scientific Breakdown:
                  </span>
                ) : (
                  <span className="text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Explanation & Scientific Breakdown:
                  </span>
                )}
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {QUIZ_DATA.explanationParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  Citation: {QUIZ_DATA.source}
                </span>

                <a
                  href={QUIZ_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 flex items-center gap-1 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Discuss on Instagram @aerospace.mits</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
