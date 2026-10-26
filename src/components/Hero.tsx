import React from 'react';
import { 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2,
  PhoneCall,
  Clock,
  Landmark,
  FileText
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-[94vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-navy-950 text-white">
      {/* Background Courtroom Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none docket-pattern opacity-40" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gold-500/[0.04] blur-3xl rounded-full" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Main Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Chambers Registration & Seat Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-300 text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Chamber No. 238, Patiala House Courts, New Delhi</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Vigorous Advocacy.{' '}
              <span className="block italic text-gold-400 font-normal">
                Strategic Integrity.
              </span>
            </h1>

            {/* Subtitle / Firm Narrative */}
            <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed max-w-2xl font-light">
              Synergy Chambers is a premier Delhi-headquartered litigation and advisory practice uniting trial lawyers, former regulatory prosecutors, and academic counsel to deliver formidable courtroom defence before the Supreme Court, High Courts, and Special Enforcement Tribunals.
            </p>

            {/* Core Practice Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 text-xs sm:text-sm text-charcoal-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Special Statute Defence (PMLA, NDPS, SFIO, ED)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Supreme Court of India &amp; High Courts Appellate Practice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Direct Access to Arguing Counsel — No Intermediaries</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Integrated Benches: Delhi • Chandigarh • Haryana</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-subtle hover:shadow-premium cursor-pointer active:scale-95 group"
              >
                <span>Request Confidential Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#practices"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-navy-900/80 hover:bg-navy-850 text-charcoal-200 hover:text-white border border-navy-800 hover:border-gold-500/40 font-semibold text-xs tracking-wider uppercase transition-all"
              >
                <span>Explore Practice Domains</span>
              </a>
            </div>

            {/* Quick Urgent Filing Advisory */}
            <div className="pt-2 text-xs text-charcoal-400 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>For urgent listings, bail mentions, or emergency stay applications: direct review within business hours.</span>
            </div>

          </div>

          {/* Right Visual Card - Prestigious Chambers Warrant / Legal Docket */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-navy-900/95 border border-gold-500/35 p-6 sm:p-8 shadow-elevated relative overflow-hidden backdrop-blur-md">
              
              {/* Foil Trim Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

              {/* Warrant Header */}
              <div className="flex items-center justify-between pb-5 border-b border-navy-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-navy-950 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-subtle">
                    <Scale className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base tracking-wide">SYNERGY CHAMBERS</h3>
                    <p className="text-xs text-gold-400 font-medium tracking-wide">Advocates &amp; Solicitors • Chamber 238</p>
                  </div>
                </div>
                <span className="text-[10px] tracking-wider uppercase bg-gold-500/10 text-gold-300 border border-gold-500/30 px-2.5 py-1 rounded font-medium">
                  Patiala House
                </span>
              </div>

              {/* Philosophical Quote Docket Inscription */}
              <div className="py-6 space-y-3">
                <blockquote className="border-l-2 border-gold-500 pl-4 py-1 font-serif text-lg sm:text-xl italic text-charcoal-100 leading-snug">
                  &ldquo;{FIRM_DETAILS.quote.text}&rdquo;
                </blockquote>
                <p className="text-xs text-gold-400 text-right font-medium tracking-wider uppercase font-display">
                  — {FIRM_DETAILS.quote.author}
                </p>
              </div>

              {/* Verified Docket Slip Information */}
              <div className="space-y-3 pt-5 border-t border-navy-800 text-xs">
                <div className="flex items-center justify-between text-charcoal-300 bg-navy-950/70 p-3 rounded-xl border border-navy-800/80">
                  <span className="text-charcoal-400 font-medium">Headquarters Seat</span>
                  <span className="text-white font-semibold">Patiala House Courts, New Delhi</span>
                </div>
                <div className="flex items-center justify-between text-charcoal-300 bg-navy-950/70 p-3 rounded-xl border border-navy-800/80">
                  <span className="text-charcoal-400 font-medium">Appellate Regional Benches</span>
                  <span className="text-white font-semibold">Chandigarh &amp; Haryana District Courts</span>
                </div>
                <div className="flex items-center justify-between text-charcoal-300 bg-navy-950/70 p-3 rounded-xl border border-navy-800/80">
                  <span className="text-charcoal-400 font-medium">Statutory Compliance</span>
                  <span className="text-gold-400 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Bar Council of India Rule 36
                  </span>
                </div>
              </div>

              {/* Fast Chambers Metrics */}
              <div className="grid grid-cols-3 gap-2.5 pt-5 mt-5 border-t border-navy-800 text-center">
                <div className="bg-navy-950/60 p-2.5 rounded-lg border border-navy-800">
                  <span className="block font-serif text-lg sm:text-xl font-bold text-gold-400">150+</span>
                  <span className="block text-[10px] text-charcoal-400 uppercase tracking-wider mt-0.5">Special Trials</span>
                </div>
                <div className="bg-navy-950/60 p-2.5 rounded-lg border border-navy-800">
                  <span className="block font-serif text-lg sm:text-xl font-bold text-gold-400">3</span>
                  <span className="block text-[10px] text-charcoal-400 uppercase tracking-wider mt-0.5">Court Benches</span>
                </div>
                <div className="bg-navy-950/60 p-2.5 rounded-lg border border-navy-800">
                  <span className="block font-serif text-lg sm:text-xl font-bold text-gold-400">100%</span>
                  <span className="block text-[10px] text-charcoal-400 uppercase tracking-wider mt-0.5">Direct Counsel</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
