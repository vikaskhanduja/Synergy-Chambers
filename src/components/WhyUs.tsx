import React from 'react';
import { 
  Users2, 
  MessageSquare, 
  Building, 
  PhoneCall, 
  Quote, 
  ArrowUpRight 
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      icon: Users2,
      title: "Collaborative Expertise",
      desc: "Our advocates work in synergy (true to our name), pooling multi-disciplinary perspectives across criminal trial advocacy, civil litigation, academic jurisprudence, and corporate advisory to build stronger cases and smarter strategies."
    },
    {
      icon: MessageSquare,
      title: "Client-First Approach",
      desc: "We take time to explain your legal options in plain language, not opaque jargon, ensuring you are thoroughly informed, empowered, and in control at every stage of the legal process."
    },
    {
      icon: Building,
      title: "Central Delhi Presence",
      desc: "Based at Chamber No. 238, Patiala House Courts, one of Delhi's principal and historic court complexes, providing immediate proximity to the Delhi High Court, Supreme Court, and key enforcement tribunals."
    },
    {
      icon: PhoneCall,
      title: "Responsive & Accessible",
      desc: "Direct lines to your advocate, not endless layers of administrative bureaucracy. When immediate trial intervention or urgent bail relief is needed, our partners are directly accessible."
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F8F9FA] text-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-600 mb-3">
            <span className="w-6 h-[1.5px] bg-gold-500" />
            <span>The Synergy Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 mb-6">
            Why Synergy Chambers?
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-normal">
            Great legal counsel starts with genuinely understanding what matters to you. We work as one cohesive unit to deliver well-rounded, practical solutions — not just legal opinions.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-8 border border-charcoal-200 shadow-subtle hover:border-gold-400 hover:shadow-premium transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-50 border border-gold-500/20 flex items-center justify-center text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Editorial Quote Banner */}
        <div className="mt-16 bg-navy-950 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden border border-gold-500/30">
          <Quote className="absolute right-6 bottom-4 w-32 h-32 text-gold-500/10 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <p className="font-serif text-2xl sm:text-3xl italic text-charcoal-100 leading-relaxed font-medium">
              &ldquo;{FIRM_DETAILS.quote.text}&rdquo;
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
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
