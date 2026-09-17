import React from 'react';
import { Users, Plane, FlaskConical, Rocket, ShieldCheck, GraduationCap, Compass } from 'lucide-react';
import { FACULTY_MENTORS } from '../data/clubData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-950/40 border-y border-amber-500/10">
      {/* Background grid */}
      <div className="absolute inset-0 space-grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Compass className="w-3.5 h-3.5" />
            <span>FOUNDATION & HORIZONS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">OUR MISSION</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* Mission & Core Pillars Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Mission Card (7 cols) */}
          <div className="lg:col-span-7 hud-panel p-8 sm:p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">Our Mission</h3>
                  <p className="text-xs font-mono text-amber-400">ESTABLISHED OCTOBER 2018</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Founded on <span className="text-amber-400 font-semibold">18th October 2018</span>, the Aerospace Club of MITS, Gwalior was established with an ambitious vision to create a society of aerospace enthusiasts who are passionate about exploring the cosmos and measuring the vastness of the universe.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                We inspire students to consider the aerospace industry as a potential career opportunity, fostering innovation and creativity in aerospace engineering and space technology.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Autonomous Student Society
              </span>
              <span>MADHAV INSTITUTE OF TECHNOLOGY & SCIENCE</span>
            </div>
          </div>

          {/* 3 Pillars List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Pillar 1: 250+ Members */}
            <div className="hud-panel p-6 rounded-2xl flex items-start gap-4 hover:border-amber-500/40 transition-all">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-lg text-white">250+ Members</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Active community within and outside MITS, collaborating across engineering disciplines.
                </p>
              </div>
            </div>

            {/* Pillar 2: Model Aircraft Design */}
            <div className="hud-panel p-6 rounded-2xl flex items-start gap-4 hover:border-amber-500/40 transition-all">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <Plane className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-lg text-white">Model Aircraft Design</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Creating innovative RC crafts, aerodynamics prototypes, and aircraft scale models.
                </p>
              </div>
            </div>

            {/* Pillar 3: Research & Development */}
            <div className="hud-panel p-6 rounded-2xl flex items-start gap-4 hover:border-amber-500/40 transition-all">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-lg text-white">Research & Development (R&D)</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Driving aerospace innovation through cutting-edge research, experimentation, and technology development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Mentors & Coordinators */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-amber-400">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>FACULTY ADVISORY BOARD</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              FACULTY MENTORSHIP
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Guiding aerospace initiatives and nurturing technical leadership at MITS Gwalior
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FACULTY_MENTORS.map((mentor) => (
              <div
                key={mentor.name}
                className="hud-panel p-8 rounded-2xl text-center flex flex-col items-center relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300"
              >
                {/* Decorative radar circle around portrait */}
                <div className="relative mb-6">
                  <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-amber-500/30 group-hover:border-amber-400 transition-colors p-1 bg-slate-900 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/gallery/gallery10.jpg';
                      }}
                    />
                  </div>
                  <span className="absolute bottom-1 right-2 p-1.5 rounded-full bg-amber-400 text-black shadow-lg">
                    <GraduationCap className="w-4 h-4" />
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-amber-950/80 text-amber-300 border border-amber-500/40 mb-3">
                  {mentor.role}
                </span>
                
                <h4 className="font-display font-bold text-2xl text-white group-hover:text-amber-300 transition-colors">
                  {mentor.name}
                </h4>
                
                <p className="text-sm font-mono text-slate-400 mt-1">
                  {mentor.department}
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Madhav Institute of Technology & Science, Gwalior
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
