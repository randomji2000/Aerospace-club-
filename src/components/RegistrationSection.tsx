import React, { useState } from 'react';
import { Rocket, Send, CheckCircle2, AlertCircle, Sparkles, User, Mail, BookOpen, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLUB_META } from '../data/clubData';

export const RegistrationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    year: '1st Year',
    source: 'Website Join Form'
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const branches = [
    'Mechanical Engineering',
    'Artificial Intelligence & Robotics (AIR)',
    'Computer Science & Engineering (CSE)',
    'Information Technology (IT)',
    'Electrical Engineering',
    'Electronics & Telecommunication',
    'Civil Engineering',
    'Chemical Engineering',
    'Automobile Engineering',
    'Other Engineering Discipline'
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Postgraduate / M.Tech'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: CLUB_META.web3formsKey,
          subject: `New Aerospace Club Registration: ${formData.name}`,
          name: formData.name,
          email: formData.email,
          branch: formData.branch,
          year: formData.year,
          source: formData.source,
          submitted_at: new Date().toISOString()
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Submission failed. Please check details or reach out via email.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network connection error. Please verify your connection or email aerospaceclub@mitsgwalior.in');
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/80 border-t border-amber-500/20">
      <div className="absolute inset-0 space-grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="hud-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden border-amber-500/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-xs font-mono text-amber-300">
              <Rocket className="w-3.5 h-3.5 text-amber-400" />
              <span>CREW INDUCTION & MEMBERSHIP</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              JOIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">OUR MISSION</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Ready to explore the cosmos with us? Join the Aerospace Club and be part of the next generation of space pioneers, rocketeers, and aerospace engineers at MITS Gwalior.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-10 space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white">Welcome Aboard, Explorer!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your application has been received by the club coordinators. We will reach out with upcoming orientation details and workshop schedules!
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setFormData({ name: '', email: '', branch: '', year: '1st Year', source: 'Website Join Form' });
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider bg-amber-400 text-black font-bold hover:bg-amber-300 transition-colors cursor-pointer"
              >
                Register Another Member
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aryan Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-amber-400 text-sm text-white placeholder:text-slate-500 outline-none transition-all font-sans"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. aryan.mits@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-amber-400 text-sm text-white placeholder:text-slate-500 outline-none transition-all font-sans"
                  />
                </div>

                {/* Academic Branch */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>Engineering Branch *</span>
                  </label>
                  <select
                    required
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-amber-400 text-sm text-white outline-none transition-all font-sans"
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-400">
                      Select your department / branch
                    </option>
                    {branches.map((b) => (
                      <option key={b} value={b} className="bg-slate-900 text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Academic Year */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Current Year *</span>
                  </label>
                  <select
                    required
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-amber-400 text-sm text-white outline-none transition-all font-sans"
                  >
                    {years.map((y) => (
                      <option key={y} value={y} className="bg-slate-900 text-white">
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-xl font-display font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Membership Registration</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] font-mono text-slate-500 mt-2">
                  Direct submission to the official Aerospace Club MITS registry. Free for all students.
                </p>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
