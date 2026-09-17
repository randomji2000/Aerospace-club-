import React, { useState, useEffect } from 'react';
import { Rocket, Telescope, ChevronLeft, ChevronRight, Sparkles, Users, Award, Shield, FileText } from 'lucide-react';
import { CLUB_META, HERO_SLIDES } from '../data/clubData';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
  onOpenJoinModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenJoinModal }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient stars and nebular gradients */}
      <div className="absolute inset-0 space-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-600/15 via-orange-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Telemetry Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-xs font-mono text-amber-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>ESTD. 18TH OCT 2018</span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-400 font-semibold">MITS GWALIOR</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500">AEROSPACE</span> CLUB
              </h1>
              <p className="text-sm sm:text-base font-mono text-amber-400/90 tracking-wider uppercase">
                Madhav Institute of Technology & Science
              </p>
            </div>

            {/* Mission Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {CLUB_META.tagline} We inspire students to consider the aerospace industry as a career opportunity, pioneering aircraft design, research, the <strong className="text-amber-400 font-semibold">Student Rocket Program (SRP)</strong>, and <strong className="text-amber-400 font-semibold">Satellite Program (SSP)</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-explore-events"
                onClick={() => {
                  const el = document.querySelector('#events');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl text-sm font-display font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-300 to-orange-500 text-black hover:from-amber-300 hover:to-orange-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Rocket className="w-4 h-4" />
                Explore Missions
              </button>

              <button
                id="hero-skywatch-cta"
                onClick={() => onNavigate('/skywatch')}
                className="px-6 py-3 rounded-xl text-sm font-display font-semibold uppercase tracking-wider bg-slate-900/80 hover:bg-slate-800 text-amber-300 border border-amber-500/40 hover:border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Telescope className="w-4 h-4 text-amber-400" />
                SkyWatch 2.0
              </button>

              <button
                id="hero-join-cta"
                onClick={onOpenJoinModal}
                className="px-5 py-3 rounded-xl text-sm font-display font-medium uppercase tracking-wider text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                Join Our Crew
              </button>
            </div>

            {/* Key Telemetry Quick Stats */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="font-display font-bold text-xl sm:text-2xl text-white">250+</span>
                </div>
                <p className="text-[11px] font-mono text-slate-400 uppercase">Active Members</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span className="font-display font-bold text-xl sm:text-2xl text-white">11+</span>
                </div>
                <p className="text-[11px] font-mono text-slate-400 uppercase">Major Events</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Rocket className="w-4 h-4" />
                  <span className="font-display font-bold text-xl sm:text-2xl text-white">SRP & SSP</span>
                </div>
                <p className="text-[11px] font-mono text-slate-400 uppercase">Rocket & Sat</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Telescope className="w-4 h-4" />
                  <span className="font-display font-bold text-xl sm:text-2xl text-white">5</span>
                </div>
                <p className="text-[11px] font-mono text-slate-400 uppercase">Telescopes</p>
              </div>
            </div>
          </div>

          {/* Right Visual Showcase Carousel (5 cols) */}
          <div className="lg:col-span-5">
            <div
              className="relative rounded-2xl overflow-hidden hud-panel p-2.5 group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Main Image Stage */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={HERO_SLIDES[activeSlide].src}
                  alt={HERO_SLIDES[activeSlide].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/gallery/gallery0.jpg';
                  }}
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider bg-amber-950/80 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                    {HERO_SLIDES[activeSlide].tag}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h4 className="font-display font-bold text-base text-white line-clamp-1 drop-shadow-md">
                    {HERO_SLIDES[activeSlide].title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 drop-shadow">
                    {HERO_SLIDES[activeSlide].alt}
                  </p>
                </div>
              </div>

              {/* Slide Navigation Controls */}
              <div className="flex items-center justify-between mt-3 px-1">
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
