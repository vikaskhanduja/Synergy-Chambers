import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutFirm } from './components/AboutFirm';
import { WhyUs } from './components/WhyUs';
import { PracticeAreas } from './components/PracticeAreas';
import { PracticeModal } from './components/PracticeModal';
import { AdvocatesDirectory } from './components/AdvocatesDirectory';
import { LawyerModal } from './components/LawyerModal';
import { Jurisdictions } from './components/Jurisdictions';
import { LocationMap } from './components/LocationMap';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { BarCouncilDisclaimer } from './components/BarCouncilDisclaimer';
import { LegalModals } from './components/LegalModals';
import { 
  PRACTICE_AREAS, 
  FOUNDERS, 
  CHANDIGARH_TEAM, 
  HARYANA_TEAM, 
  PracticeArea, 
  Lawyer 
} from './data/firmData';

export function App() {
  const [selectedPracticeId, setSelectedPracticeId] = useState<string | null>(null);
  const [selectedLawyerId, setSelectedLawyerId] = useState<string | null>(null);
  const [legalModalType, setLegalModalType] = useState<'disclaimer' | 'privacy' | null>(null);

  // GIGW 3.0 / WCAG 2.1 AA Accessibility State
  const [textSize, setTextSize] = useState<'sm' | 'md' | 'lg'>(() => {
    const saved = localStorage.getItem('synergy_text_size');
    return (saved === 'sm' || saved === 'lg') ? saved : 'md';
  });

  const [isHighContrast, setIsHighContrast] = useState<boolean>(() => {
    return localStorage.getItem('synergy_high_contrast') === 'true';
  });

  // Effect: Manage accessibility classes on root <html> element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg');
    root.classList.add(`text-size-${textSize}`);
    localStorage.setItem('synergy_text_size', textSize);
  }, [textSize]);

  useEffect(() => {
    const root = document.documentElement;
    if (isHighContrast) {
      root.classList.add('high-contrast');
      localStorage.setItem('synergy_high_contrast', 'true');
    } else {
      root.classList.remove('high-contrast');
      localStorage.setItem('synergy_high_contrast', 'false');
    }
  }, [isHighContrast]);

  const allLawyers: Lawyer[] = [...FOUNDERS, ...CHANDIGARH_TEAM, ...HARYANA_TEAM];

  const selectedPractice: PracticeArea | null = selectedPracticeId
    ? PRACTICE_AREAS.find(p => p.id === selectedPracticeId) || null
    : null;

  const selectedLawyer: Lawyer | null = selectedLawyerId
    ? allLawyers.find(l => l.id === selectedLawyerId) || null
    : null;

  const handleOpenConsultation = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-atelier-bone flex flex-col font-sans text-atelier-black antialiased selection:bg-atelier-gold selection:text-atelier-black">
      {/* Statutory Bar Council of India initial acceptance modal */}
      <BarCouncilDisclaimer />

      {/* Main Navigation with GIGW Toolbar */}
      <Navbar 
        onOpenConsultation={handleOpenConsultation}
        onSelectPractice={(id) => setSelectedPracticeId(id)}
        onSelectLawyer={(id) => setSelectedLawyerId(id)}
        textSize={textSize}
        onChangeTextSize={setTextSize}
        isHighContrast={isHighContrast}
        onToggleHighContrast={() => setIsHighContrast(prev => !prev)}
      />

      {/* Page Sections with GIGW Main Content Target */}
      <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
        {/* Architectural Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* About Firm & Historic Chambers Narrative */}
        <AboutFirm />

        {/* Why Synergy Chambers (4 Principles of Advocacy) */}
        <WhyUs />

        {/* Interactive Master-Detail Practice Explorer */}
        <PracticeAreas 
          onSelectPractice={(id) => setSelectedPracticeId(id)} 
        />

        {/* Unified Advocates & Leadership Directory (Founders, Chandigarh, Haryana) */}
        <AdvocatesDirectory 
          onSelectLawyer={(id) => setSelectedLawyerId(id)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Court Jurisdictions & Regular Appearance Matrix */}
        <Jurisdictions />

        {/* Patiala House Courts Chambers Location & Access Map */}
        <LocationMap />

        {/* Privileged & Confidential Consultation Intake Portal */}
        <ConsultationSection />
      </main>

      {/* Firm Footer & Regulatory Compliance Sitemap */}
      <Footer 
        onOpenConsultation={handleOpenConsultation}
        onOpenDisclaimer={() => setLegalModalType('disclaimer')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
      />

      {/* Practice Area Deep Dive Modal */}
      <PracticeModal 
        practice={selectedPractice}
        onClose={() => setSelectedPracticeId(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Advocate Curriculum Vitae Modal */}
      <LawyerModal 
        lawyer={selectedLawyer}
        onClose={() => setSelectedLawyerId(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Static Legal Disclaimers & Client Privilege Modals */}
      <LegalModals 
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
