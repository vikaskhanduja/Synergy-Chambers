import React from 'react';
import { 
  Users2, 
  MessageSquare, 
  Building, 
  PhoneCall, 
  Quote 
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      numeral: "I",
      icon: Users2,
      title: "Collaborative Synergy",
      desc: "Our advocates pool multi-disciplinary perspectives across criminal trial advocacy, civil litigation, academic jurisprudence, and corporate advisory to build comprehensive strategies with zero blind spots."
    },
    {
      numeral: "II",
      icon: MessageSquare,
      title: "Clarity Over Jargon",
      desc: "We translate complex procedural rules and evidentiary standards into plain, actionable advice — ensuring clients remain empowered, informed, and in control of key tactical decisions."
    },
    {
      numeral: "III",
      icon: Building,
      title: "Patiala House Epicenter",
      desc: "Located directly inside Chamber 238 at Patiala House Courts, our advocates operate within immediate physical proximity to Delhi High Court, Supreme Court, and central enforcement tribunals."
    },
    {
      numeral: "IV",
      icon: PhoneCall,
      title: "Direct Access to Counsel",
      desc: "Direct communication with arguing counsel and partners without bureaucratic intermediary layers — especially vital during urgent bail listings, injunctions, and stay petitions."
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F5F2EB] text-navy-950 relative border-b border-[#E8E4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-700 mb-3">
            <span className="w-6 h-[1.5px] bg-gold-500" />
            <span>The Chambers Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 mb-6 leading-tight">
            Why Synergy Chambers?
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-normal">
            Great legal counsel starts with genuinely understanding what matters to you. We work as one cohesive unit to deliver well-rounded, practical solutions — not merely abstract opinions.
          </p>
        </div>

        {/* 4 Distinct Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 sm:p-9 border border-[#E8E4DB] shadow-subtle hover:border-gold-400 hover:shadow-card transition-all group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700 group-hover:bg-navy-900 group-hover:text-gold-400 group-hover:border-navy-800 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-display text-2xl font-bold text-charcoal-300 group-hover:text-gold-600/60 transition-colors">
                    {pillar.numeral}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-3 group-hover:text-gold-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Editorial Philosophical Quote Banner */}
        <div className="mt-16 bg-navy-950 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden border border-navy-800">
          <Quote className="absolute right-6 bottom-4 w-28 h-28 text-white/[0.04] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <p className="font-serif text-2xl sm:text-3xl italic text-charcoal-100 leading-relaxed font-normal">
              &ldquo;{FIRM_DETAILS.quote.text}&rdquo;
            </p>
            <div className="pt-2">
              <span className="font-display text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                — {FIRM_DETAILS.quote.author}
              </span>
              <span className="text-xs text-charcoal-400">
                Core philosophical touchstone of our courtroom practice
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
