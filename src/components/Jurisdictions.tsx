import React from 'react';
import { Landmark, MapPin, CheckCircle } from 'lucide-react';
import { JURISDICTIONS } from '../data/firmData';

export const Jurisdictions: React.FC = () => {
  return (
    <section id="jurisdictions" className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E8E4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-700 mb-3">
            <span className="w-6 h-[1.5px] bg-gold-500" />
            <span>Courts &amp; Tribunals of Appearance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 mb-6 leading-tight">
            Judicial Jurisdictions
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-normal">
            From the Supreme Court of India and appellate High Courts to specialized economic tribunals and district sessions benches, Synergy Chambers maintains an active, multi-forum presence.
          </p>
        </div>

        {/* 3 Regional Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {JURISDICTIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E8E4DB] shadow-subtle hover:border-gold-400 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F0ECE2] mb-5">
                  <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-subtle">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2.5 py-1 rounded border border-gold-200">
                    {item.hub}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-2">
                  {item.region}
                </h3>
                <p className="text-xs text-charcoal-500 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                  <span>{item.address}</span>
                </p>

                {/* Courts list */}
                <div className="space-y-2.5 pt-2 border-t border-[#F0ECE2]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-3">
                    Regular Appearance Forums
                  </span>
                  {item.courts.map((court, cIdx) => (
                    <div key={cIdx} className="text-xs text-charcoal-700 flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{court}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0ECE2] text-xs text-charcoal-500">
                Full trial preparation, drafting, filing, and physical/virtual appearances.
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
