import React from 'react';
import { Phone, Mail, Youtube, Instagram, ExternalLink, ArrowUp, Rocket, ShieldCheck, MapPin } from 'lucide-react';
import { CLUB_META, CONTACT_PERSONS } from '../data/clubData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (path: string, hash?: string) => {
    onNavigate(path);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="relative bg-[#020308] border-t border-amber-500/20 text-slate-400 overflow-hidden">
      {/* Background glow and telemetry grid lines */}
      <div className="absolute inset-0 space-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 p-1 flex items-center justify-center">
                <img
                  src={CLUB_META.logo}
                  alt="Aerospace Club Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = CLUB_META.fallbackLogo;
                  }}
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white tracking-wide">
                  THE AEROSPACE CLUB
                </h3>
                <p className="text-xs font-mono text-amber-400">MITS GWALIOR</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              {CLUB_META.tagline}
            </p>
            <p className="text-xs text-slate-400">
              Founded on <span className="text-amber-400 font-semibold">{CLUB_META.founded}</span> at Madhav Institute of Technology & Science, Gwalior. Home of the Student Rocket Program (SRP) and Satellite Program (SSP).
            </p>

            {/* Social media connections */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CLUB_META.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aerospace Club YouTube Channel"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 text-slate-300 flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={CLUB_META.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aerospace Club Instagram Handle"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400 text-slate-300 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CLUB_META.email}`}
                aria-label="Official Club Email"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-400 text-slate-300 flex items-center justify-center transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation & Initiatives (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white border-b border-amber-500/20 pb-2">
              Exploration
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('/', '#about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>About & Faculty Mentors</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/', '#members')}
                  className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Club Members Directory (18 Members)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/', '#events')}
                  className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Events & Official Reports</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/', '#gallery')}
                  className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Activity Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/cosmoscorner')}
                  className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5 text-amber-300"
                >
                  <span>Antriksh Xplore (JWST Discovery)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/quiz')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5 text-amber-400 font-semibold"
                >
                  <span>Weekly Quiz (Saturn's Rings)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/skywatch')}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5 font-bold text-amber-400"
                >
                  <span>SkyWatch 2.0 Stargazing Program</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white border-b border-amber-500/20 pb-2">
              Contact Coordinators
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              {CONTACT_PERSONS.map((person) => (
                <div
                  key={person.name}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-colors"
                >
                  <p className="font-semibold text-white">{person.name}</p>
                  <p className="text-[11px] text-amber-400 font-mono mb-1">{person.role}</p>
                  <a
                    href={`tel:${person.tel}`}
                    className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-3 h-3 text-amber-400" />
                    <span>{person.phone}</span>
                  </a>
                </div>
              ))}

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-colors">
                <p className="font-semibold text-white">Official Inquiry</p>
                <p className="text-[11px] text-amber-400 font-mono mb-1">Club Inquiries</p>
                <a
                  href={`mailto:${CLUB_META.email}`}
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors truncate max-w-full"
                >
                  <Mail className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">{CLUB_META.email}</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Madhav Institute of Technology & Science, Racecourse Road, Gwalior, M.P.</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} The Aerospace Club, MITS Gwalior. All original information preserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 hover:border-amber-500/40 transition-all cursor-pointer"
          >
            <span className="text-[11px] font-mono uppercase">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
