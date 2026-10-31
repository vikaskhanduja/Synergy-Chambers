import React from 'react';
import { 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Landmark, 
  Building2,
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const statuteFolio = [
    { code: "PMLA", label: "Money Laundering & Enforcement Directorate Inquiries" },
    { code: "NDPS", label: "Special Narcotic Drugs Defence & Bail Hearings" },
    { code: "SFIO", label: "Corporate Fraud & Regulatory Investigations" },
    { code: "POCSO", label: "Special Protection Trials & Evidentiary Defence" },
    { code: "IBC", label: "Insolvency Resolution & Commercial Tribunals" },
    { code: "BNS / IPC", label: "Criminal Trial Advocacy & High Court Writs" }
  ];

  return (
    <section 
      aria-label="Chambers Overview & Primary Seat"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-atelier-bone text-atelier-carbon border-b border-atelier-sand overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Gazette Folio Registry Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-10 border-b border-atelier-sand text-xs tracking-loose-editorial uppercase font-medium text-atelier-taupe">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-atelier-bronze" aria-hidden="true" />
            <span className="text-atelier-carbon font-bold">Gazette Folio:</span>
            <span>Chamber 238, Patiala House Courts, New Delhi 110001</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-6 text-[11px]">
            <span className="flex items-center gap-1.5 text-atelier-carbon">
              <ShieldCheck className="w-3.5 h-3.5 text-atelier-bronze" />
              <span>Privilege: Sec. 126 Evidence Act</span>
            </span>
            <span className="text-atelier-sand">/</span>
            <span className="flex items-center gap-1.5 text-atelier-carbon">
              <Landmark className="w-3.5 h-3.5 text-atelier-bronze" />
              <span>Rule 36 BCI Compliant</span>
            </span>
          </div>
        </div>

        {/* Monumental Typographic Headline */}
        <div className="space-y-4 mb-12">
          <span className="text-xs tracking-monumental uppercase font-bold text-atelier-bronze block">
            Litigation • Appellate Advocacy • Special Enactments
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-atelier-carbon leading-[1.08]">
            Advocacy at the Bar of Justice.{' '}
            <span className="block italic font-normal text-atelier-bronze font-serif mt-1">
              Rigor in the Trial Courtroom.
            </span>
          </h1>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-12 border-b border-atelier-sand">
          
          {/* Left Preamble & Action */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-atelier-slate leading-relaxed font-normal">
              Operating directly from <strong className="text-atelier-carbon font-semibold">Chamber No. 238 inside the Patiala House Courts complex in New Delhi</strong>, Synergy Chambers prosecutes and defends complex criminal trials, white-collar investigations, commercial arbitrations, and high court appellate reviews across North India.
            </p>

            {/* Core Capability Ledger */}
            <div className="py-2 border-y border-atelier-sand space-y-2.5 text-xs sm:text-[13px] text-atelier-carbon">
              <div className="flex items-start gap-2.5 py-1 border-b border-atelier-sand/60">
                <span className="text-atelier-bronze font-serif text-base leading-none font-bold">§ 01</span>
                <span>White-Collar &amp; Special Statute Enforcement Defence (PMLA, SFIO, ED)</span>
              </div>
              <div className="flex items-start gap-2.5 py-1 border-b border-atelier-sand/60">
                <span className="text-atelier-bronze font-serif text-base leading-none font-bold">§ 02</span>
                <span>Supreme Court Writs &amp; High Court Appellate Division Advocacy</span>
              </div>
              <div className="flex items-start gap-2.5 py-1 border-b border-atelier-sand/60">
                <span className="text-atelier-bronze font-serif text-base leading-none font-bold">§ 03</span>
                <span>Special Penal Trials (NDPS Bail &amp; POCSO Special Courts Defense)</span>
              </div>
              <div className="flex items-start gap-2.5 py-1">
                <span className="text-atelier-bronze font-serif text-base leading-none font-bold">§ 04</span>
                <span>Direct Access to Arguing Counsel — Coordinated Delhi, Chandigarh &amp; Haryana</span>
              </div>
            </div>

            {/* Direct Consultation Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-atelier-carbon hover:bg-atelier-bronze text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm group"
              >
                <span>Submit Privileged Case Brief</span>
                <ArrowRight className="w-4 h-4 text-atelier-gold group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#practices"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-atelier-carbon text-atelier-carbon hover:bg-atelier-carbon hover:text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200"
              >
                <span>Explore Practice Folio</span>
              </a>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6">
            <div className="border border-atelier-sand bg-white p-3 shadow-atelier-card">
              
              {/* Classical Architectural Image with Archival Filter */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-atelier-sand/60 bg-atelier-bone">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Neoclassical high court columns and law library volumes representing judicial authority" 
                  className="w-full h-full object-cover grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-atelier-carbon/80 via-transparent to-transparent" />
                
                {/* Gold Seal Inset */}
                <div className="absolute top-4 right-4 bg-atelier-carbon text-white border border-atelier-gold/60 p-2.5 shadow-md flex items-center gap-2">
                  <Scale className="w-4 h-4 text-atelier-gold" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-atelier-fog">
                    Patiala House Seat
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-atelier-gold font-bold block mb-0.5">
                    Judicial Authority:
                  </span>
                  <span className="font-serif italic text-sm text-atelier-fog block">
                    &ldquo;{FIRM_DETAILS.quote.text}&rdquo;
                  </span>
                  <span className="text-[10px] tracking-wider text-atelier-sand block mt-0.5">
                    — {FIRM_DETAILS.quote.author}
                  </span>
                </div>
              </div>

              {/* Chambers Ledger Below Image */}
              <div className="p-5 bg-atelier-fog border-t border-atelier-sand space-y-2 text-xs text-atelier-slate">
                <div className="flex items-center justify-between pb-1.5 border-b border-atelier-sand/60">
                  <span className="text-atelier-taupe font-medium">Headquarters Seat:</span>
                  <span className="text-atelier-carbon font-semibold">Chamber 238, Patiala House Courts</span>
                </div>
                <div className="flex items-center justify-between pb-1.5 border-b border-atelier-sand/60">
                  <span className="text-atelier-taupe font-medium">High Court Division:</span>
                  <span className="text-atelier-carbon font-semibold">Punjab &amp; Haryana High Court, Chandigarh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-atelier-taupe font-medium">District Practice:</span>
                  <span className="text-atelier-carbon font-semibold">Gurugram • Rewari • Karnal • Panipat</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Horizontal Statute Index Ledger */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <span className="text-[10.5px] uppercase tracking-monumental font-bold text-atelier-bronze">
              Core Statutory Rosters
            </span>
            <span className="text-[11px] text-atelier-taupe">
              Trial Courts • High Courts • Special Tribunals (PMLA / NDPS / NCLT)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {statuteFolio.map((statute, idx) => (
              <div 
                key={idx}
                className="p-3.5 bg-white border border-atelier-sand hover:border-atelier-bronze transition-colors shadow-atelier-subtle"
              >
                <span className="block font-serif text-base font-bold text-atelier-bronze">
                  {statute.code}
                </span>
                <span className="block text-[11px] text-atelier-slate mt-1 leading-snug">
                  {statute.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
