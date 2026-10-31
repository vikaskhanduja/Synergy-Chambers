import React from 'react';
import { 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Landmark, 
  Building2,
  FileCheck
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const statutes = [
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
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-forest-950 text-white border-b border-forest-850 overflow-hidden"
    >
      {/* Subtle broadsheet stationery pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Court Chambers Registry Masthead */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-12 border-b border-forest-800 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-aurum-400" aria-hidden="true" />
            <span className="tracking-[0.22em] uppercase font-bold text-ink-300 text-[10.5px]">
              Chambers Registry:
            </span>
            <span className="text-white font-medium">
              Chamber 238, Patiala House Courts, New Delhi 110001
            </span>
          </div>
          
          <div className="hidden sm:flex items-center gap-6 text-[11px] text-ink-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-aurum-400" />
              <span>Privilege Protected: Sec. 126 Evidence Act</span>
            </span>
            <span className="text-forest-800">/</span>
            <span className="flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-aurum-400" />
              <span>Rule 36 BCI Compliant</span>
            </span>
          </div>
        </div>

        {/* Asymmetrical Broad-Sheet Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-4">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-aurum-400 font-bold">
                Litigation • Appellate Advocacy • Special Enactments
              </span>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                Trial Rigor at the Bar.{' '}
                <span className="block font-normal italic text-aurum-300 font-serif mt-1">
                  Uncompromised Courtroom Advocacy.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-ink-200 leading-relaxed font-normal max-w-2xl">
              From our principal litigation chambers at Patiala House Courts in New Delhi, Synergy Chambers unites seasoned trial advocates, former regulatory prosecutors, and academic counsel to prosecute and defend high-stakes legal briefs before the Supreme Court of India, High Courts, and Special Statutory Tribunals.
            </p>

            {/* Core Capability Ledger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-3 text-xs sm:text-[13px] text-chalk-50 border-y border-forest-800">
              <div className="flex items-start gap-2.5 py-0.5">
                <span className="text-aurum-400 font-serif text-base leading-none">§</span>
                <span>White-Collar &amp; Enforcement Defence (PMLA, SFIO, ED)</span>
              </div>
              <div className="flex items-start gap-2.5 py-0.5">
                <span className="text-aurum-400 font-serif text-base leading-none">§</span>
                <span>Supreme Court Writs &amp; High Court Appellate Division</span>
              </div>
              <div className="flex items-start gap-2.5 py-0.5">
                <span className="text-aurum-400 font-serif text-base leading-none">§</span>
                <span>Special Penal Trials (NDPS Bail &amp; POCSO Special Courts)</span>
              </div>
              <div className="flex items-start gap-2.5 py-0.5">
                <span className="text-aurum-400 font-serif text-base leading-none">§</span>
                <span>Coordinated Delhi, Chandigarh &amp; Haryana District Benches</span>
              </div>
            </div>

            {/* Direct Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-aurum-500 hover:bg-aurum-600 text-forest-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md group"
              >
                <span>Submit Privileged Docket Brief</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#practices"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-forest-750 hover:border-aurum-400 text-ink-200 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200"
              >
                <span>View Practice Registry</span>
              </a>
            </div>

          </div>

          {/* Right Visual Element: Authoritative Courtroom Composition */}
          <div className="lg:col-span-5">
            <div className="border border-forest-800 bg-forest-900 p-2 shadow-2xl">
              
              {/* Neoclassical High Court Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden border border-forest-850">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Neoclassical high court columns and law library volumes representing judicial authority" 
                  className="w-full h-full object-cover grayscale-[30%] contrast-[110%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent" />
                
                {/* Gold Seal Inset */}
                <div className="absolute top-4 right-4 bg-forest-950/90 backdrop-blur-md border border-aurum-500/60 p-2.5 shadow-lg flex items-center gap-2">
                  <Scale className="w-4 h-4 text-aurum-400" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-chalk-50">
                    Est. Patiala House
                  </span>
                </div>
              </div>

              {/* Editorial Legal Plaque Below Image */}
              <div className="p-6 sm:p-7 space-y-5 bg-forest-900">
                
                {/* Oliver Wendell Holmes Inscription */}
                <blockquote className="border-l-2 border-aurum-500 pl-4 py-0.5 text-sm sm:text-base font-serif italic text-chalk-100 leading-relaxed">
                  &ldquo;{FIRM_DETAILS.quote.text}&rdquo;
                </blockquote>
                <div className="text-right">
                  <span className="text-[10.5px] uppercase tracking-wider text-aurum-400 font-semibold">
                    — {FIRM_DETAILS.quote.author}
                  </span>
                </div>

                {/* Registry Ledger Matrix */}
                <div className="pt-4 border-t border-forest-800 space-y-2.5 text-xs text-ink-200">
                  <div className="flex items-center justify-between pb-2 border-b border-forest-850">
                    <span className="text-ink-400">Delhi Chambers:</span>
                    <span className="text-white font-medium">Chamber 238, Patiala House Courts</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-forest-850">
                    <span className="text-ink-400">High Court Division:</span>
                    <span className="text-white font-medium">Punjab &amp; Haryana High Court, Chandigarh</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-ink-400">District Practice:</span>
                    <span className="text-white font-medium">Gurugram • Rewari • Karnal • Panipat</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Full-Width Statutory Rosters Strip */}
        <div className="mt-16 pt-8 border-t border-forest-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <span className="text-[10.5px] uppercase tracking-[0.2em] font-bold text-ink-400">
              Core Statutory Practice Rosters
            </span>
            <span className="text-[11px] text-aurum-400">
              Regular appearances before trial courts, High Courts &amp; specialized tribunals
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {statutes.map((item, idx) => (
              <div 
                key={idx}
                className="p-3 bg-forest-900 border border-forest-800 hover:border-aurum-500/50 transition-colors"
              >
                <span className="block font-serif text-base font-bold text-aurum-400">
                  {item.code}
                </span>
                <span className="block text-[11px] text-ink-200 mt-1 leading-snug">
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
