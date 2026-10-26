import React from 'react';
import { 
  Building2, 
  Scale, 
  Landmark,
  ShieldCheck,
  Award,
  ArrowUpRight
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const AboutFirm: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#EAE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Heritage */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-700">
              <span className="w-6 h-[1.5px] bg-gold-500" />
              <span>Chambers Overview</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 leading-tight">
              A Legacy of Courtroom Rigor.{' '}
              <span className="block text-gold-600 font-normal italic">
                From Trial Remand to the Supreme Court.
              </span>
            </h2>

            <div className="space-y-4 text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                At Synergy Chambers, we believe that trial advocacy is an exacting craft built on meticulous preparation, evidentiary mastery, and strategic poise. Our advocates combine extensive backgrounds in special statutory prosecutions with nuanced commercial and appellate litigation.
              </p>
              <p>
                Headquartered directly inside <strong className="text-navy-950 font-semibold">Chamber No. 238, Patiala House Courts, New Delhi</strong>, our advocates operate at the literal epicenter of the capital&apos;s trial jurisprudence. This location ensures immediate physical responsiveness for remand hearings, bail listings, and urgent stay mentions before Special Courts under PMLA, NDPS, CBI, and POCSO.
              </p>
              <p>
                Our chambers extend dedicated operations into <strong className="text-navy-950 font-semibold">Chandigarh</strong> and across the district courts of <strong className="text-navy-950 font-semibold">Haryana</strong> (from Karnal to Rewari), creating an integrated legal corridor that delivers uniform trial excellence across North India.
              </p>
            </div>

            {/* Credibility highlights */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#EAE5DB] shadow-subtle hover:border-gold-400 transition-colors">
                <Landmark className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">Chambers at Patiala House</h4>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">Immediate access to Special PMLA, NDPS, and Delhi District Courts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#EAE5DB] shadow-subtle hover:border-gold-400 transition-colors">
                <Scale className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">Trial &amp; Appellate Heritage</h4>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">Decades of cumulative courtroom hours prosecuting and defending complex matters.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Chamber Warrant Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-navy-800 shadow-elevated bg-navy-950 text-white p-7 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-navy-850">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base tracking-wide text-white">Chamber No. 238</h3>
                    <p className="text-xs text-gold-400 font-medium">Patiala House Courts, New Delhi – 110001</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20 font-semibold">
                  Principal Seat
                </span>
              </div>

              <div className="space-y-4 text-xs text-charcoal-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                  <span><strong className="text-white font-medium">Delhi Central Headquarters:</strong> Patiala House Courts (Principal Criminal &amp; Special Statutes Bench)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                  <span><strong className="text-white font-medium">Chandigarh Regional Practice:</strong> Punjab &amp; Haryana High Court, CAT &amp; Tribunals</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                  <span><strong className="text-white font-medium">Haryana District Network:</strong> Karnal, Gurugram, Rewari, Panipat &amp; Faridabad</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-850 space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-charcoal-400 font-semibold">Direct Chambers Contact:</div>
                <div className="flex items-center justify-between">
                  <a 
                    href={`mailto:${FIRM_DETAILS.email}`} 
                    className="text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    {FIRM_DETAILS.email}
                  </a>
                  <span className="text-[11px] text-charcoal-400">{FIRM_DETAILS.hours}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-charcoal-400">
                <span>Advocates &amp; Solicitors</span>
                <a href="#contact" className="text-gold-400 hover:text-gold-300 flex items-center gap-1 font-semibold">
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
