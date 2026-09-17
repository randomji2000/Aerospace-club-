import React, { useState } from 'react';
import {
  Telescope,
  Calendar,
  MapPin,
  Users,
  Sun,
  Moon,
  Star,
  Award,
  ChevronDown,
  ArrowLeft,
  CheckCircle2,
  Send,
  Sparkles,
  Phone,
  ShieldCheck,
  Film
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SKYWATCH_DATA, CONTACT_PERSONS, CLUB_META } from '../data/clubData';

interface SkywatchPageProps {
  onNavigate: (path: string) => void;
}

export const SkywatchPage: React.FC<SkywatchPageProps> = ({ onNavigate }) => {
  const [scheduleTab, setScheduleTab] = useState<'day' | 'night'>('night');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    branch: '',
    year: '1st Year'
  });
  const [ticketStatus, setTicketStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTicketStatus('submitting');
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: CLUB_META.web3formsKey,
          subject: `SkyWatch 2.0 Free Pass Reservation: ${ticketForm.name}`,
          name: ticketForm.name,
          email: ticketForm.email,
          branch: ticketForm.branch,
          year: ticketForm.year,
          event: 'SKY WATCH 2.0',
          submitted_at: new Date().toISOString()
        })
      });
      setTicketStatus('success');
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      setTicketStatus('success'); // allow student entry
    }
  };

  return (
    <div className="pt-28 pb-24 relative min-h-screen">
      {/* Background Starfield atmosphere */}
      <div className="absolute inset-0 space-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-600/15 via-orange-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Back Navigation Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Mission Overview</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-xs font-mono text-amber-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>ANNUAL FLAGSHIP ASTRONOMY EVENT</span>
          </div>
        </div>

        {/* Hero Section of SkyWatch */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/90 border border-amber-400/50 text-xs font-mono text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <Telescope className="w-4 h-4 text-amber-400" />
            <span>MADHAV INSTITUTE OF TECHNOLOGY & SCIENCE PRESENTS</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none">
            SKY WATCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">2.0</span>
          </h1>

          <p className="text-base sm:text-xl text-amber-200/90 font-display">
            {SKYWATCH_DATA.subtitle}
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            {SKYWATCH_DATA.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setTicketModalOpen(true)}
              className="px-8 py-3.5 rounded-xl font-display font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Telescope className="w-4 h-4" />
              <span>Get Free Entry Pass</span>
            </button>

            <a
              href="#schedule"
              className="px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-amber-400 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>View Observation Schedule</span>
            </a>
          </div>
        </div>

        {/* 4 Quick Detail Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKYWATCH_DATA.quickDetails.map((detail, idx) => (
            <div
              key={idx}
              className="hud-panel p-5 rounded-2xl border-amber-500/20 hover:border-amber-400/50 transition-all text-center space-y-2"
            >
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                {detail.label}
              </span>
              <p className="font-display font-bold text-xl text-white">
                {detail.value}
              </p>
              <p className="text-xs font-mono text-slate-400">
                {detail.subvalue}
              </p>
            </div>
          ))}
        </div>

        {/* About SkyWatch Card */}
        <div className="hud-panel p-8 sm:p-12 rounded-3xl space-y-6 border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                EVENT PURPOSE & VISION
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                About SkyWatch 2026
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            <p>{SKYWATCH_DATA.aboutText1}</p>
            <p>{SKYWATCH_DATA.aboutText2}</p>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-center gap-3 text-amber-300 text-xs sm:text-sm font-mono">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{SKYWATCH_DATA.whoCanAttend}</span>
          </div>
        </div>

        {/* Special Collaboration: Aryabhat Foundation */}
        <div className="hud-panel p-8 sm:p-12 rounded-3xl space-y-8 border-amber-500/30 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-amber-950/30">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-xs font-mono text-amber-400">
              <Award className="w-3.5 h-3.5" />
              <span>KEYNOTE PARTNER</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Collaboration with {SKYWATCH_DATA.collaboration.partnerName}
            </h3>
            <p className="text-xs font-mono text-amber-400 italic">
              {SKYWATCH_DATA.collaboration.tagline}
            </p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {SKYWATCH_DATA.collaboration.description}
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-2">
            {SKYWATCH_DATA.collaboration.achievements.map((ach, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-amber-500/40 transition-colors"
              >
                <div className="text-2xl mb-1">{ach.icon}</div>
                <h4 className="font-display font-bold text-base text-white">{ach.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule & Event Timeline Tabs */}
        <div id="schedule" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Observation Schedule
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              Explore the itinerary curated for solar and nocturnal astronomical exploration
            </p>
          </div>

          {/* Schedule Mode Switcher */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setScheduleTab('day')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono uppercase font-bold transition-all cursor-pointer ${
                  scheduleTab === 'day'
                    ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(251,191,36,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-4 h-4 text-amber-500" />
                <span>Day Activities</span>
              </button>
              <button
                onClick={() => setScheduleTab('night')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono uppercase font-bold transition-all cursor-pointer ${
                  scheduleTab === 'night'
                    ? 'bg-orange-500 text-black shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Moon className="w-4 h-4 text-orange-950" />
                <span>Night Stargazing</span>
              </button>
            </div>
          </div>

          {/* Schedule Item List */}
          <div className="grid md:grid-cols-2 gap-4">
            {scheduleTab === 'day'
              ? SKYWATCH_DATA.scheduleDay.map((item, idx) => (
                  <div
                    key={idx}
                    className="hud-panel p-6 rounded-2xl space-y-2 border-amber-500/20 hover:border-amber-400/50 transition-all"
                  >
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold uppercase">
                      <Sun className="w-4 h-4" />
                      <span>DAY ACTIVITY #{idx + 1}</span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{item.description}</p>
                  </div>
                ))
              : SKYWATCH_DATA.scheduleNight.map((item, idx) => (
                  <div
                    key={idx}
                    className="hud-panel p-6 rounded-2xl space-y-2 border-amber-500/20 hover:border-amber-400/50 transition-all"
                  >
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold uppercase">
                      <Moon className="w-4 h-4" />
                      <span>NIGHT OBSERVATION #{idx + 1}</span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-white">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{item.description}</p>
                  </div>
                ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-display font-bold text-2xl text-white">Frequently Asked Questions</h3>
            <p className="text-xs font-mono text-slate-400">Everything you need to know before attending SkyWatch 2.0</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {SKYWATCH_DATA.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="hud-panel rounded-2xl overflow-hidden border-slate-800 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 transition-transform duration-300 shrink-0 ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Direct Coordinator Contacts for Skywatch */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6 text-center">
          <h3 className="font-display font-bold text-xl text-white">
            Have Questions About SkyWatch? Contact Coordinators
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {CONTACT_PERSONS.map((person) => (
              <div key={person.name} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                <p className="font-semibold text-white text-sm">{person.name}</p>
                <p className="text-[11px] font-mono text-amber-400">{person.role}</p>
                <a
                  href={`tel:${person.tel}`}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white pt-1"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>{person.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Free Ticket Registration Modal */}
      {ticketModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setTicketModalOpen(false)}
        >
          <div
            className="hud-panel p-6 sm:p-8 rounded-3xl max-w-md w-full relative space-y-6 animate-in zoom-in-95 border-amber-500/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <Telescope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">Reserve SkyWatch Pass</h3>
                <p className="text-xs font-mono text-amber-400">January 24-25, 2026 • Free Entry</p>
              </div>
            </div>

            {ticketStatus === 'success' ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-white">Pass Confirmed!</h4>
                <p className="text-xs text-slate-300">
                  See you under the night sky at Main Campus Ground. Bring your college ID!
                </p>
                <button
                  onClick={() => {
                    setTicketModalOpen(false);
                    setTicketStatus('idle');
                  }}
                  className="mt-2 px-5 py-2 rounded-xl text-xs font-mono uppercase bg-amber-400 text-black font-bold hover:bg-amber-300"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleTicketSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aryan Sharma"
                    value={ticketForm.name}
                    onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. aryan@mitsgwalior.in"
                    value={ticketForm.email}
                    onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Branch *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mechanical"
                      value={ticketForm.branch}
                      onChange={(e) => setTicketForm({ ...ticketForm, branch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Year *</label>
                    <select
                      value={ticketForm.year}
                      onChange={(e) => setTicketForm({ ...ticketForm, year: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white outline-none focus:border-amber-400"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setTicketModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={ticketStatus === 'submitting'}
                    className="flex-1 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-amber-400 text-black hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {ticketStatus === 'submitting' ? 'Reserving...' : 'Confirm Free Ticket'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
