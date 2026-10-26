import React from 'react';
import { 
  ArrowRight, 
  Scale, 
  Building2, 
  Award, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-navy-950 text-white">
      {/* Editorial Background Atmosphere - Subtle and Dignified */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(172,133,73,0.08),rgba(10,16,23,0))]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Location & BCI Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/25 text-gold-300 text-xs tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Chamber No. 238, Patiala House Courts, New Delhi</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Advocacy With Purpose.{' '}
              <span className="block italic text-gold-400 font-normal">
                Strategy With Synergy.
              </span>
            </h1>

            {/* Subtitle / Firm Narrative */}
            <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed max-w-2xl font-light">
              Synergy Chambers is a premier Delhi-headquartered law firm uniting experienced advocates and solicitors to guide individuals, families, and institutions through high-stakes disputes and advisory — grounded in rigor, courtroom craft, and strategic integrity.
            </p>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 text-xs sm:text-sm text-charcoal-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Supreme Court &amp; High Courts Representation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Specialized PMLA, NDPS &amp; Financial Defence</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Direct Access to Counsel — Zero Layers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Integrated Delhi, Chandigarh &amp; Haryana Benches</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-subtle hover:shadow-premium active:scale-95 group"
              >
                <span>Request Confidential Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#practices"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-navy-900/80 hover:bg-navy-850 text-charcoal-200 hover:text-white border border-navy-800 hover:border-gold-500/40 font-semibold text-xs tracking-wider uppercase transition-all"
              >
                <span>Explore Practice Areas</span>
              </a>
            </div>
          </div>

          {/* Right Hero Visual Card - Dignified Chambers Warrant */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-navy-900 border border-gold-500/30 p-6 sm:p-8 shadow-elevated relative overflow-hidden">
              
              {/* Court Seal Emblem & Identification */}
              <div className="flex items-center justify-between pb-6 border-b border-navy-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-navy-850 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base tracking-wide">SYNERGY CHAMBERS</h3>
                    <p className="text-xs text-gold-400 font-medium">Headquarters • Patiala House Courts</p>
                  </div>
                </div>
                <span className="text-[10px] tracking-wider uppercase bg-gold-500/10 text-gold-400 border border-gold-500/25 px-2.5 py-1 rounded font-medium">
                  Est. 2026
                </span>
              </div>

              {/* Firm Principle / Philosophical Statement */}
              <div className="py-6 space-y-3">
                <blockquote className="border-l-2 border-gold-500 pl-4 py-1 font-serif text-lg sm:text-xl italic text-charcoal-100 leading-snug">
                  &ldquo;{FIRM_DETAILS.quote.text}&rdquo;
                </blockquote>
                <p className="text-xs text-gold-400 text-right font-medium tracking-wide">
                  — {FIRM_DETAILS.quote.author}
                </p>
              </div>

              {/* Core Pillars Mini Grid */}
              <div className="grid grid-cols-2 gap-3 pt-5 border-t border-navy-800">
                <div className="bg-navy-850/70 p-3.5 rounded-lg border border-navy-800">
                  <div className="text-gold-400 text-xs font-semibold mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    Central Delhi
                  </div>
                  <div className="text-[11px] text-charcoal-400 leading-relaxed">
                    Chamber 238 at Patiala House Courts complex.
                  </div>
                </div>

                <div className="bg-navy-850/70 p-3.5 rounded-lg border border-navy-800">
                  <div className="text-gold-400 text-xs font-semibold mb-1 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    Trial Heritage
                  </div>
                  <div className="text-[11px] text-charcoal-400 leading-relaxed">
                    Prior Special Counsel for NCB &amp; ED prosecutions.
                  </div>
                </div>
              </div>

              {/* Consultation Availability Status */}
              <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-charcoal-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Chambers open for consultation
                </span>
                <a 
                  href="#contact" 
                  className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-1"
                >
                  Office details <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-navy-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-left space-y-1">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              100<span className="text-gold-400 font-normal">+</span>
            </div>
            <div className="text-xs text-charcoal-400 uppercase tracking-wider font-semibold">
              NDPS Trials Managed
            </div>
          </div>

          <div className="text-left space-y-1">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              50<span className="text-gold-400 font-normal">+</span>
            </div>
            <div className="text-xs text-charcoal-400 uppercase tracking-wider font-semibold">
              PMLA Proceedings Handled
            </div>
          </div>

          <div className="text-left space-y-1">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              9<span className="text-gold-400 font-normal">+</span>
            </div>
            <div className="text-xs text-charcoal-400 uppercase tracking-wider font-semibold">
              Core Practice Areas
            </div>
          </div>

          <div className="text-left space-y-1">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              3
            </div>
            <div className="text-xs text-charcoal-400 uppercase tracking-wider font-semibold">
              Regional Chambers Hubs
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
