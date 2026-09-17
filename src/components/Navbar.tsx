import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Compass, Sparkles, ChevronRight, Telescope, HelpCircle } from 'lucide-react';
import { CLUB_META } from '../data/clubData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenJoinModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, path: string, hash?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (path !== currentPath) {
      onNavigate(path);
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090e]/92 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
          : 'bg-gradient-to-b from-[#08090e]/85 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <button
          id="nav-brand-logo"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/30 p-1 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-amber-400">
            <img
              src={CLUB_META.logo}
              alt="Aerospace Club MITS"
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
              onError={(e) => {
                // fallback
                (e.target as HTMLImageElement).src = CLUB_META.fallbackLogo;
              }}
            />
            <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                THE AEROSPACE CLUB
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-950/80 text-amber-400 border border-amber-500/30">
                MITS GWALIOR
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 tracking-wider">
              ESTD. 18 OCT 2018 • SRP & SSP
            </p>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            id="nav-link-home"
            onClick={(e) => handleLinkClick(e, '/')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide uppercase transition-all duration-200 ${
              currentPath === '/'
                ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            Home
          </button>
          <button
            id="nav-link-about"
            onClick={(e) => handleLinkClick(e, '/', '#about')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide uppercase text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
          >
            About
          </button>
          <button
            id="nav-link-members"
            onClick={(e) => handleLinkClick(e, '/', '#members')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide uppercase text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
          >
            Members
          </button>
          <button
            id="nav-link-events"
            onClick={(e) => handleLinkClick(e, '/', '#events')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide uppercase text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
          >
            Events
          </button>
          <button
            id="nav-link-gallery"
            onClick={(e) => handleLinkClick(e, '/', '#gallery')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide uppercase text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
          >
            Gallery
          </button>
          <button
            id="nav-link-cosmos"
            onClick={(e) => handleLinkClick(e, '/cosmoscorner')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide uppercase flex items-center gap-1.5 transition-all duration-200 ${
              currentPath === '/cosmoscorner'
                ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800/40'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            Antriksh Xplore
          </button>
          <button
            id="nav-link-quiz"
            onClick={(e) => handleLinkClick(e, '/quiz')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide uppercase flex items-center gap-1.5 transition-all duration-200 ${
              currentPath === '/quiz'
                ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800/40'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            Quiz
          </button>
          <button
            id="nav-link-skywatch"
            onClick={(e) => handleLinkClick(e, '/skywatch')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase flex items-center gap-1.5 transition-all duration-300 ${
              currentPath === '/skywatch'
                ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.6)] font-bold'
                : 'bg-amber-950/70 border border-amber-400/50 text-amber-300 hover:bg-amber-500/20 hover:text-white shadow-[0_0_12px_rgba(245,158,11,0.3)] animate-pulse'
            }`}
          >
            <Telescope className="w-3.5 h-3.5" />
            SkyWatch 2.0
          </button>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-join-button"
            onClick={onOpenJoinModal}
            className="relative group px-4 py-2 rounded-xl text-xs font-display font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 hover:from-amber-300 hover:to-orange-300 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] flex items-center gap-1.5 cursor-pointer"
          >
            <Rocket className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            Join Crew
          </button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            id="nav-mobile-join"
            onClick={onOpenJoinModal}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30"
          >
            Join
          </button>
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-amber-500/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#08090e]/95 backdrop-blur-2xl border-b border-amber-500/30 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4"
        >
          <div className="flex flex-col gap-2">
            <button
              onClick={(e) => handleLinkClick(e, '/')}
              className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium ${
                currentPath === '/' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <span>Home Overview</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={(e) => handleLinkClick(e, '/', '#about')}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800/60"
            >
              <span>About Mission & Mentors</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={(e) => handleLinkClick(e, '/', '#members')}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800/60"
            >
              <span>Crew Directory (18 Members)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={(e) => handleLinkClick(e, '/', '#events')}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800/60"
            >
              <span>Events & Reports (11 Events)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={(e) => handleLinkClick(e, '/', '#gallery')}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800/60"
            >
              <span>Photo Gallery (20 Moments)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
            <div className="h-px bg-slate-800 my-2" />
            <button
              onClick={(e) => handleLinkClick(e, '/cosmoscorner')}
              className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium ${
                currentPath === '/cosmoscorner' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                Antriksh Xplore (Cosmos Corner)
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-500/30">JWST</span>
            </button>
            <button
              onClick={(e) => handleLinkClick(e, '/quiz')}
              className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium ${
                currentPath === '/quiz' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                Weekly Quiz Series
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-500/30">Week 1</span>
            </button>
            <button
              onClick={(e) => handleLinkClick(e, '/skywatch')}
              className="flex items-center justify-between p-3 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-950/80 to-orange-950/80 border border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
              <span className="flex items-center gap-2">
                <Telescope className="w-4 h-4 text-amber-400" />
                SkyWatch 2.0 (Special Event)
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40">Jan 24-25</span>
            </button>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-display font-semibold uppercase text-black bg-gradient-to-r from-amber-400 to-orange-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                Join Aerospace Club
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
