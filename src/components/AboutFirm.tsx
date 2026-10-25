import React from 'react';
import { 
  Building2, 
  Scale, 
  MapPin, 
  CheckCircle, 
  Landmark, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const AboutFirm: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-600">
              <span className="w-6 h-[1.5px] bg-gold-500" />
              <span>About Synergy Chambers</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 leading-tight">
              Your Partners in Law.{' '}
              <span className="block text-gold-600 font-normal italic">
                From Trial Courts to High Tribunals.
              </span>
            </h2>

            <div className="space-y-4 text-charcoal-700 text-base leading-relaxed">
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
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-navy-50/60 border border-navy-100">
                <Landmark className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-950">Chambers at Patiala House</h4>
                  <p className="text-xs text-charcoal-600">Immediate access to Special PMLA, NDPS, and Delhi District Courts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-navy-50/60 border border-navy-100">
                <Scale className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-950">High-Stakes Trial Heritage</h4>
                  <p className="text-xs text-charcoal-600">Proven trial advocacy with experience prosecuting and defending under special statutes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Chamber Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer border & frame */}
              <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-elevated bg-navy-950 text-white p-8 space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-navy-800">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-8 h-8 text-gold-400" />
                    <div>
                      <h3 className="font-serif font-bold text-lg text-white">Chamber No. 238</h3>
                      <p className="text-xs text-gold-400">Patiala House Courts, New Delhi – 110001</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-charcoal-300 leading-relaxed">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                    <span><strong>Delhi Headquarters:</strong> Patiala House Courts (Principal Complex)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                    <span><strong>Chandigarh Chambers:</strong> Punjab &amp; Haryana High Court &amp; CAT</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                    <span><strong>Haryana State Network:</strong> Karnal, Gurugram, Rewari &amp; District Benches</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-navy-800 flex flex-col gap-2">
                  <div className="text-xs text-charcoal-400">Consultation Inquiries:</div>
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
      </div>
    </section>
  );
};
