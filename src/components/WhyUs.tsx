import React from 'react';
import { 
  Users2, 
  MessageSquare, 
  Building, 
  PhoneCall, 
  Quote,
  Shield,
  Scale
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      numeral: "I",
      icon: Users2,
      title: "Prosecutorial & Defence Acumen",
      subtitle: "Multi-Disciplinary Forensic Synergy",
      desc: "Our trial counsel pool firsthand experience assisting Special Prosecutors for the NCB, ED, SFIO, and CBIC. We analyze cases with an insider's forensic understanding of prosecution strategy, evidentiary vulnerabilities, and statutory compliance."
    },
    {
      numeral: "II",
      icon: MessageSquare,
      title: "Direct Arguing Counsel",
      subtitle: "Zero Bureaucratic Dilution",
      desc: "We operate on a strict principle: the advocates who brief your matter are the exact advocates who argue before the bench. You receive direct access to courtroom trial counsel without junior associate filters."
    },
    {
      numeral: "III",
      icon: Building,
      title: "Epicenter at Patiala House",
      subtitle: "Chamber 238, New Delhi",
      desc: "Operating directly from Chamber 238 inside Patiala House Courts grants our advocates instantaneous physical access to special statutory courts, Delhi High Court, and the Supreme Court for emergency stay applications and bail listings."
    },
    {
      numeral: "IV",
      icon: Shield,
      title: "Uncompromising Privilege",
      subtitle: "Section 126, Indian Evidence Act",
      desc: "Every interaction, consultation, and case document entrusted to Synergy Chambers is strictly safeguarded under statutory attorney-client privilege, maintaining absolute professional discretion."
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F2F5F0] text-navy-950 relative border-b border-[#E1E8E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-700 mb-3">
            <span className="w-6 h-[1.5px] bg-gold-500" />
            <span>The Chambers Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 mb-6 leading-tight">
            Four Pillars of Advocacy
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-normal">
            Great legal counsel starts with deep factual grasp, meticulous procedural strategy, and fearless courtroom advocacy. Our practice is anchored in four core principles.
          </p>
        </div>

        {/* 4 Distinct Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 sm:p-9 border border-[#E1E8E4] shadow-subtle hover:border-gold-400 hover:shadow-card transition-all group relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700 group-hover:bg-navy-900 group-hover:text-gold-400 group-hover:border-navy-800 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-display text-2xl font-bold text-charcoal-300 group-hover:text-gold-600 transition-colors">
                      {pillar.numeral}
                    </span>
                  </div>
                  
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy-950 mb-3 group-hover:text-gold-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7EDE7] flex items-center justify-between text-xs text-charcoal-400">
                  <span>Advocates &amp; Solicitors</span>
                  <span className="text-gold-600 font-semibold group-hover:translate-x-1 transition-transform">Pillar {pillar.numeral} &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Judicial Parchment Plaque Banner */}
        <div className="mt-16 bg-navy-950 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden border border-navy-850 shadow-elevated">
          <Quote className="absolute right-6 bottom-4 w-32 h-32 text-white/[0.03] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="w-8 h-8 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 mx-auto">
              <Scale className="w-4 h-4" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl italic text-charcoal-100 leading-relaxed font-normal">
              &ldquo;{FIRM_DETAILS.quote.text}&rdquo;
            </p>
            <div className="pt-2">
              <span className="font-display text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                — {FIRM_DETAILS.quote.author}
              </span>
              <span className="text-xs text-charcoal-400 mt-0.5 block">
                The philosophical touchstone guiding our trial preparation and courtroom advocacy
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
