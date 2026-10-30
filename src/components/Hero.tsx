import React from 'react';
import { 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Landmark, 
  Gavel, 
  BookOpen, 
  Building2,
  FileCheck
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const statutes = [
    { code: "PMLA", label: "Money Laundering & Enforcement Directorate" },
    { code: "NDPS", label: "Narcotic Drugs & Special Court Trials" },
    { code: "SFIO", label: "Serious Fraud & Corporate Investigations" },
    { code: "POCSO", label: "Special Protection Enactments" },
    { code: "IBC", label: "Insolvency & Corporate Debtor Resolution" },
    { code: "BNS / IPC", label: "Criminal Defence & High Court Writs" }
  ];

  return (
    <section 
      aria-label="Chambers Overview & Primary Seat"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#09111E] text-white border-b border-[#142135] overflow-hidden"
    >
      {/* Subtle broadsheet background texture */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#B8934E_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Court Chambers Seat Masthead */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-[#1A2840] text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B8934E]" aria-hidden="true" />
            <span className="tracking-[0.2em] uppercase font-semibold text-[#CBD5E1] text-[11px]">
              Chambers Registry:
            </span>
            <span className="text-white font-medium">
              Chamber 238, Patiala House Courts, New Delhi 110001
            </span>
          </div>
          
          <div className="hidden sm:flex items-center gap-6 text-[11px] text-[#8A95A5]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8934E]" />
              <span>Privilege Protected: Sec. 126 Evidence Act</span>
            </span>
            <span className="text-[#1C2C44]">|</span>
            <span className="flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-[#B8934E]" />
              <span>Rule 36 BCI Compliant</span>
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-4">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#B8934E] font-bold">
                Litigation • Appellate Advocacy • Special Enactments
              </span>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Trial Rigor. Appellate Precision.{' '}
                <span className="block font-normal italic text-[#D6C298] font-serif mt-1">
                  Uncompromised Courtroom Advocacy.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-normal max-w-2xl">
              From our principal litigation chambers at Patiala House Courts in New Delhi, Synergy Chambers brings together seasoned trial advocates, former regulatory prosecutors, and academic counsel to prosecute and defend high-stakes legal briefs before the Supreme Court of India, High Courts, and Special Statutory Tribunals.
            </p>

            {/* Architectural Key Practice Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-2 text-xs sm:text-[13px] text-[#E2E8F0] border-y border-[#1A2840]">
              <div className="flex items-start gap-2.5 py-1">
                <span className="text-[#B8934E] font-serif text-base leading-none">§</span>
                <span>White-Collar &amp; Enforcement Defence (PMLA, SFIO, ED)</span>
              </div>
              <div className="flex items-start gap-2.5 py-1">
                <span className="text-[#B8934E] font-serif text-base leading-none">§</span>
                <span>Supreme Court Writs &amp; High Court Appellate Division</span>
              </div>
              <div className="flex items-start gap-2.5 py-1">
                <span className="text-[#B8934E] font-serif text-base leading-none">§</span>
                <span>Special Penal Trials (NDPS Bail &amp; POCSO Defence)</span>
              </div>
              <div className="flex items-start gap-2.5 py-1">
                <span className="text-[#B8934E] font-serif text-base leading-none">§</span>
                <span>Coordinated Delhi, Chandigarh &amp; Haryana District Benches</span>
              </div>
            </div>

            {/* Direct Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded bg-[#B8934E] hover:bg-[#A38344] text-[#09111E] font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md group"
              >
                <span>Submit Privileged Docket Brief</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#practices"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded border border-[#1E2D44] hover:border-[#B8934E] text-[#CBD5E1] hover:text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200"
              >
                <span>View Practice Registry</span>
              </a>
            </div>

          </div>

          {/* Right Visual Element: Authoritative Courtroom Composition */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#1A2840] bg-[#0C1626] p-2 shadow-2xl">
              
              {/* Classical Architectural Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden border border-[#142135]">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Neoclassical high court columns and law library volumes representing judicial authority" 
                  className="w-full h-full object-cover grayscale-[35%] contrast-[110%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1626] via-transparent to-transparent" />
                
                {/* Gold Seal Inset */}
                <div className="absolute top-4 right-4 bg-[#09111E]/90 backdrop-blur-md border border-[#B8934E]/60 p-2.5 shadow-lg flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#B8934E]" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E6E1D6]">
                    Est. Patiala House
                  </span>
                </div>
              </div>

              {/* Editorial Legal Plaque Below Image */}
              <div className="p-6 sm:p-7 space-y-5 bg-[#0C1626]">
                
                {/* Oliver Wendell Holmes Inscription */}
                <blockquote className="border-l-2 border-[#B8934E] pl-4 py-0.5 text-sm sm:text-base font-serif italic text-[#F3EFE6] leading-relaxed">
                  &ldquo;{FIRM_DETAILS.quote.text}&rdquo;
                </blockquote>
                <div className="text-right">
                  <span className="text-[10.5px] uppercase tracking-wider text-[#B8934E] font-semibold">
                    — {FIRM_DETAILS.quote.author}
                  </span>
                </div>

                {/* Registry Ledger Matrix */}
                <div className="pt-4 border-t border-[#142135] space-y-2.5 text-xs text-[#CBD5E1]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#142135]/60">
                    <span className="text-[#8A95A5]">Delhi Chambers:</span>
                    <span className="text-white font-medium">Chamber 238, Patiala House Courts</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#142135]/60">
                    <span className="text-[#8A95A5]">High Court Division:</span>
                    <span className="text-white font-medium">Punjab &amp; Haryana High Court, Chandigarh</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8A95A5]">District Practice:</span>
                    <span className="text-white font-medium">Gurugram • Rewari • Karnal • Panipat</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Full-Width Statutory Rosters Strip */}
        <div className="mt-16 pt-8 border-t border-[#142135]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <span className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-[#8A95A5]">
              Core Statutory Practice Rosters
            </span>
            <span className="text-[11px] text-[#B8934E]">
              Regular appearances before trial courts, High Courts &amp; specialized tribunals
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {statutes.map((item, idx) => (
              <div 
                key={idx}
                className="p-3 bg-[#0C1626] border border-[#142135] hover:border-[#B8934E]/50 transition-colors"
              >
                <span className="block font-serif text-base font-bold text-[#B8934E]">
                  {item.code}
                </span>
                <span className="block text-[11px] text-[#CBD5E1] mt-1 leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
