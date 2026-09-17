import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { MembersSection } from '../components/MembersSection';
import { EventsSection } from '../components/EventsSection';
import { GallerySection } from '../components/GallerySection';
import { RegistrationSection } from '../components/RegistrationSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenJoinModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenJoinModal }) => {
  return (
    <main className="space-y-4">
      <HeroSection onNavigate={onNavigate} onOpenJoinModal={onOpenJoinModal} />
      <AboutSection />
      <MembersSection />
      <EventsSection />
      <GallerySection />
      <RegistrationSection />
    </main>
  );
};
