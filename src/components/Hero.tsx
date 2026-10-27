import React from 'react';
import { 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  MapPin, 
  Check, 
  Clock,
  Landmark,
  Building,
  Gavel
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-navy-950 text-white overflow-hidden border-b border-navy-850">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,150,101,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Main Hero Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Chambers Registration & Seat Bar */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/25 text-gold-300 text-xs tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Chamber No. 238, Patiala House Courts, New Delhi</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Vigorous Courtroom Advocacy.{' '}
              <span className="block italic text-gold-400 font-normal">
                Strategic Integrity.
              </span>
            </h1>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed max-w-2xl font-light">
              Synergy Chambers unites experienced trial advocates, former regulatory prosecutors, and appellate counsel to guide clients through high-stakes controversies before the Supreme Court of India, High Courts, and Special Enforcement Tribunals.
            </p>

            {/* Three Chambers Pillars - Authentic Editorial Format */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-navy-850/80 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block">
                  Enforcement Defence
                </span>
                <p className="text-charcoal-300 leading-relaxed">
                  PMLA, NDPS, SFIO &amp; Economic Offences trial defence.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block">
                  Appellate Mastery
                </span>
                <p className="text-charcoal-300 leading-relaxed">
                  Supreme Court writs, High Court appeals &amp; arbitrations.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block">
                  Direct Counsel
                </span>
                <p className="text-charcoal-300 leading-relaxed">
                  Briefed and argued directly by designated trial partners.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs tracking-wider uppercase transition-all shadow-subtle hover:shadow-premium cursor-pointer active:scale-95"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#practices"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-navy-900/90 hover:bg-navy-850 text-charcoal-200 hover:text-white border border-navy-800 hover:border-gold-500/40 font-semibold text-xs tracking-wider uppercase transition-all"
              >
                <span>Explore Practice Areas</span>
              </a>
            </div>

            {/* Subtle Statutory Notice */}
            <div className="text-[11px] text-charcoal-400 flex items-center gap-2 pt-1">
              <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Prior appointment recommended for preliminary case conferences.</span>
            </div>

          </div>

          {/* Right Visual Element - Authentic Chambers Plaque */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-navy-900/95 border border-navy-800 p-7 sm:p-8 shadow-elevated relative overflow-hidden backdrop-blur-sm space-y-6">
              
              {/* Top Seal */}
              <div className="flex items-center justify-between pb-5 border-b border-navy-850">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-950 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base tracking-wide">
                      SYNERGY CHAMBERS
                    </h3>
                    <p className="text-[11px] text-gold-400 font-medium">
                      Chamber 238 • Patiala House Courts
                    </p>
                  </div>
                </div>
                <span className="text-[10px] tracking-wider uppercase bg-navy-950 text-charcoal-300 border border-navy-800 px-2.5 py-1 rounded font-medium">
                  New Delhi
                </span>
              </div>

              {/* Judicial Statement Quote */}
              <div className="space-y-3 py-2">
                <blockquote className="border-l-2 border-gold-500 pl-4 py-1 font-serif text-lg sm:text-xl italic text-charcoal-100 leading-snug">
                  &ldquo;{FIRM_DETAILS.quote.text}&rdquo;
                </blockquote>
                <p className="text-xs text-gold-400 text-right font-display tracking-wider uppercase">
                  — {FIRM_DETAILS.quote.author}
                </p>
              </div>

              {/* Chambers Registry Information */}
              <div className="space-y-2.5 pt-4 border-t border-navy-850 text-xs">
                <div className="flex items-center justify-between text-charcoal-300 bg-navy-950/70 p-3 rounded-xl border border-navy-850">
                  <span className="text-charcoal-400 font-medium">Headquarters Seat</span>
                  <span className="text-white font-semibold">Patiala House Courts, New Delhi</span>
                </div>
                <div className="flex items-center justify-between text-charcoal-300 bg-navy-950/70 p-3 rounded-xl border border-navy-850">
                  <span className="text-charcoal-400 font-medium">Regional Benches</span>
                  <span className="text-white font-semibold">Chandigarh &amp; Haryana District Practice</span>
                </div>
                <div className="flex items-center justify-between text-charcoal-300 bg-navy-950/70 p-3 rounded-xl border border-navy-850">
                  <span className="text-charcoal-400 font-medium">Privilege Safeguard</span>
                  <span className="text-gold-400 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Section 126 Evidence Act
                  </span>
                </div>
              </div>

              {/* Discreet Action */}
              <div className="pt-2 text-center">
                <a 
                  href="#contact" 
                  className="text-xs text-gold-400 hover:text-gold-300 font-semibold tracking-wide inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Confidential Case Intake Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
