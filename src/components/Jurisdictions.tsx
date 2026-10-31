import React from 'react';
import { Landmark, MapPin, CheckCircle, Scale, Shield, Building2 } from 'lucide-react';
import { JURISDICTIONS } from '../data/firmData';

export const Jurisdictions: React.FC = () => {
  return (
    <section 
      id="jurisdictions" 
      aria-labelledby="jurisdictions-heading"
      className="py-20 lg:py-28 bg-chalk-50 border-b border-chalk-200 text-ink-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-aurum-600" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-aurum-700">
              Judicial Standing &amp; Forums
            </span>
          </div>
          <h2 
            id="jurisdictions-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-950 leading-tight"
          >
            Courts &amp; Tribunals of Regular Appearance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-600 leading-relaxed font-normal">
            From the Supreme Court of India and High Courts to specialized economic tribunals and district sessions benches, Synergy Chambers maintains an active, multi-forum trial presence across North India.
          </p>
        </div>

        {/* 3 Regional Matrix Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-chalk-300 border border-chalk-300">
          {JURISDICTIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 sm:p-9 flex flex-col justify-between hover:bg-chalk-100 transition-colors"
            >
              <div>
                {/* Forum Header */}
                <div className="flex items-center justify-between pb-5 border-b border-chalk-200 mb-6">
                  <div className="w-10 h-10 border border-chalk-300 bg-chalk-100 flex items-center justify-center text-aurum-700">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-forest-950 bg-chalk-100 px-2.5 py-1 border border-chalk-300">
                    {item.hub}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-forest-950 mb-2">
                  {item.region}
                </h3>
                
                <p className="text-xs text-ink-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-aurum-600 shrink-0 mt-0.5" />
                  <span>{item.address}</span>
                </p>

                {/* Appearance Forums List */}
                <div className="space-y-3 pt-3 border-t border-chalk-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-aurum-700 block mb-2">
                    Primary Appearance Benches
                  </span>
                  {item.courts.map((court, cIdx) => (
                    <div key={cIdx} className="text-xs text-ink-700 flex items-start gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-aurum-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{court}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-chalk-200 text-xs text-ink-600 bg-chalk-50 p-3.5 border border-chalk-200">
                <span className="font-bold text-forest-950 block mb-0.5">Courtroom Capabilities:</span>
                Trial advocacy, regular &amp; anticipatory bail hearings, writ petitions, and virtual/hybrid court proceedings.
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Tribunals Strip */}
        <div className="mt-12 p-7 sm:p-9 bg-forest-950 text-white border border-forest-800 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-aurum-400">
                Specialized Economic &amp; Appellate Tribunals
              </span>
              <h4 className="font-serif text-2xl font-bold text-white">
                NCLT, NCLAT, CAT, AFT, PMLA &amp; SAFEMA Appellate Tribunals
              </h4>
              <p className="text-xs sm:text-sm text-ink-200 leading-relaxed font-light">
                Our advocates regularly appear before specialized tribunals under the Insolvency and Bankruptcy Code (IBC), Company Law, Prevention of Money Laundering Act (PMLA), and Central Administrative Tribunal (CAT).
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-chalk-50 p-3 bg-forest-900 border border-forest-800">
                <Shield className="w-4 h-4 text-aurum-400 shrink-0" />
                <span>Specialized PMLA &amp; NDPS Trial Roster</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-chalk-50 p-3 bg-forest-900 border border-forest-800">
                <Building2 className="w-4 h-4 text-aurum-400 shrink-0" />
                <span>Direct Virtual High Court Appearance Facility</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
