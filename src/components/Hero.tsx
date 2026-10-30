import React from 'react';
import { 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Clock,
  Landmark,
  Building,
  Gavel,
  BookOpen,
  Award
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const quickSpecializations = [
    "PMLA & Financial Crimes",
    "NDPS Act Special Defence",
    "Serious Fraud Office (SFIO)",
    "Supreme Court Writs & Appeals",
    "Commercial Arbitration & DIAC",
    "Administrative & CAT Tribunals"
  ];

  return (
    <section 
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-chambers-navy-950 text-white overflow-hidden border-b border-chambers-navy-850"
      aria-label="Welcome and Chambers Overview"
    >
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(179,142,84,0.15),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-chambers-navy-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Main Hero Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Chambers Registration & Seat Bar */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-chambers-navy-900 border border-chambers-gold-500/30 text-chambers-gold-300 text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-chambers-gold-400 animate-pulse" aria-hidden="true" />
              <MapPin className="w-3.5 h-3.5 text-chambers-gold-400 shrink-0" aria-hidden="true" />
              <span>{FIRM_DETAILS.establishedLocation}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Trial Rigor. Appellate Precision.{' '}
              <span className="block italic text-chambers-gold-400 font-normal">
                Forensic Legal Synergy.
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg text-chambers-stone-300 leading-relaxed max-w-2xl font-light">
              Synergy Chambers is a premier Delhi-headquartered litigation and advisory practice uniting trial lawyers, former regulatory prosecutors, and academic counsel to deliver formidable courtroom defence before the Supreme Court of India, High Courts, and Special Enforcement Tribunals.
            </p>

            {/* Special Statutory Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-chambers-stone-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-chambers-gold-400 shrink-0" aria-hidden="true" />
                <span>Special Statute Defence (PMLA, NDPS, SFIO, ED)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-chambers-gold-400 shrink-0" aria-hidden="true" />
                <span>Supreme Court of India &amp; High Courts Appellate Practice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-chambers-gold-400 shrink-0" aria-hidden="true" />
                <span>Direct Access to Arguing Counsel — Zero Dilution</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-chambers-gold-400 shrink-0" aria-hidden="true" />
                <span>Integrated Benches: Delhi • Chandigarh • Haryana</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-chambers-gold-500 hover:bg-chambers-gold-600 text-chambers-navy-950 font-bold text-xs tracking-wider uppercase transition-all shadow-subtle hover:shadow-premium cursor-pointer active:scale-95 group"
              >
                <span>Request Confidential Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>

              <a
                href="#practices"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-chambers-navy-900/90 hover:bg-chambers-navy-850 text-chambers-stone-200 hover:text-white border border-chambers-navy-800 hover:border-chambers-gold-500/40 font-semibold text-xs tracking-wider uppercase transition-all"
              >
                <span>Explore Practice Domains</span>
              </a>
            </div>

            {/* Quick Sector Tags */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-chambers-stone-400 block mb-2">
                Core Special Statutory Coverage:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickSpecializations.map((spec, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-[11px] px-2.5 py-1 rounded bg-chambers-navy-900 text-chambers-stone-300 border border-chambers-navy-800"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Visual Element - Authoritative Chambers Registry Warrant */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-chambers-navy-900 border border-chambers-gold-500/30 p-7 sm:p-8 shadow-elevated relative overflow-hidden backdrop-blur-sm space-y-6">
              
              {/* Foil Accent Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-chambers-gold-600 via-chambers-gold-400 to-chambers-gold-600" />

              {/* Warrant Header */}
              <div className="flex items-center justify-between pb-5 border-b border-chambers-navy-850">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-chambers-navy-950 border border-chambers-gold-500/35 flex items-center justify-center text-chambers-gold-400 shadow-subtle">
                    <Scale className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-white text-base tracking-wide leading-tight">
                      SYNERGY CHAMBERS
                    </h2>
                    <p className="text-xs text-chambers-gold-400 font-medium">
                      Patiala House Courts • Chamber 238
                    </p>
                  </div>
                </div>
                <span className="text-[10.5px] tracking-wider uppercase bg-chambers-gold-500/10 text-chambers-gold-300 border border-chambers-gold-500/25 px-2.5 py-1 rounded font-medium">
                  Delhi Seat
                </span>
              </div>

              {/* Judicial Quote Docket Inscription */}
              <div className="py-2 space-y-2">
                <blockquote className="border-l-2 border-chambers-gold-500 pl-4 py-1 font-serif text-lg sm:text-xl italic text-chambers-stone-100 leading-snug">
                  &ldquo;{FIRM_DETAILS.quote.text}&rdquo;
                </blockquote>
                <p className="text-xs text-chambers-gold-400 text-right font-display tracking-wider uppercase font-semibold">
                  — {FIRM_DETAILS.quote.author}
                </p>
              </div>

              {/* Verified Registry Details */}
              <div className="space-y-2.5 pt-3 border-t border-chambers-navy-850 text-xs">
                <div className="flex items-center justify-between text-chambers-stone-300 bg-chambers-navy-950/70 p-3 rounded-xl border border-chambers-navy-850">
                  <span className="text-chambers-stone-400 font-medium">Headquarters Seat</span>
                  <span className="text-white font-semibold">Chamber 238, Patiala House Courts</span>
                </div>
                <div className="flex items-center justify-between text-chambers-stone-300 bg-chambers-navy-950/70 p-3 rounded-xl border border-chambers-navy-850">
                  <span className="text-chambers-stone-400 font-medium">Regional Benches</span>
                  <span className="text-white font-semibold">Chandigarh High Court &amp; Haryana</span>
                </div>
                <div className="flex items-center justify-between text-chambers-stone-300 bg-chambers-navy-950/70 p-3 rounded-xl border border-chambers-navy-850">
                  <span className="text-chambers-stone-400 font-medium">Advocate Privilege</span>
                  <span className="text-chambers-gold-300 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-chambers-gold-400" aria-hidden="true" />
                    Sec. 126 Evidence Act Protected
                  </span>
                </div>
              </div>

              {/* Key Verification Metrics */}
              <div className="grid grid-cols-3 gap-2.5 pt-4 mt-2 border-t border-chambers-navy-850 text-center">
                <div className="bg-chambers-navy-950/80 p-2.5 rounded-xl border border-chambers-navy-850">
                  <span className="block font-serif text-lg sm:text-xl font-bold text-chambers-gold-400">150+</span>
                  <span className="block text-[10px] text-chambers-stone-400 uppercase tracking-wider mt-0.5">Special Trials</span>
                </div>
                <div className="bg-chambers-navy-950/80 p-2.5 rounded-xl border border-chambers-navy-850">
                  <span className="block font-serif text-lg sm:text-xl font-bold text-chambers-gold-400">3</span>
                  <span className="block text-[10px] text-chambers-stone-400 uppercase tracking-wider mt-0.5">Court Benches</span>
                </div>
                <div className="bg-chambers-navy-950/80 p-2.5 rounded-xl border border-chambers-navy-850">
                  <span className="block font-serif text-lg sm:text-xl font-bold text-chambers-gold-400">100%</span>
                  <span className="block text-[10px] text-chambers-stone-400 uppercase tracking-wider mt-0.5">Direct Counsel</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
