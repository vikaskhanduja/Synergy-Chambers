import React from 'react';
import { Landmark, MapPin, CheckCircle, Scale, Shield, Building2 } from 'lucide-react';
import { JURISDICTIONS } from '../data/firmData';

export const Jurisdictions: React.FC = () => {
  return (
    <section 
      id="jurisdictions" 
      aria-labelledby="jurisdictions-heading"
      className="py-20 lg:py-28 bg-[#FDFCF9] border-b border-[#E5E0D8] text-[#1E2530]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#B8934E]" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C6D33]">
              Judicial Standing &amp; Forums
            </span>
          </div>
          <h2 
            id="jurisdictions-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#09111E] leading-tight"
          >
            Courts &amp; Tribunals of Regular Appearance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5B6778] leading-relaxed font-normal">
            From the Supreme Court of India and High Courts to specialized economic tribunals and district sessions benches, Synergy Chambers maintains an active, multi-forum trial presence across North India.
          </p>
        </div>

        {/* 3 Regional Matrix Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#DCD6C8] border border-[#DCD6C8]">
          {JURISDICTIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 sm:p-9 flex flex-col justify-between hover:bg-[#FAF8F5] transition-colors"
            >
              <div>
                {/* Forum Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#E5E0D8] mb-6">
                  <div className="w-10 h-10 border border-[#DCD6C8] bg-[#F5F2EB] flex items-center justify-center text-[#8C6D33]">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#09111E] bg-[#F5F2EB] px-2.5 py-1 border border-[#DCD6C8]">
                    {item.hub}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#09111E] mb-2">
                  {item.region}
                </h3>
                
                <p className="text-xs text-[#5B6778] mb-6 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8C6D33] shrink-0 mt-0.5" />
                  <span>{item.address}</span>
                </p>

                {/* Appearance Forums List */}
                <div className="space-y-3 pt-3 border-t border-[#E5E0D8]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6D33] block mb-2">
                    Primary Appearance Benches
                  </span>
                  {item.courts.map((court, cIdx) => (
                    <div key={cIdx} className="text-xs text-[#364152] flex items-start gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#8C6D33] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{court}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E0D8] text-xs text-[#5B6778] bg-[#F9F7F2] p-3.5 border border-[#E5E0D8]">
                <span className="font-bold text-[#09111E] block mb-0.5">Courtroom Capabilities:</span>
                Trial advocacy, regular &amp; anticipatory bail hearings, writ petitions, and virtual/hybrid court proceedings.
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Tribunals Strip */}
        <div className="mt-12 p-7 sm:p-9 bg-[#09111E] text-white border border-[#142135] shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8934E]">
                Specialized Economic &amp; Appellate Tribunals
              </span>
              <h4 className="font-serif text-2xl font-bold text-white">
                NCLT, NCLAT, CAT, AFT, PMLA &amp; SAFEMA Appellate Tribunals
              </h4>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                Our advocates regularly appear before specialized tribunals under the Insolvency and Bankruptcy Code (IBC), Company Law, Prevention of Money Laundering Act (PMLA), and Central Administrative Tribunal (CAT).
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#E2E8F0] p-3 bg-[#0C1626] border border-[#142135]">
                <Shield className="w-4 h-4 text-[#B8934E] shrink-0" />
                <span>Specialized PMLA &amp; NDPS Trial Roster</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#E2E8F0] p-3 bg-[#0C1626] border border-[#142135]">
                <Building2 className="w-4 h-4 text-[#B8934E] shrink-0" />
                <span>Direct Virtual High Court Appearance Facility</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
