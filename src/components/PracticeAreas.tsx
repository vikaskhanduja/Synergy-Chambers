import React, { useState } from 'react';
import { 
  Scale, 
  ShieldAlert, 
  Gavel, 
  Building2, 
  Home, 
  HeartHandshake, 
  Briefcase, 
  FileCheck,
  ArrowRight,
  Landmark,
  FileText
} from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea } from '../data/firmData';

interface PracticeAreasProps {
  onSelectPractice: (id: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPractice }) => {
  return (
    <section id="practices" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title on Left, Description on Right (Directly Matches Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#088395] mb-2">
              <Scale className="w-4 h-4" />
              <span>Chambers Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Specialized Courtroom Advocacy &amp; Legal Counsel
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base text-slate-600 leading-relaxed">
              Operating directly from Chamber 238 at Patiala House Courts, our advocates represent private clients and corporate entities in high-stakes criminal trials, special statutory investigations, commercial arbitrations, and High Court appellate proceedings.
            </p>
          </div>
        </div>

        {/* 6 Clean White Cards (3 columns x 2 rows, style directly matches screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.slice(0, 6).map((practice) => (
            <div
              key={practice.id}
              className="bg-white border border-slate-200 hover:border-[#088395]/40 rounded-xl p-8 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Clean Grey Icon Box (Matches screenshot) */}
                <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-[#088395] group-hover:text-white transition-colors mb-6">
                  <Scale className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#088395] transition-colors mb-2">
                  {practice.title}
                </h3>

                <p className="text-xs font-semibold text-[#088395] mb-3">
                  {practice.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {practice.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectPractice(practice.id)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#088395] group-hover:text-[#05626e] transition-colors cursor-pointer"
                >
                  <span>Explore Practice Scope</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Practices Action */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onSelectPractice(PRACTICE_AREAS[0].id)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-100 hover:bg-[#088395] hover:text-white text-slate-800 text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>View All 9 Practice Domains &amp; Statutory Remit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
