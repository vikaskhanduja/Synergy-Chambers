import React from 'react';
import { Landmark, MapPin, Check, Scale, ShieldCheck, Building2, Gavel, Compass } from 'lucide-react';
import { JURISDICTIONS } from '../data/firmData';

export const Jurisdictions: React.FC = () => {
  return (
    <section 
      id="jurisdictions" 
      aria-labelledby="jurisdictions-heading"
      className="py-24 lg:py-32 bg-atelier-bone border-b border-atelier-sand text-atelier-black relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Archival Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-16 border-b border-atelier-sand/80 text-[10.5px] uppercase tracking-loose-editorial font-bold text-atelier-taupe">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-atelier-bronze rounded-full" aria-hidden="true" />
            <span className="text-atelier-carbon">Judicial Standing &amp; Forum Schedule</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Supreme Court • High Courts • Special Tribunals</span>
            <span className="hidden md:inline text-atelier-sand">|</span>
            <span className="hidden md:inline">Delhi • Punjab • Haryana</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 
            id="jurisdictions-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.15] font-medium tracking-tight text-atelier-black"
          >
            Courts &amp; Tribunals of Regular Standing.<br />
            <span className="italic font-normal text-atelier-slate">
              Active physical and hybrid trial presence across India’s premier judicial forums.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-atelier-slate leading-relaxed font-normal">
            Synergy Chambers maintains an uninterrupted litigation corridor connecting the Supreme Court of India and High Courts with specialized economic tribunals and district trial courtrooms.
          </p>
        </div>

        {/* Official Registry Schedule Table */}
        <div className="border border-atelier-sand bg-atelier-fog shadow-sm mb-14 divide-y divide-atelier-sand">
          {JURISDICTIONS.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-atelier-bone/60 transition-colors"
            >
              {/* Region & Seat */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-loose-editorial text-atelier-bronze">
                    ZONE {String(idx + 1).padStart(2, '0')} // {item.hub}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-atelier-black">
                  {item.region}
                </h3>
                <div className="flex items-start gap-1.5 text-xs text-atelier-slate pt-1">
                  <MapPin className="w-3.5 h-3.5 text-atelier-bronze shrink-0 mt-0.5" />
                  <span>{item.address}</span>
                </div>
              </div>

              {/* Court List & Representation Scope */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[10.5px] uppercase font-bold tracking-wider text-atelier-taupe block">
                  Benches &amp; Courtrooms of Record
                </span>
                <div className="space-y-2">
                  {item.courts.map((court, cIdx) => (
                    <div key={cIdx} className="text-xs text-atelier-carbon flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-atelier-bronze shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{court}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Remit */}
              <div className="lg:col-span-3 p-4 bg-atelier-bone border border-atelier-sand/80 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-bronze block">
                  Chambers Standing
                </span>
                <p className="text-xs text-atelier-slate leading-relaxed">
                  Regular trial bail hearings, remand appearances, evidence record examination, and emergency writ petition filings.
                </p>
                <span className="text-[10.5px] text-atelier-taupe block pt-1 border-t border-atelier-sand/60 font-semibold">
                  Daily Physical &amp; Virtual Docket
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Tribunals Broad-Sheet Annexure */}
        <div className="border border-atelier-sand bg-atelier-carbon text-atelier-bone p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-atelier-gold text-[10px] uppercase tracking-loose-editorial font-bold">
                <Gavel className="w-4 h-4" />
                <span>Specialized Economic &amp; Statutory Tribunals</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-atelier-bone">
                NCLT, NCLAT, CAT, AFT, PMLA &amp; SAFEMA Appellate Tribunals
              </h3>

              <p className="text-xs sm:text-sm text-atelier-sand/90 leading-relaxed font-light">
                Our advocates regularly appear before specialized statutory tribunals under the Insolvency and Bankruptcy Code (IBC), Company Law, Prevention of Money Laundering Act (PMLA), Smugglers and Foreign Exchange Manipulators Act (SAFEMA), Central Administrative Tribunal (CAT), and Armed Forces Tribunal (AFT).
              </p>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <div className="p-4 bg-atelier-slate/40 border border-atelier-sand/20 space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-atelier-gold block">
                  PMLA &amp; NDPS Special Rosters
                </span>
                <span className="text-xs text-atelier-sand block">
                  Emergency bail listings, property attachment appeals, and trial cross-examination.
                </span>
              </div>

              <div className="p-4 bg-atelier-slate/40 border border-atelier-sand/20 space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-atelier-gold block">
                  Insolvency &amp; Corporate Tribunal
                </span>
                <span className="text-xs text-atelier-sand block">
                  Section 7, 9 &amp; 10 IBC corporate debtor &amp; creditor representation before NCLT benches.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
