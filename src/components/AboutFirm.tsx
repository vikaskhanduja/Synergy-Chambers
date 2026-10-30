import React from 'react';
import { 
  Building2, 
  Scale, 
  Landmark,
  ShieldCheck,
  Award,
  ArrowUpRight,
  Gavel,
  Check
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const AboutFirm: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 lg:py-28 bg-white border-b border-chambers-stone-200"
      aria-labelledby="about-firm-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Legal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-chambers-gold-700">
              <span className="w-6 h-[1.5px] bg-chambers-gold-500" aria-hidden="true" />
              <span>Chambers Overview &amp; Practice Heritage</span>
            </div>

            <h2 
              id="about-firm-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-chambers-navy-950 leading-tight"
            >
              A Heritage of Courtroom Rigor.{' '}
              <span className="block text-chambers-gold-600 font-normal italic">
                From Trial Remand to the Supreme Court.
              </span>
            </h2>

            <div className="space-y-4 text-chambers-stone-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                At Synergy Chambers, we believe that trial advocacy is an exacting craft built on meticulous preparation, evidentiary mastery, and strategic poise. Our advocates combine extensive backgrounds in special statutory prosecutions with nuanced commercial and appellate litigation.
              </p>
              <p>
                Headquartered directly inside <strong className="text-chambers-navy-950 font-semibold">Chamber No. 238, Patiala House Courts, New Delhi</strong>, our advocates operate at the literal epicenter of the capital&apos;s trial jurisprudence. This location ensures immediate physical responsiveness for remand hearings, bail listings, and urgent stay mentions before Special Courts under PMLA, NDPS, CBI, and POCSO.
              </p>
              <p>
                Our chambers extend dedicated operations into <strong className="text-chambers-navy-950 font-semibold">Chandigarh</strong> and across the district courts of <strong className="text-chambers-navy-950 font-semibold">Haryana</strong> (from Karnal to Rewari), creating an integrated legal corridor that delivers uniform trial excellence across North India.
              </p>
            </div>

            {/* Strategic Credibility Cards */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-chambers-parchment-100 border border-chambers-stone-200 shadow-subtle hover:border-chambers-gold-400 transition-colors">
                <Landmark className="w-5 h-5 text-chambers-gold-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-chambers-navy-950">
                    Chambers at Patiala House
                  </h3>
                  <p className="text-xs text-chambers-stone-600 mt-1 leading-relaxed">
                    Immediate access to Special PMLA, NDPS, CMM, and Delhi District Courts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-chambers-parchment-100 border border-chambers-stone-200 shadow-subtle hover:border-chambers-gold-400 transition-colors">
                <Scale className="w-5 h-5 text-chambers-gold-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-chambers-navy-950">
                    Trial &amp; Appellate Heritage
                  </h3>
                  <p className="text-xs text-chambers-stone-600 mt-1 leading-relaxed">
                    Cumulative trial hours prosecuting and defending complex criminal and corporate disputes.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Chambers Warrant & Jurisdiction Matrix */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-chambers-navy-800 shadow-elevated bg-chambers-navy-950 text-white p-7 sm:p-8 space-y-6 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-chambers-navy-850">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-chambers-navy-900 border border-chambers-gold-500/30 flex items-center justify-center text-chambers-gold-400">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base tracking-wide text-white">
                      Chamber No. 238
                    </h3>
                    <p className="text-xs text-chambers-gold-400 font-medium">
                      Patiala House Courts, New Delhi – 110001
                    </p>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-chambers-gold-400 bg-chambers-gold-500/10 px-2 py-0.5 rounded border border-chambers-gold-500/20 font-semibold">
                  Principal Seat
                </span>
              </div>

              {/* Chambers Network Bulletins */}
              <div className="space-y-4 text-xs text-chambers-stone-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-chambers-gold-400 mt-1.5 shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-white font-medium">Delhi Headquarters:</strong> Patiala House Courts (Principal Criminal &amp; Special Statutes Bench)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-chambers-gold-400 mt-1.5 shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-white font-medium">Chandigarh Chambers:</strong> Punjab &amp; Haryana High Court, Central Administrative Tribunal (CAT)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-chambers-gold-400 mt-1.5 shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-white font-medium">Haryana District Network:</strong> Karnal, Gurugram, Rewari, Panipat, Faridabad District &amp; Sessions Benches
                  </span>
                </div>
              </div>

              {/* Office Contact Plaque */}
              <div className="p-4 rounded-xl bg-chambers-navy-900 border border-chambers-navy-850 space-y-2 text-xs">
                <div className="text-[11px] uppercase tracking-wider text-chambers-stone-400 font-semibold">
                  Chambers Secretariat Contact:
                </div>
                <div className="flex items-center justify-between">
                  <a 
                    href={`mailto:${FIRM_DETAILS.email}`} 
                    className="text-sm font-semibold text-chambers-gold-400 hover:text-chambers-gold-300 transition-colors"
                  >
                    {FIRM_DETAILS.email}
                  </a>
                  <span className="text-[11px] text-chambers-stone-400">
                    {FIRM_DETAILS.hours}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-chambers-stone-400">
                <span>Advocates &amp; Solicitors</span>
                <a 
                  href="#contact" 
                  className="text-chambers-gold-400 hover:text-chambers-gold-300 flex items-center gap-1 font-semibold"
                >
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
