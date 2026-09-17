import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CosmosCornerPage } from './pages/CosmosCornerPage';
import { QuizPage } from './pages/QuizPage';
import { SkywatchPage } from './pages/SkywatchPage';
import { JoinModal } from './components/JoinModal';
import { Telescope, ArrowUp, Rocket, Compass, HelpCircle } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Initialize and synchronize with browser URL
  useEffect(() => {
    const syncRoute = () => {
      const pathname = window.location.pathname.toLowerCase();
      if (pathname === '/cosmoscorner' || pathname === '/cosmos-corner') {
        setCurrentPath('/cosmoscorner');
      } else if (pathname === '/quiz') {
        setCurrentPath('/quiz');
      } else if (pathname === '/skywatch' || pathname === '/sky-watch') {
        setCurrentPath('/skywatch');
      } else {
        setCurrentPath('/');
      }
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  // Track scroll position for Back-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Avionics Top Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      {/* Main Page Router */}
      <div className="flex-grow">
        {currentPath === '/cosmoscorner' && (
          <CosmosCornerPage onNavigate={handleNavigate} />
        )}
        {currentPath === '/quiz' && (
          <QuizPage onNavigate={handleNavigate} />
        )}
        {currentPath === '/skywatch' && (
          <SkywatchPage onNavigate={handleNavigate} />
        )}
        {currentPath === '/' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenJoinModal={() => setIsJoinModalOpen(true)}
          />
        )}
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Quick Join Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        {/* Floating SkyWatch 2.0 CTA when not on skywatch page */}
        {currentPath !== '/skywatch' && (
          <button
            onClick={() => handleNavigate('/skywatch')}
            aria-label="Open SkyWatch 2.0 Page"
            className="group px-3.5 py-2 rounded-full bg-amber-950/90 hover:bg-amber-900 border border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center gap-2 text-xs font-mono font-bold transition-all cursor-pointer animate-pulse hover:animate-none"
          >
            <Telescope className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">SkyWatch 2.0 Live</span>
          </button>
        )}

        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-slate-900/90 hover:bg-amber-500 hover:text-black text-slate-300 border border-slate-700 hover:border-amber-400 transition-all shadow-lg cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
}
