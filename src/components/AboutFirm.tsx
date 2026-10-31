import React from 'react';
import { 
  Building2, 
  Scale, 
  Landmark,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  FileText
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const AboutFirm: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Image + Narrative (Matches Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Team Collaboration Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Synergy Chambers advocates collaborating around conference table"
                className="w-full h-[420px] lg:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-white border border-slate-200 rounded-xl p-5 shadow-2xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-[#088395]">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-slate-900 block leading-tight">
                    Chamber 238
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Patiala House Courts, New Delhi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Profile & Value Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#088395]">
              <Scale className="w-4 h-4" />
              <span>About Synergy Chambers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Heritage of Trial Rigor &amp; Strategic Courtroom Presence
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              At Synergy Chambers, we believe that trial advocacy is an exacting discipline founded upon evidentiary precision, thorough legal research, and forceful courtroom presence. Founded by trial practitioners with deep experience across special statutes and commercial litigation, our practice rejects passive representation in favour of vigorous, proactive courtroom defence.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Operating directly from <strong className="text-slate-900 font-semibold">Chamber No. 238 at the historic Patiala House Courts complex in New Delhi</strong>, our advocates sit at the epicentre of the capital’s trial jurisprudence. This location enables immediate intervention for remand proceedings, anticipatory and regular bail hearings, and urgent interim applications before Special Courts under the PMLA, NDPS, CBI, and POCSO Acts.
            </p>

            {/* Checkmark Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  <strong className="text-slate-900">Direct Arguing Counsel:</strong> Clients interface directly with the advocates who draft the petitions and argue before the bench.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  <strong className="text-slate-900">Prosecutorial Acumen:</strong> Firsthand experience assisting Special Prosecutors for NCB, ED, SFIO, and CBIC.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  <strong className="text-slate-900">Multi-Jurisdictional Corridor:</strong> Seamless litigation from Delhi trial benches to Punjab &amp; Haryana High Court, CAT, and AFT.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  <strong className="text-slate-900">Statutory Privilege:</strong> Disclosures protected under Sections 126–129 of the Indian Evidence Act.
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#advocates"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#088395] hover:bg-[#05626e] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <span>Meet Our Advocates</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#088395]" />
                <span>Contact Chambers</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
