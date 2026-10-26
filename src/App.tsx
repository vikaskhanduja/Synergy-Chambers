import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutFirm } from './components/AboutFirm';
import { WhyUs } from './components/WhyUs';
import { PracticeAreas } from './components/PracticeAreas';
import { PracticeModal } from './components/PracticeModal';
import { Founders } from './components/Founders';
import { RegionalTeam } from './components/RegionalTeam';
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
    <div className="min-h-screen bg-[#FAFBF8] flex flex-col font-sans text-charcoal-800 antialiased selection:bg-gold-500 selection:text-white">
      {/* Statutory Bar Council of India initial acceptance modal */}
      <BarCouncilDisclaimer />

      {/* Main Navigation */}
      <Navbar 
        onOpenConsultation={handleOpenConsultation}
        onSelectPractice={(id) => setSelectedPracticeId(id)}
        onSelectLawyer={(id) => setSelectedLawyerId(id)}
      />

      {/* Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* About Firm & Historic Chambers Narrative */}
        <AboutFirm />

        {/* Why Synergy Chambers (4 Pillars & Oliver Wendell Holmes quote) */}
        <WhyUs />

        {/* Practice Areas & Legal Services */}
        <PracticeAreas 
          onSelectPractice={(id) => setSelectedPracticeId(id)} 
        />

        {/* Founders & Leadership */}
        <Founders 
          onSelectLawyer={(id) => setSelectedLawyerId(id)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Regional Benches: Chandigarh & Haryana */}
        <RegionalTeam 
          onSelectLawyer={(id) => setSelectedLawyerId(id)} 
        />

        {/* Court Jurisdictions & Appearance Forums */}
        <Jurisdictions />

        {/* Patiala House Courts Chambers Location Map */}
        <LocationMap />

        {/* Confidential Consultation Request Portal */}
        <ConsultationSection />
      </main>

      {/* Footer */}
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

      {/* Static Legal Disclaimers & Privacy Policy Modals */}
      <LegalModals 
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
