import React, { useState, useMemo } from 'react';
import { Users, Search, Quote, Award, Sparkles, X, ChevronRight } from 'lucide-react';
import { CLUB_MEMBERS } from '../data/clubData';
import { Member } from '../types';

export const MembersSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'leadership' | 'head' | 'core'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalMember, setActiveModalMember] = useState<Member | null>(null);

  const filteredMembers = useMemo(() => {
    return CLUB_MEMBERS.filter((member) => {
      const matchesCategory =
        selectedCategory === 'all' || member.category === selectedCategory;
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.post.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.introduction.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="members" className="py-20 relative bg-[#08090e]">
      <div className="absolute inset-0 space-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Users className="w-3.5 h-3.5" />
            <span>CREW ROSTER ({CLUB_MEMBERS.length} MEMBERS)</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">MEMBERS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Meet the passionate aerospace enthusiasts driving innovation and exploration
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide uppercase transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              All Crew ({CLUB_MEMBERS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('leadership')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide uppercase transition-all cursor-pointer ${
                selectedCategory === 'leadership'
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Executive (4)
            </button>
            <button
              onClick={() => setSelectedCategory('head')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide uppercase transition-all cursor-pointer ${
                selectedCategory === 'head'
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Domain Leads (9)
            </button>
            <button
              onClick={() => setSelectedCategory('core')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide uppercase transition-all cursor-pointer ${
                selectedCategory === 'core'
                  ? 'bg-amber-400 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Core Team (5)
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search member or role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-amber-400 text-xs text-white placeholder:text-slate-500 outline-none transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Members Grid */}
        {filteredMembers.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl hud-panel">
            <p className="text-slate-400 font-mono text-sm">No members found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => setActiveModalMember(member)}
                className="hud-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-amber-400/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)] transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Top Member Card Header: Avatar + Name + Post */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-900 border-2 border-amber-500/30 group-hover:border-amber-400 transition-colors shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/gallery/gallery10.jpg';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                        {member.name}
                      </h4>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-950/80 text-amber-300 border border-amber-500/30 mt-1">
                        {member.post}
                      </span>
                    </div>
                  </div>

                  {/* Introduction / Authentic Quote Preview */}
                  <div className="relative pt-2">
                    <Quote className="w-4 h-4 text-amber-500/40 absolute -top-1 -left-1" />
                    <p className="text-xs text-slate-300 leading-relaxed italic pl-3 line-clamp-3">
                      "{member.introduction}"
                    </p>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-amber-400 group-hover:text-amber-300">
                  <span>View Member Note</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Member Full Quote Spotlight Modal */}
      {activeModalMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveModalMember(null)}
        >
          <div
            className="hud-panel p-6 sm:p-8 rounded-2xl max-w-lg w-full relative space-y-6 animate-in zoom-in-95 border-amber-500/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalMember(null)}
              aria-label="Close Member Profile"
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 border-2 border-amber-400 shrink-0">
                <img
                  src={activeModalMember.image}
                  alt={activeModalMember.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/gallery/gallery10.jpg';
                  }}
                />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-950 text-amber-300 border border-amber-500/40">
                  {activeModalMember.post}
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  {activeModalMember.name}
                </h3>
                <p className="text-xs font-mono text-slate-400">The Aerospace Club • MITS Gwalior</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono">
                <Quote className="w-4 h-4" />
                <span>MEMBER MESSAGE / VISION</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed italic">
                "{activeModalMember.introduction}"
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveModalMember(null)}
                className="px-5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider bg-amber-400 text-black font-bold hover:bg-amber-300 transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
