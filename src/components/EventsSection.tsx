import React, { useState } from 'react';
import {
  Telescope,
  Satellite,
  Rocket,
  Code,
  Globe,
  Award,
  Calendar,
  Compass,
  Film,
  BookOpen,
  Radio,
  FileText,
  ExternalLink,
  Download,
  X,
  Sparkles
} from 'lucide-react';
import { CLUB_EVENTS } from '../data/clubData';
import { ClubEvent } from '../types';

export const EventsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [reportModalEvent, setReportModalEvent] = useState<ClubEvent | null>(null);

  // Map icon name to Lucide Component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Telescope': return Telescope;
      case 'Satellite': return Satellite;
      case 'Rocket': return Rocket;
      case 'Code': return Code;
      case 'Globe': return Globe;
      case 'Award': return Award;
      case 'Calendar': return Calendar;
      case 'Compass': return Compass;
      case 'Film': return Film;
      case 'BookOpen': return BookOpen;
      case 'Radio': return Radio;
      default: return Rocket;
    }
  };

  const categories = ['all', 'Observation', 'Technical', 'Exhibition', 'Competition', 'Seminar'];

  const filteredEvents = selectedCategory === 'all'
    ? CLUB_EVENTS
    : CLUB_EVENTS.filter((e) => e.category === selectedCategory || (selectedCategory === 'Seminar' && (e.category === 'Screening' || e.category === 'Orientation')));

  return (
    <section id="events" className="py-20 relative bg-slate-950/60 border-y border-amber-500/10">
      <div className="absolute inset-0 space-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Rocket className="w-3.5 h-3.5" />
            <span>OPERATIONAL TIMELINE & ARCHIVES</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">EVENTS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From deep-sky observations and ISRO tech exhibitions to high-stakes coding hackathons and national aerospace seminars.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide uppercase transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Missions (11)' : cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => {
            const IconComponent = getIcon(event.iconName);
            return (
              <div
                key={event.name}
                className="hud-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-amber-400/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Event Top */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 rounded-xl bg-amber-950/80 border border-amber-500/30 text-amber-400 group-hover:text-black group-hover:bg-amber-400 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {event.category && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-slate-900 text-amber-400 border border-slate-700">
                        {event.category}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-300 transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Event Bottom: Report Action */}
                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  {event.report ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setReportModalEvent(event)}
                        className="flex-1 py-2 px-3 rounded-xl text-xs font-mono font-semibold bg-amber-950/60 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:border-amber-400 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Report</span>
                      </button>
                      <a
                        href={`/reports/${event.report}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        title="Download PDF"
                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-amber-400 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">Official Report Archiving</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Event Report Preview Modal */}
      {reportModalEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setReportModalEvent(null)}
        >
          <div
            className="hud-panel p-6 rounded-2xl max-w-2xl w-full relative space-y-5 animate-in zoom-in-95 border-amber-500/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-950 text-amber-300 border border-amber-500/40">
                  EVENT ARCHIVE REPORT
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  {reportModalEvent.name}
                </h3>
              </div>
              <button
                onClick={() => setReportModalEvent(null)}
                aria-label="Close Report"
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {reportModalEvent.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-white font-bold">{reportModalEvent.report}</p>
                  <p className="text-[11px] text-slate-400 font-mono">Official PDF Document • MITS Gwalior</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`/reports/${reportModalEvent.report}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-amber-400 text-black hover:bg-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full PDF</span>
                </a>
              </div>
            </div>

            <div className="text-right">
              <button
                onClick={() => setReportModalEvent(null)}
                className="px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
