import React, { useState } from 'react';
import { 
  Scale, 
  ShieldAlert, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Landmark,
  FileCheck2,
  Lock
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'criminal' | 'appellate' | 'commercial' | 'sessions'>('criminal');

  const tabs = [
    { id: 'criminal', label: 'Criminal & Special Courts' },
    { id: 'appellate', label: 'Appellate & High Courts' },
    { id: 'commercial', label: 'Commercial & NCLT' },
    { id: 'sessions', label: 'District & Sessions' },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#088395] mb-2">
            <Scale className="w-4 h-4" />
            <span>Courtroom Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Strategic Trial &amp; Appellate Advocacy
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Multi-forum courtroom defense tailored to special statutory procedures and complex commercial disputes.
          </p>
        </div>

        {/* Horizontal Tab Bar (Directly Matches Screenshot) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 max-w-4xl mx-auto border-b border-slate-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#088395] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content: Split Feature (Left Text + Right Graphic, Matches Screenshot) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm max-w-5xl mx-auto">
          {activeTab === 'criminal' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#088395]">
                  Special Statutes &amp; Remand Defense
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Forensic Criminal Defense &amp; Special Court Representation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our trial counsel specialize in rigorous courtroom advocacy under the NDPS Act, Prevention of Money Laundering Act (PMLA), Prevention of Corruption Act (PC Act), and POCSO Act before Special CBI and Sessions Courts.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Emergency Anticipatory &amp; Regular Bail Applications</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Section 50 NDPS Act Mandatory Search Compliance</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Cross-Examination of Investigating Officers (IOs)</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 p-8 flex flex-col items-center justify-center text-center shadow-inner">
                  <div className="w-20 h-20 rounded-2xl bg-[#088395] text-white flex items-center justify-center shadow-lg mb-4">
                    <ShieldAlert className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Patiala House &amp; Rouse Avenue</h4>
                  <p className="text-xs text-slate-600 mt-1">Special Courts for CBI, ED, NDPS &amp; PMLA Remands</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appellate' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#088395]">
                  High Courts &amp; Supreme Court
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Constitutional Writs &amp; Appellate Review
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dedicated appellate briefing before the High Court of Delhi and the High Court of Punjab &amp; Haryana at Chandigarh, alongside Special Leave Petitions (SLPs) before the Supreme Court of India.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Articles 226 &amp; 227 Writs of Mandamus, Certiorari &amp; Habeas Corpus</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Section 482 CrPC / Section 528 BNSS Quashing of FIRs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Statutory Criminal &amp; Civil First Appeals (RFA / FAO)</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 p-8 flex flex-col items-center justify-center text-center shadow-inner">
                  <div className="w-20 h-20 rounded-2xl bg-[#088395] text-white flex items-center justify-center shadow-lg mb-4">
                    <Landmark className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Delhi &amp; Chandigarh Benches</h4>
                  <p className="text-xs text-slate-600 mt-1">High Court Appellate Advocacy &amp; SLP Filings</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'commercial' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#088395]">
                  Economic Tribunals &amp; Arbitration
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  NCLT Insolvency &amp; Commercial Dispute Resolution
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Handling Section 7, 9, and 10 petitions under the Insolvency and Bankruptcy Code (IBC) before NCLT/NCLAT, corporate debt recovery, and domestic arbitration under the 1996 Act.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Insolvency Resolution &amp; Liquidation (CIRP)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Section 9 Interim Measures &amp; Section 11 Arbitrator Appointment</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Commercial Division Suits in High Court</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 p-8 flex flex-col items-center justify-center text-center shadow-inner">
                  <div className="w-20 h-20 rounded-2xl bg-[#088395] text-white flex items-center justify-center shadow-lg mb-4">
                    <Building2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">NCLT &amp; NCLAT Benches</h4>
                  <p className="text-xs text-slate-600 mt-1">Corporate Insolvency &amp; Commercial Suits</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sessions' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#088395]">
                  NCR &amp; Haryana District Benches
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  District Trials, Property &amp; Cheque Dishonour
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Continuous on-ground trial practice across Gurugram, Rewari, Karnal, Panipat, and Delhi district courts for title disputes, land acquisition, and Section 138 NI Act litigation.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Partition Suits, Title Declarations &amp; Permanent Injunctions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Section 138 Negotiable Instruments Act Trials</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#088395] shrink-0" />
                    <span>Matrimonial Settlements &amp; Domestic Violence Cases</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 p-8 flex flex-col items-center justify-center text-center shadow-inner">
                  <div className="w-20 h-20 rounded-2xl bg-[#088395] text-white flex items-center justify-center shadow-lg mb-4">
                    <FileCheck2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">District Sessions Courts</h4>
                  <p className="text-xs text-slate-600 mt-1">Gurugram, Rewari, Karnal, Panipat &amp; Delhi</p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
