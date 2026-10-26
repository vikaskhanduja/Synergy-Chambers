import React from 'react';
import { 
  ShieldCheck, 
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
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-navy-950">
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,168,128,0.15),rgba(255,255,255,0))]" />
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-10 bottom-10 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle grid lines reminiscent of classical legal columns */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#C5A880_1px,transparent_1px),linear-gradient(to_bottom,#C5A880_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Location & BCI Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Chamber No. 238, Patiala House Courts, New Delhi</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Advocacy With Purpose.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600">
                Strategy With Synergy.
              </span>
            </h1>

            {/* Subtitle / Firm Description */}
            <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed max-w-2xl font-light">
              Synergy Chambers is a Delhi-based full-service law firm bringing together experienced advocates and solicitors to guide individuals, families, and businesses through complex legal challenges — with clarity, integrity, and results.
            </p>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-charcoal-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Supreme Court &amp; High Courts Representation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Specialized PMLA, NDPS &amp; Financial Defence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Direct Access to Counsel — Zero Layers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Integrated Delhi, Chandigarh &amp; Haryana Benches</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-gold-500/25 active:scale-95 group"
              >
                <span>Request Confidential Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#practices"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-navy-900 hover:bg-navy-850 text-white border border-navy-700 hover:border-gold-500/50 font-medium text-sm transition-all"
              >
                <span>Explore Practice Areas</span>
              </a>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative framing */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/30 to-navy-700/50 rounded-2xl blur-sm" />
              
              <div className="relative rounded-2xl bg-gradient-to-b from-navy-900 to-navy-950 border border-gold-500/30 p-6 sm:p-8 shadow-2xl">
                {/* Court Seal Emblem */}
                <div className="flex items-center justify-between pb-6 border-b border-navy-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-navy-850 border border-gold-500/40 flex items-center justify-center text-gold-400">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-white text-base">SYNERGY CHAMBERS</h3>
                      <p className="text-xs text-gold-400 font-medium">Headquarters • Patiala House Courts</p>
                    </div>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase bg-gold-500/10 text-gold-400 border border-gold-500/20 px-2.5 py-1 rounded">
                    Est. 2026
                  </span>
                </div>

                {/* Firm Approach / Statement */}
                <div className="py-6 space-y-4">
                  <blockquote className="border-l-2 border-gold-500 pl-4 py-1 italic text-charcoal-200 text-sm leading-relaxed">
                    &ldquo;{FIRM_DETAILS.quote.text}&rdquo;
                  </blockquote>
                  <p className="text-xs text-gold-400/90 text-right font-medium">
                    — {FIRM_DETAILS.quote.author}
                  </p>
                </div>

                {/* Core Pillars Mini Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-navy-800">
                  <div className="bg-navy-850/60 p-3 rounded-lg border border-navy-800">
                    <div className="text-gold-400 text-xs font-semibold mb-1 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      Central Delhi
                    </div>
                    <div className="text-[11px] text-charcoal-300">
                      Chamber 238 at Patiala House Courts complex.
                    </div>
                  </div>

                  <div className="bg-navy-850/60 p-3 rounded-lg border border-navy-800">
                    <div className="text-gold-400 text-xs font-semibold mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      Trial Proven
                    </div>
                    <div className="text-[11px] text-charcoal-300">
                      Prior Special Counsel for NCB &amp; ED.
                    </div>
                  </div>
                </div>

                {/* Consultation Availability Status */}
                <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-charcoal-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Chambers open for consultation
                  </span>
                  <a 
                    href="#contact" 
                    className="text-gold-400 hover:text-gold-300 font-medium inline-flex items-center gap-1"
                  >
                    Office details <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-navy-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-left space-y-1">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              100<span className="text-gold-500">+</span>
            </div>
            <div className="text-xs sm:text-sm text-charcoal-400 uppercase tracking-wider font-medium">
              NDPS Trials Managed
            </div>
          </div>

          <div className="text-left space-y-1">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              50<span className="text-gold-500">+</span>
            </div>
            <div className="text-xs sm:text-sm text-charcoal-400 uppercase tracking-wider font-medium">
              PMLA Proceedings Handled
            </div>
          </div>

          <div className="text-left space-y-1">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              9<span className="text-gold-500">+</span>
            </div>
            <div className="text-xs sm:text-sm text-charcoal-400 uppercase tracking-wider font-medium">
              Core Practice Areas
            </div>
          </div>

          <div className="text-left space-y-1">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              3
            </div>
            <div className="text-xs sm:text-sm text-charcoal-400 uppercase tracking-wider font-medium">
              Regional Chambers Hubs
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
