import React from 'react';
import { 
  BookOpen, 
  Building, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { FOUNDERS } from '../data/firmData';

interface FoundersProps {
  onSelectLawyer: (id: string) => void;
  onOpenConsultation: () => void;
}

export const Founders: React.FC<FoundersProps> = ({ 
  onSelectLawyer
}) => {
  return (
    <section id="founders" className="py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E8E4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-700 mb-3">
            <span className="w-6 h-[1.5px] bg-gold-500" />
            <span>Firm Leadership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 mb-6 leading-tight">
            Founding Advocates
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-normal">
            Our co-founders direct Synergy Chambers from Patiala House Courts in New Delhi, bringing extensive courtroom experience prosecuting and defending high-stakes trials and appellate litigation.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.id}
              className="bg-white rounded-2xl border border-[#E8E4DB] shadow-subtle hover:border-gold-400 hover:shadow-card transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Profile Card Header */}
              <div className="p-7 sm:p-8 space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2.5 py-1 rounded border border-gold-200 inline-block mb-3">
                    {founder.role}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-xs text-charcoal-500 mt-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-gold-600" />
                    <span>{founder.location}</span>
                  </p>
                </div>

                {/* Academic & Bar Credentials */}
                <div className="space-y-2 pt-2 border-t border-[#F0ECE2]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-1">
                    Credentials &amp; Bar Admissions
                  </span>
                  {founder.qualifications.map((qual, qIdx) => (
                    <div key={qIdx} className="text-xs text-charcoal-700 flex items-start gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{qual}</span>
                    </div>
                  ))}
                </div>

                {/* Bio Excerpt */}
                <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed line-clamp-4 font-normal">
                  {founder.bio}
                </p>

                {/* Key Practice Highlights */}
                {founder.notableHighlights && (
                  <div className="space-y-1.5 pt-3 border-t border-[#F0ECE2]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-2">
                      Distinguished Highlights
                    </span>
                    {founder.notableHighlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="text-xs text-navy-950 font-medium flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Trigger */}
              <div className="p-6 bg-[#FAF8F3] border-t border-[#E8E4DB] flex items-center justify-between">
                <button
                  onClick={() => onSelectLawyer(founder.id)}
                  className="text-xs font-semibold text-navy-950 hover:text-gold-700 flex items-center gap-1.5 transition-colors group/btn"
                >
                  <span>View Full Professional Bio</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
