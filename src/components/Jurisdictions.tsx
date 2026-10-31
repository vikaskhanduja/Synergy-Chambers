import React from 'react';
import { Landmark, MapPin, Check, Scale, ShieldCheck, Building2, Gavel } from 'lucide-react';
import { JURISDICTIONS } from '../data/firmData';

export const Jurisdictions: React.FC = () => {
  return (
    <section id="jurisdictions" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#088395] mb-2">
            <Landmark className="w-4 h-4" />
            <span>Courts &amp; Jurisdictions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Forums &amp; Tribunals of Regular Standing
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From the Supreme Court of India and High Courts to specialized economic tribunals and district sessions benches across North India.
          </p>
        </div>

        {/* 3 Regional Corridor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {JURISDICTIONS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 hover:border-[#088395]/40 rounded-xl p-7 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#088395] bg-teal-50 px-2.5 py-1 rounded">
                    {item.hub}
                  </span>
                  <Landmark className="w-5 h-5 text-slate-400" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.region}
                </h3>

                <p className="text-xs text-slate-500 mb-5 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#088395] shrink-0 mt-0.5" />
                  <span>{item.address}</span>
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Benches of Record:
                  </span>
                  {item.courts.map((court, cIdx) => (
                    <div key={cIdx} className="text-xs text-slate-700 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#088395] shrink-0 mt-0.5" />
                      <span className="leading-snug">{court}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 text-xs text-slate-600">
                <strong className="text-slate-900 block mb-0.5">Courtroom Practice:</strong>
                Remand appearances, bail hearings, trial examination, and writ filings.
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Tribunals Banner */}
        <div className="bg-[#088395] text-white rounded-2xl p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
                Specialized Economic &amp; Statutory Tribunals
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                NCLT, NCLAT, CAT, AFT, PMLA &amp; SAFEMA Appellate Tribunals
              </h3>
              <p className="text-xs sm:text-sm text-teal-50/90 leading-relaxed font-light">
                Our advocates regularly represent clients before specialized tribunals under the Insolvency and Bankruptcy Code (IBC), Prevention of Money Laundering Act (PMLA), Central Administrative Tribunal (CAT), and Armed Forces Tribunal (AFT).
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="bg-white/10 backdrop-blur-xs border border-white/20 p-4 rounded-xl">
                <span className="text-xs font-bold text-white block">PMLA &amp; NDPS Special Rosters</span>
                <span className="text-[11px] text-teal-100 mt-0.5 block">Emergency bail listings &amp; trial cross-examination</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs border border-white/20 p-4 rounded-xl">
                <span className="text-xs font-bold text-white block">Corporate Insolvency (NCLT)</span>
                <span className="text-[11px] text-teal-100 mt-0.5 block">Section 7, 9 &amp; 10 IBC corporate debtor &amp; creditor petitions</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
