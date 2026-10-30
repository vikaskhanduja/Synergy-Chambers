import React from 'react';
import { Landmark, MapPin, CheckCircle, Scale, Shield, Building } from 'lucide-react';
import { JURISDICTIONS } from '../data/firmData';

export const Jurisdictions: React.FC = () => {
  return (
    <section 
      id="jurisdictions" 
      aria-label="Judicial Jurisdictions & Appearance Forums"
      className="py-20 lg:py-28 bg-white border-b border-chambers-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-chambers-parchment-100 border border-chambers-stone-300 text-chambers-gold-800 text-[11px] font-bold uppercase tracking-wider mb-4">
            <Landmark className="w-3.5 h-3.5 text-chambers-gold-700" />
            <span>Judicial Forums &amp; Standing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-chambers-navy-950 mb-6 leading-tight">
            Courts &amp; Tribunals of Regular Appearance
          </h2>
          <p className="text-base sm:text-lg text-chambers-stone-700 leading-relaxed font-normal">
            From the Supreme Court of India and High Courts to specialized economic tribunals and district sessions benches, Synergy Chambers maintains an active, multi-forum presence across North India.
          </p>
        </div>

        {/* 3 Regional Pillars Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {JURISDICTIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-chambers-parchment-50 rounded-2xl p-7 sm:p-8 border border-chambers-stone-200/90 shadow-chambers-card hover:border-chambers-gold-500/50 hover:shadow-chambers-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-chambers-stone-200 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-chambers-navy-950 text-chambers-gold-400 flex items-center justify-center shadow-chambers-subtle">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-chambers-navy-900 bg-white px-3 py-1.5 rounded border border-chambers-stone-300 shadow-sm">
                    {item.hub}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-chambers-navy-950 mb-2">
                  {item.region}
                </h3>
                <p className="text-xs text-chambers-stone-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-chambers-gold-700 shrink-0 mt-0.5" />
                  <span>{item.address}</span>
                </p>

                {/* Courts list */}
                <div className="space-y-3 pt-3 border-t border-chambers-stone-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-chambers-stone-500 block mb-3">
                    Regular Appearance Forums
                  </span>
                  {item.courts.map((court, cIdx) => (
                    <div key={cIdx} className="text-xs text-chambers-stone-800 flex items-start gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-chambers-gold-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{court}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-chambers-stone-200 text-xs text-chambers-stone-600 bg-white/70 p-3.5 rounded-xl border border-chambers-stone-200">
                <span className="font-semibold text-chambers-navy-950 block mb-0.5">Courtroom Capabilities:</span>
                Trial advocacy, regular bail &amp; anticipatory hearings, writ petitions, and virtual/hybrid court proceedings.
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Tribunals Plaque */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-chambers-navy-950 text-white border border-chambers-navy-850 shadow-chambers-elevated">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-chambers-gold-400">
                Specialized Economic &amp; Appellate Tribunals
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                NCLT, NCLAT, CAT, AFT, PMLA &amp; SAFEMA Appellate Tribunals
              </h4>
              <p className="text-xs sm:text-sm text-chambers-stone-300 leading-relaxed font-light">
                Our advocates regularly argue before statutory tribunals under the Insolvency and Bankruptcy Code (IBC), Company Law, Prevention of Money Laundering Act (PMLA), and Central Administrative Tribunal (CAT).
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="flex items-center gap-2 text-xs text-chambers-stone-200 bg-chambers-navy-900/80 p-2.5 rounded-lg border border-chambers-navy-800">
                <Shield className="w-4 h-4 text-chambers-gold-400 shrink-0" />
                <span>Specialized PMLA &amp; NDPS Trial Roster</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-chambers-stone-200 bg-chambers-navy-900/80 p-2.5 rounded-lg border border-chambers-navy-800">
                <Building className="w-4 h-4 text-chambers-gold-400 shrink-0" />
                <span>Direct Virtual High Court Appearance Facility</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
