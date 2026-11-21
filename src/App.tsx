import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutMissionSection } from './components/AboutMissionSection';
import { DirectionsSection } from './components/DirectionsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { EcosystemCommunitySection } from './components/EcosystemCommunitySection';
import { Web3RoadmapSection } from './components/Web3RoadmapSection';
import { SocialProfileCtaSection } from './components/SocialProfileCtaSection';
import { Footer } from './components/Footer';
import { AppLaunchModal } from './components/AppLaunchModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContextLabel, setModalContextLabel] = useState('Основное приложение SEA');

  const handleOpenAppModal = (contextLabel?: string) => {
    setModalContextLabel(contextLabel ?? 'Основное приложение SEA');
    setModalOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0B0D10] text-slate-100 flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-teal-400 focus:text-[#0B0D10] focus:text-xs focus:font-semibold"
        >
          Перейти к основному содержанию
        </a>

        <Header onOpenAppModal={handleOpenAppModal} />

        <main id="main-content" className="flex-1">
          <HeroSection onOpenAppModal={handleOpenAppModal} />
          <AboutMissionSection />
          <DirectionsSection />
          <HowItWorksSection />
          <EcosystemCommunitySection onOpenAppModal={handleOpenAppModal} />
          <Web3RoadmapSection />
          <SocialProfileCtaSection onOpenAppModal={handleOpenAppModal} />
        </main>

        <Footer />

        <AppLaunchModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          contextLabel={modalContextLabel}
        />
      </div>
    </MotionConfig>
  );
}
