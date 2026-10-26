import React from 'react';
import { 
  Building2, 
  Scale, 
  Landmark
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const AboutFirm: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E8E4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Heritage */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-700">
              <span className="w-6 h-[1.5px] bg-gold-500" />
              <span>Chambers Overview</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 leading-tight">
              Your Partners in Law.{' '}
              <span className="block text-gold-600 font-normal italic">
                From Trial Courts to High Tribunals.
              </span>
            </h2>

            <div className="space-y-4 text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                At Synergy Chambers, we believe great legal counsel starts with genuinely understanding what matters to you. Our advocates bring together diverse experience across litigation and advisory practice, working as one integrated team to provide well-rounded, practical solutions — not merely abstract legal opinions.
              </p>
              <p>
                Headquartered at the <strong className="text-navy-950 font-semibold">Patiala House Courts in New Delhi</strong>, we are positioned directly at the epicenter of the capital&apos;s legal ecosystem. This strategic presence provides our clients with swift, decisive court representation when it counts most.
              </p>
              <p>
                Our chambers extend dedicated operations into <strong className="text-navy-950 font-semibold">Chandigarh</strong> and across the district courts of <strong className="text-navy-950 font-semibold">Haryana</strong> (from Karnal to Rewari), creating an agile regional bridge that delivers uniform legal rigor wherever our clients&apos; matters are listed.
              </p>
            </div>

            {/* Credibility highlights */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E8E4DB] shadow-subtle">
                <Landmark className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">Chambers at Patiala House</h4>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">Immediate access to Special PMLA, NDPS, and Delhi District Courts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E8E4DB] shadow-subtle">
                <Scale className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">High-Stakes Trial Heritage</h4>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">Proven courtroom advocacy with experience prosecuting and defending under special statutes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Chamber Warrant Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-navy-800 shadow-elevated bg-navy-950 text-white p-7 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-navy-850">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base tracking-wide text-white">Chamber No. 238</h3>
                    <p className="text-xs text-gold-400 font-medium">Patiala House Courts, New Delhi – 110001</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs text-charcoal-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                  <span><strong className="text-white font-medium">Delhi Headquarters:</strong> Patiala House Courts (Principal Complex)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                  <span><strong className="text-white font-medium">Chandigarh Chambers:</strong> Punjab &amp; Haryana High Court &amp; CAT</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                  <span><strong className="text-white font-medium">Haryana State Network:</strong> Karnal, Gurugram, Rewari &amp; District Benches</span>
                </div>
              </div>

              <div className="pt-4 border-t border-navy-850 flex flex-col gap-2">
                <div className="text-[11px] uppercase tracking-wider text-charcoal-400 font-semibold">Consultation Inquiries:</div>
                <a 
                  href={`mailto:${FIRM_DETAILS.email}`} 
                  className="text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                >
                  {FIRM_DETAILS.email}
                </a>
                <span className="text-xs text-charcoal-400">
                  Business Hours: {FIRM_DETAILS.hours}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
