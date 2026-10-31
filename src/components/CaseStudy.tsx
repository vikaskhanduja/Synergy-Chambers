import React from 'react';
import { Calendar, FileText, ArrowRight, Scale, BookOpen } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#088395] mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Chambers Publications &amp; Insights</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Latest Jurisprudential Analysis
          </h2>
        </div>

        {/* Featured Case Study Card (Directly Matches Screenshot) */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12">
          
          {/* Photo Column */}
          <div className="md:col-span-5 relative min-h-[260px]">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
              alt="Legal library and trial brief analysis"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-[#088395] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              Special Statutes
            </div>
          </div>

          {/* Text Content Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#088395]" />
                  <span>October 2026</span>
                </span>
                <span>•</span>
                <span className="font-semibold text-slate-700">Criminal Trial Jurisprudence</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-[#088395] transition-colors leading-snug">
                Why Evidentiary Precision at Remand Determines Trial Verdicts in Special Court Litigation
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                An analysis of Section 50 NDPS procedural compliance, electronic record certification under Section 65B Indian Evidence Act, and the twin bail conditions under Section 45 of the PMLA.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Author: Adv. Akshay Chauhan &amp; Partners
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#088395] hover:text-[#05626e]"
              >
                <span>Read Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
