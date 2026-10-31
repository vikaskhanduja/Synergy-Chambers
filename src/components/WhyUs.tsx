import React, { useState } from 'react';
import { 
  Scale, 
  ShieldCheck, 
  Landmark, 
  UserCheck, 
  ArrowRight,
  FileCheck2,
  Check
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const WhyUs: React.FC = () => {
  const [activeCanon, setActiveCanon] = useState<number>(0);

  const canons = [
    {
      numeral: "I",
      code: "CANON 01 // FORENSIC INTELLIGENCE",
      title: "Prosecutorial & Forensic Acumen",
      subtitle: "Multi-Disciplinary Forensic Analysis & Agency Insight",
      desc: "Our trial counsel pool firsthand experience having assisted Special Prosecutors for the Narcotics Control Bureau (NCB), Enforcement Directorate (ED), Serious Fraud Investigation Office (SFIO), and CBIC. We analyze incoming charge-sheets with an insider's forensic understanding of prosecution vulnerabilities, statutory procedural lapses, and evidentiary chain-of-custody defects.",
      benchmark: "Special Statute Scrutiny: Section 50 NDPS procedural compliance, PMLA Section 45 twin conditions, and forensic electronic records under Section 65B of the Indian Evidence Act.",
      statuteBadge: "PMLA • NDPS • CBI • SFIO Special Courts"
    },
    {
      numeral: "II",
      code: "CANON 02 // DIRECT ADVOCACY",
      title: "Direct Arguing Counsel Model",
      subtitle: "Zero Bureaucratic Dilution & Unfiltered Briefing",
      desc: "We practice under an exacting chambers rule: the advocates who read your brief, analyze your documents, and draft your pleadings are the exact counsel who stand at the podium and argue before the bench. You receive direct access to courtroom trial advocates without junior associate filters or third-party briefing intermediaries.",
      benchmark: "Counsel Continuity: Unbroken tactical command from police remand through bail arguments, trial cross-examination, and appellate review before the High Court.",
      statuteBadge: "Direct Client-Advocate Interface"
    },
    {
      numeral: "III",
      code: "CANON 03 // PHYSICAL PRESENCE",
      title: "Epicenter at Chamber 238",
      subtitle: "Patiala House Courts Physical Litigative Seat",
      desc: "Chamber No. 238 at Patiala House Courts places our barristers at the geographical and operational heart of New Delhi’s criminal trial administration. From this dedicated chamber, our team coordinates emergency remand appearances, bail urgent listings, and special court applications within minutes of client notification.",
      benchmark: "Rapid Deployment: Instant physical filings at Patiala House, Rouse Avenue Special Courts, and the Delhi High Court for urgent interim reliefs and stay motions.",
      statuteBadge: "Patiala House Courts, New Delhi"
    },
    {
      numeral: "IV",
      code: "CANON 04 // ABSOLUTE PRIVILEGE",
      title: "Uncompromising Privilege & Discretion",
      subtitle: "Sections 126–129, Indian Evidence Act Safeguards",
      desc: "Every interaction, strategic consultation, and evidentiary document entrusted to Synergy Chambers is strictly safeguarded under statutory attorney-client privilege. We enforce rigorous data isolation and institutional non-disclosure protocols across our Delhi, Chandigarh, and Haryana teams.",
      benchmark: "Privileged Immunity: Absolute statutory protection of client disclosures, trial strategy memoranda, and forensic digital evidence from external discovery.",
      statuteBadge: "Sections 126–129 Indian Evidence Act"
    }
  ];

  return (
    <section 
      id="why-us" 
      aria-labelledby="why-us-heading"
      className="py-24 lg:py-32 bg-atelier-fog border-b border-atelier-sand text-atelier-black relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Archival Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-16 border-b border-atelier-sand/80 text-[10.5px] uppercase tracking-loose-editorial font-bold text-atelier-taupe">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-atelier-bronze rounded-full" aria-hidden="true" />
            <span className="text-atelier-carbon">Institutional Creed &amp; Doctrines</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Doctrine of Courtroom Trial Practice</span>
            <span className="hidden md:inline text-atelier-sand">|</span>
            <span className="hidden md:inline">Article IV • Chambers Rules</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <h2 
              id="why-us-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.15] font-medium tracking-tight text-atelier-black"
            >
              The Four Canons of Advocacy.<br />
              <span className="italic font-normal text-atelier-slate">
                Forensic discipline. Counsel continuity. Absolute discretion.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-sm text-atelier-slate leading-relaxed border-l-2 border-atelier-sand pl-5">
              Trial advocacy is won in the preparation room through forensic scrutiny of evidence, mastery of criminal procedure, and unyielding oral poise before the bench.
            </p>
          </div>
        </div>

        {/* Asymmetric Monograph: Left Index / Right Deep Doctrine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start border-t border-atelier-sand pt-12">
          
          {/* Left Column: Interactive Canon Selector & Manifesto */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-36">
            <div className="text-[11px] uppercase tracking-loose-editorial font-bold text-atelier-bronze pb-3 border-b border-atelier-sand">
              Canons of Practice Index
            </div>

            <nav aria-label="Canons of Practice" className="space-y-2">
              {canons.map((canon, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCanon(idx)}
                  className={`w-full text-left p-4 border transition-all flex items-center justify-between cursor-pointer ${
                    activeCanon === idx
                      ? 'bg-atelier-bone border-atelier-bronze shadow-sm'
                      : 'bg-atelier-fog border-atelier-sand/70 hover:border-atelier-taupe hover:bg-atelier-bone/50'
                  }`}
                  aria-selected={activeCanon === idx}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-serif text-2xl font-normal ${
                      activeCanon === idx ? 'text-atelier-bronze font-semibold' : 'text-atelier-taupe'
                    }`}>
                      {canon.numeral}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-atelier-taupe block">
                        Canon {idx + 1}
                      </span>
                      <span className="text-sm font-serif font-medium text-atelier-black block">
                        {canon.title}
                      </span>
                    </div>
                  </div>
                  <span className={`w-2 h-2 rounded-full ${
                    activeCanon === idx ? 'bg-atelier-bronze' : 'bg-transparent'
                  }`} />
                </button>
              ))}
            </nav>

            {/* Chambers Creed Box */}
            <div className="p-6 bg-atelier-bone border border-atelier-sand space-y-3 mt-6">
              <span className="text-[10px] uppercase font-bold tracking-loose-editorial text-atelier-bronze block">
                The Chambers Covenant
              </span>
              <p className="text-xs text-atelier-slate leading-relaxed italic font-serif">
                "A lawyer’s duty is to present every legitimate defense recognized by the law with vigor, fidelity, and precision. No client stands alone at the bar."
              </p>
              <div className="pt-2 border-t border-atelier-sand/80 flex items-center justify-between text-[11px] text-atelier-taupe font-medium">
                <span>Advocates Act, 1961</span>
                <span>Bar Council of India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Full Expanded Monograph Presentation */}
          <div className="lg:col-span-8 space-y-12">
            {canons.map((canon, idx) => (
              <article 
                key={idx}
                className={`p-8 sm:p-10 border transition-all ${
                  activeCanon === idx 
                    ? 'bg-atelier-bone border-atelier-bronze shadow-sm' 
                    : 'bg-atelier-bone/40 border-atelier-sand/80'
                }`}
              >
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-atelier-sand">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-4xl sm:text-5xl font-medium text-atelier-bronze">
                      {canon.numeral}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-loose-editorial text-atelier-taupe block">
                        {canon.code}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-atelier-black">
                        {canon.title}
                      </h3>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-atelier-black bg-atelier-fog border border-atelier-sand">
                    {canon.statuteBadge}
                  </span>
                </div>

                {/* Subtitle & Narrative */}
                <span className="text-xs uppercase font-bold tracking-wider text-atelier-bronze block mb-3">
                  {canon.subtitle}
                </span>

                <p className="text-sm sm:text-[15px] text-atelier-carbon leading-relaxed font-normal mb-6">
                  {canon.desc}
                </p>

                {/* Forensic Benchmark Highlight */}
                <div className="p-4 sm:p-5 bg-atelier-fog border-l-2 border-atelier-bronze border-y border-r border-atelier-sand/80">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-carbon block mb-1">
                    Forensic Benchmark &amp; Trial Standard:
                  </span>
                  <p className="text-xs text-atelier-slate leading-relaxed">
                    {canon.benchmark}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
