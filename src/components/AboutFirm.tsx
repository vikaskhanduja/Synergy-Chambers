import React from 'react';
import { 
  Building2, 
  Scale, 
  Landmark,
  ShieldCheck,
  FileText,
  MapPin,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const AboutFirm: React.FC = () => {
  return (
    <section 
      id="about" 
      aria-labelledby="about-firm-heading"
      className="py-24 lg:py-32 bg-atelier-bone border-b border-atelier-sand text-atelier-black relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Archival Registry Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-16 border-b border-atelier-sand/80 text-[10.5px] uppercase tracking-loose-editorial font-bold text-atelier-taupe">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-atelier-bronze rounded-full" aria-hidden="true" />
            <span className="text-atelier-carbon">Institutional Profile &amp; Practice Seat</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Chamber No. 238 • Patiala House Courts</span>
            <span className="hidden md:inline text-atelier-sand">|</span>
            <span className="hidden md:inline">Reg. Bench: New Delhi • Chandigarh • Haryana</span>
          </div>
        </div>

        {/* Monumental Editorial Headline */}
        <div className="max-w-4xl mb-16">
          <h2 
            id="about-firm-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.14] font-medium tracking-tight text-atelier-black"
          >
            A heritage of trial rigor.<br />
            <span className="italic font-normal text-atelier-slate">
              Grounded at the bar of India’s most demanding criminal, regulatory, and appellate forums.
            </span>
          </h2>
        </div>

        {/* 3-Column Broadsheet Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start border-t border-atelier-sand pt-12">
          
          {/* Column 1: Foundational Narrative & Drop-Cap */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-[11px] uppercase tracking-loose-editorial font-bold text-atelier-bronze pb-3 border-b border-atelier-chalk">
              01 / The Trial Foundation
            </div>
            
            <p className="text-sm sm:text-[15px] text-atelier-carbon leading-relaxed font-normal">
              <span className="float-left font-serif text-5xl leading-none pr-3 pt-1 text-atelier-bronze font-bold select-none">
                A
              </span>
              t Synergy Chambers, advocacy is practiced as an exacting, forensic craft. We reject passive, detached representation in favour of assertive, evidence-driven litigation in open court. Founded by trial barristers and seasoned courtroom advocates, our chambers specialize in navigating high-stakes disputes where every cross-examination question and procedural filing alters the trajectory of the matter.
            </p>

            <p className="text-xs sm:text-[13.5px] text-atelier-slate leading-relaxed">
              Operating directly out of <strong className="text-atelier-black font-semibold">Chamber No. 238 at the historic Patiala House Courts complex in New Delhi</strong>, our advocates sit at the immediate epicenter of the capital's trial jurisprudence. This location ensures instant physical intervention for remand proceedings, anticipatory and regular bail hearings, and urgent interim stays before Special CBI, PMLA, POCSO, and NDPS tribunals.
            </p>

            <div className="p-5 bg-atelier-fog border border-atelier-sand space-y-2 mt-4">
              <div className="flex items-center gap-2 text-atelier-bronze text-xs font-bold uppercase tracking-wider">
                <Landmark className="w-4 h-4" />
                <span>Patiala House Chambers 238</span>
              </div>
              <p className="text-xs text-atelier-slate leading-relaxed">
                Physical chamber access within the courtroom perimeter enables immediate listing, registry compliance, and emergency appearances without transit delays.
              </p>
            </div>
          </div>

          {/* Column 2: The Arguing Counsel Doctrine & Regional Reach */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-[11px] uppercase tracking-loose-editorial font-bold text-atelier-bronze pb-3 border-b border-atelier-chalk">
              02 / Arguing Counsel Doctrine
            </div>

            <p className="text-sm sm:text-[15px] text-atelier-carbon leading-relaxed font-normal">
              Our firm operates on an uncompromising structural principle: <strong className="text-atelier-black font-medium">the advocates who review and draft your case are the exact counsel who stand up and argue before the bench.</strong> We deliberately reject the conventional multi-tiered model where client communications are filtered through junior associates while senior counsel receives briefing only minutes before a hearing.
            </p>

            <p className="text-xs sm:text-[13.5px] text-atelier-slate leading-relaxed">
              Our partners pool firsthand experience having assisted Special Prosecutors for premier central investigating agencies including the <strong className="text-atelier-black font-medium">Narcotics Control Bureau (NCB), Enforcement Directorate (ED), Serious Fraud Investigation Office (SFIO)</strong>, and CBIC. This dual perspective affords our clients forensic insight into prosecutorial investigative methods, statutory vulnerabilities, and charge-sheet analysis.
            </p>

            {/* Regional Corridor */}
            <div className="p-5 bg-atelier-fog border border-atelier-sand space-y-2 mt-4">
              <div className="flex items-center gap-2 text-atelier-bronze text-xs font-bold uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>Chandigarh &amp; Haryana Corridors</span>
              </div>
              <p className="text-xs text-atelier-slate leading-relaxed">
                Dedicated appellate counsel before the High Court of Punjab &amp; Haryana, CAT, and AFT at Chandigarh, integrated with continuous trial coverage across Gurugram, Rewari, Karnal, and Panipat sessions courts.
              </p>
            </div>
          </div>

          {/* Column 3: The Official Chambers Ledger */}
          <div className="lg:col-span-4">
            <div className="border border-atelier-sand bg-atelier-fog p-7 sm:p-8 space-y-6 shadow-sm">
              
              <div className="flex items-center justify-between pb-5 border-b border-atelier-sand">
                <div>
                  <span className="text-[10px] uppercase tracking-loose-editorial font-bold text-atelier-bronze block">
                    Institutional Registry
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-atelier-black">
                    Synergy Chambers
                  </h3>
                </div>
                <span className="px-2.5 py-1 text-[9.5px] uppercase font-bold tracking-widest text-atelier-black bg-atelier-chalk border border-atelier-sand">
                  Patiala House Seat
                </span>
              </div>

              {/* Roster entries */}
              <div className="space-y-4 text-xs">
                <div className="pb-3 border-b border-atelier-chalk">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-bronze block mb-1">
                    Litigation Headquarters &amp; Chambers Seat
                  </span>
                  <span className="text-sm font-medium text-atelier-black block font-serif">
                    Chamber No. 238, Patiala House Courts
                  </span>
                  <span className="text-atelier-slate text-[11.5px] block mt-0.5">
                    Near India Gate &amp; Supreme Court of India, New Delhi – 110001
                  </span>
                </div>

                <div className="pb-3 border-b border-atelier-chalk">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-bronze block mb-1">
                    Appellate Bench Division
                  </span>
                  <span className="text-sm font-medium text-atelier-black block font-serif">
                    High Court of Punjab &amp; Haryana, Chandigarh
                  </span>
                  <span className="text-atelier-slate text-[11.5px] block mt-0.5">
                    Central Administrative Tribunal (CAT) • Armed Forces Tribunal (AFT)
                  </span>
                </div>

                <div className="pb-3 border-b border-atelier-chalk">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-bronze block mb-1">
                    District Sessions Corridor
                  </span>
                  <span className="text-sm font-medium text-atelier-black block font-serif">
                    Haryana District &amp; Sessions Courts
                  </span>
                  <span className="text-atelier-slate text-[11.5px] block mt-0.5">
                    Gurugram • Rewari • Karnal • Panipat Trial Benches
                  </span>
                </div>

                <div className="pb-3 border-b border-atelier-chalk">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-bronze block mb-1">
                    Evidentiary Confidentiality Privilege
                  </span>
                  <div className="text-xs text-atelier-black flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-atelier-bronze shrink-0" />
                    <span>Protected under Sections 126–129, Indian Evidence Act</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-atelier-bronze block mb-1">
                    Consultation Protocols
                  </span>
                  <div className="flex items-center gap-2 text-atelier-slate text-xs">
                    <Clock className="w-3.5 h-3.5 text-atelier-bronze shrink-0" />
                    <span>10:00 AM – 7:00 PM • Prior appointment mandatory</span>
                  </div>
                </div>
              </div>

              {/* Bottom Chamber Docket Hotline */}
              <div className="pt-4 border-t border-atelier-sand bg-atelier-chalk/60 p-4 border border-atelier-sand/80">
                <div className="text-[10px] uppercase tracking-widest text-atelier-taupe font-bold">
                  Official Communication Registry:
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <a 
                    href={`mailto:${FIRM_DETAILS.email}`} 
                    className="text-xs font-semibold text-atelier-black hover:text-atelier-bronze transition-colors"
                  >
                    {FIRM_DETAILS.email}
                  </a>
                  <a
                    href="#contact"
                    className="text-[11px] font-bold uppercase tracking-wider text-atelier-bronze hover:underline flex items-center gap-1"
                  >
                    <span>Docket Intake</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
