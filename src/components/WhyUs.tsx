import React from 'react';
import { 
  Users2, 
  MessageSquare, 
  Building, 
  Shield, 
  Scale, 
  CheckCircle2
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      numeral: "I",
      title: "Prosecutorial & Forensic Acumen",
      subtitle: "Multi-Disciplinary Forensic Synergy",
      desc: "Our trial counsel pool firsthand experience assisting Special Prosecutors for the NCB, ED, SFIO, and CBIC. We analyze cases with an insider's forensic understanding of prosecution strategy, evidentiary vulnerabilities, and statutory compliance."
    },
    {
      numeral: "II",
      title: "Direct Arguing Counsel",
      subtitle: "Zero Bureaucratic Dilution",
      desc: "We operate on a strict principle: the advocates who brief your matter are the exact advocates who argue before the bench. You receive direct access to courtroom trial counsel without junior associate filters."
    },
    {
      numeral: "III",
      title: "Epicenter at Patiala House",
      subtitle: "Chamber 238, New Delhi",
      desc: "Operating directly from Chamber 238 inside Patiala House Courts grants our advocates instantaneous physical access to special statutory courts, Delhi High Court, and the Supreme Court for emergency stay applications and bail listings."
    },
    {
      numeral: "IV",
      title: "Uncompromising Privilege",
      subtitle: "Section 126, Indian Evidence Act",
      desc: "Every interaction, consultation, and case document entrusted to Synergy Chambers is strictly safeguarded under statutory attorney-client privilege, maintaining absolute professional discretion."
    }
  ];

  return (
    <section 
      id="why-us" 
      aria-labelledby="why-us-heading"
      className="py-20 lg:py-28 bg-chalk-100 border-b border-chalk-200 text-ink-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-chalk-300">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-aurum-600" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-aurum-700">
                The Chambers Distinction
              </span>
            </div>
            <h2 
              id="why-us-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-950 leading-tight"
            >
              Four Principles of Advocacy
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-ink-600 leading-relaxed">
            Formidable legal advocacy begins with forensic evidentiary analysis, strategic procedural mastery, and fearless trial presence.
          </p>
        </div>

        {/* 4-Pillar Architectural Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-chalk-300 border border-chalk-300">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 sm:p-9 flex flex-col justify-between hover:bg-chalk-50 transition-colors"
            >
              <div>
                {/* Roman Numeral & Subtitle */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-chalk-200">
                  <span className="font-serif text-3xl font-bold text-aurum-600">
                    {pillar.numeral}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-aurum-700 bg-chalk-100 px-2 py-0.5 border border-chalk-200">
                    Standard
                  </span>
                </div>

                <span className="text-[10.5px] uppercase font-bold tracking-wider text-aurum-700 block mb-1.5">
                  {pillar.subtitle}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 mb-3 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-ink-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-chalk-200 text-[11px] text-aurum-700 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-aurum-600" />
                <span>Chambers Benchmark</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
