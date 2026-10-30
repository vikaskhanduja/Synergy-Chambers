import React from 'react';
import { 
  Building2, 
  Scale, 
  Landmark,
  ShieldCheck,
  Award,
  ArrowRight,
  Gavel,
  Check,
  BookOpen
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const AboutFirm: React.FC = () => {
  return (
    <section 
      id="about" 
      aria-labelledby="about-firm-heading"
      className="py-20 lg:py-28 bg-[#FDFCF9] border-b border-[#E5E0D8] text-[#1E2530]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#B8934E]" aria-hidden="true" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C6D33]">
            Institutional Foundation &amp; Ethos
          </span>
        </div>

        {/* 2-Column Broad-Sheet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 
              id="about-firm-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#09111E] leading-[1.18]"
            >
              A Heritage of Courtroom Rigor.{' '}
              <span className="block italic font-normal text-[#8C6D33]">
                From Trial Remand to Appellate Review.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#364152] leading-relaxed font-normal">
              <p>
                At Synergy Chambers, we believe that trial advocacy is an exacting discipline founded upon evidentiary precision, thorough legal research, and forceful courtroom presence. Founded by trial practitioners with deep experience across special statutes and commercial litigation, our practice rejects passive representation in favour of vigorous, proactive courtroom defence.
              </p>
              <p>
                Operating directly from <strong className="text-[#09111E] font-semibold">Chamber No. 238 at the historic Patiala House Courts complex in New Delhi</strong>, our advocates sit at the epicentre of the capital’s trial jurisprudence. This location enables immediate intervention for remand proceedings, anticipatory and regular bail hearings, and urgent interim applications before Special Courts under the Prevention of Money Laundering Act (PMLA), the NDPS Act, the CBI Courts, and the Protection of Children from Sexual Offences (POCSO) Act.
              </p>
              <p>
                Beyond New Delhi, Synergy Chambers maintains an integrated trial and appellate corridor across the <strong className="text-[#09111E] font-semibold">High Court of Punjab &amp; Haryana at Chandigarh</strong>, regional administrative tribunals, and the district sessions courts of <strong className="text-[#09111E] font-semibold">Haryana</strong> (including Gurugram, Rewari, Karnal, and Panipat). This collaborative multi-jurisdictional structure ensures continuous trial continuity from initial police station bail hearings up to the Supreme Court of India.
              </p>
            </div>

            {/* Strategic Credibility Pillars */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white border border-[#E5E0D8] space-y-2">
                <div className="flex items-center gap-2 text-[#8C6D33]">
                  <Landmark className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#09111E]">
                    Chamber 238 Seat
                  </span>
                </div>
                <p className="text-xs text-[#5B6778] leading-relaxed">
                  Direct physical presence inside Patiala House Courts for immediate trial, bail, and remand filings.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#E5E0D8] space-y-2">
                <div className="flex items-center gap-2 text-[#8C6D33]">
                  <Scale className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#09111E]">
                    Arguing Counsel Model
                  </span>
                </div>
                <p className="text-xs text-[#5B6778] leading-relaxed">
                  Clients interface directly with arguing advocates who draft the petitions and appear before the bench.
                </p>
              </div>
            </div>

          </div>

          {/* Right Registry Ledger Column */}
          <div className="lg:col-span-5">
            <div className="border border-[#DCD6C8] bg-white p-7 sm:p-8 space-y-6 shadow-sm">
              
              <div className="flex items-center justify-between pb-5 border-b border-[#E5E0D8]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C6D33] block">
                    Institutional Record
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#09111E]">
                    Synergy Chambers
                  </h3>
                </div>
                <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider text-[#09111E] bg-[#F5F2EB] border border-[#DCD6C8]">
                  Verified Seat
                </span>
              </div>

              {/* Roster ledger */}
              <div className="space-y-4 text-xs">
                <div className="pb-3 border-b border-[#E5E0D8]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C6D33] block mb-1">
                    Primary Headquarters &amp; Litigation Seat
                  </span>
                  <span className="text-sm font-semibold text-[#09111E] block">
                    Chamber No. 238, Patiala House Courts
                  </span>
                  <span className="text-[#5B6778] text-[11px] block mt-0.5">
                    Near India Gate, New Delhi – 110001
                  </span>
                </div>

                <div className="pb-3 border-b border-[#E5E0D8]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C6D33] block mb-1">
                    Regional High Court Division
                  </span>
                  <span className="text-sm font-semibold text-[#09111E] block">
                    High Court of Punjab &amp; Haryana, Chandigarh
                  </span>
                  <span className="text-[#5B6778] text-[11px] block mt-0.5">
                    Central Administrative Tribunal (CAT) • Armed Forces Tribunal (AFT)
                  </span>
                </div>

                <div className="pb-3 border-b border-[#E5E0D8]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C6D33] block mb-1">
                    District Sessions Corridor
                  </span>
                  <span className="text-sm font-semibold text-[#09111E] block">
                    Haryana District &amp; Sessions Courts
                  </span>
                  <span className="text-[#5B6778] text-[11px] block mt-0.5">
                    Gurugram • Rewari • Karnal • Panipat
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C6D33] block mb-1">
                    Evidentiary Confidentiality
                  </span>
                  <span className="text-xs font-semibold text-[#09111E] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#8C6D33]" />
                    <span>Protected under Sections 126–129, Indian Evidence Act</span>
                  </span>
                </div>
              </div>

              {/* Bottom Chamber Hotline */}
              <div className="pt-4 border-t border-[#E5E0D8] bg-[#F9F7F2] p-4 border border-[#E5E0D8]">
                <div className="text-[10.5px] uppercase tracking-wider text-[#5B6778] font-bold">
                  Formal Docket Communications:
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <a 
                    href={`mailto:${FIRM_DETAILS.email}`} 
                    className="text-xs font-bold text-[#09111E] hover:text-[#8C6D33] transition-colors"
                  >
                    {FIRM_DETAILS.email}
                  </a>
                  <span className="text-[11px] text-[#5B6778]">
                    10 AM – 7 PM
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
