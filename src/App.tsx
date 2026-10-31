import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PracticeOverview } from './components/PracticeOverview';
import { PracticeAreas } from './components/PracticeAreas';
import { AboutFirm } from './components/AboutFirm';
import { AdvocatesDirectory } from './components/AdvocatesDirectory';
import { WhyUs } from './components/WhyUs';
import { Jurisdictions } from './components/Jurisdictions';
import { LocationMap } from './components/LocationMap';
import { Accreditations } from './components/Accreditations';
import { CaseStudy } from './components/CaseStudy';
import { CTASection } from './components/CTASection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { BarCouncilDisclaimer } from './components/BarCouncilDisclaimer';
import { PracticeModal } from './components/PracticeModal';
import { LawyerModal } from './components/LawyerModal';
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
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900 antialiased selection:bg-[#088395] selection:text-white">
      {/* Statutory Bar Council of India initial acceptance modal */}
      <BarCouncilDisclaimer />

      {/* Main Navigation with Top Bar (Matches Screenshot) */}
      <Navbar 
        onOpenConsultation={handleOpenConsultation}
        onSelectPractice={(id) => setSelectedPracticeId(id)}
        onSelectLawyer={(id) => setSelectedLawyerId(id)}
        textSize={textSize}
        onChangeTextSize={setTextSize}
        isHighContrast={isHighContrast}
        onToggleHighContrast={() => setIsHighContrast(prev => !prev)}
      />

      {/* Page Content Arranged in Screenshot Order */}
      <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
        
        {/* 1. Hero with Dark Overlay & Floating Consultation Form Card */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 2. 8-Card Grid 'Practice Domains We Serve' + Teal Stats Bar */}
        <PracticeOverview onSelectPractice={(id) => setSelectedPracticeId(id)} />

        {/* 3. 6-Card Services Section */}
        <PracticeAreas onSelectPractice={(id) => setSelectedPracticeId(id)} />

        {/* 4. Split About Section with Team Collaboration Photo */}
        <AboutFirm />

        {/* 5. 3 Stacked Large Teal Advocate Spotlight Cards + Regional Roster */}
        <AdvocatesDirectory 
          onSelectLawyer={(id) => setSelectedLawyerId(id)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 6. Tabbed Feature Section: Special Courts, High Court, NCLT, Sessions */}
        <WhyUs />

        {/* 7. Courts & Appearance Jurisdictions + Tribunals Banner */}
        <Jurisdictions />

        {/* 8. Chamber 238 Patiala House Location & Transit Map */}
        <LocationMap />

        {/* 9. Bar Council & Bar Association Accreditations Shield Badges */}
        <Accreditations />

        {/* 10. Featured Jurisprudential Analysis / Case Study */}
        <CaseStudy />

        {/* 11. Bottom Centered CTA Banner with Inline Pill Form */}
        <CTASection onOpenConsultation={handleOpenConsultation} />

        {/* 12. Full Case Intake Briefing Registry */}
        <ConsultationSection />

      </main>

      {/* Vibrant Deep Teal Footer */}
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
