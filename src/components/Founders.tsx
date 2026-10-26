import React from 'react';
import { 
  BookOpen, 
  Building, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Scale
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
    <section id="founders" className="py-20 lg:py-28 bg-paper-200 border-b border-charcoal-200">
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
            Directing Synergy Chambers from Chamber 238 at Patiala House Courts in New Delhi, our founding partners bring extensive courtroom experience prosecuting and defending high-profile trials and appellate briefs.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.id}
              className="bg-white rounded-2xl border border-charcoal-200 shadow-subtle hover:border-gold-400 hover:shadow-card transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Profile Card Header */}
              <div className="p-7 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2.5 py-1 rounded border border-gold-200">
                      {founder.role}
                    </span>
                    <span className="text-[11px] text-charcoal-400 font-medium">
                      Patiala House
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-xs text-charcoal-500 mt-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-gold-600" />
                    <span>{founder.location}</span>
                  </p>
                </div>

                {/* Academic & Bar Credentials */}
                <div className="space-y-2 pt-2 border-t border-charcoal-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-1">
                    Credentials &amp; Bar Admissions
                  </span>
                  {founder.qualifications.map((qual, qIdx) => (
                    <div key={qIdx} className="text-xs text-charcoal-700 flex items-start gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{qual}</span>
                    </div>
                  ))}
                  {founder.barAdmissions && (
                    <div className="text-xs text-charcoal-700 flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{founder.barAdmissions.join(', ')}</span>
                    </div>
                  )}
                </div>

                {/* Bio Excerpt */}
                <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed line-clamp-4 font-normal">
                  {founder.bio}
                </p>

                {/* Key Practice Highlights */}
                {founder.notableHighlights && (
                  <div className="space-y-1.5 pt-3 border-t border-charcoal-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-2">
                      Distinguished Case Highlights
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
              <div className="p-6 bg-paper-200 border-t border-charcoal-200 flex items-center justify-between">
                <button
                  onClick={() => onSelectLawyer(founder.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-navy-950 hover:bg-gold-500 text-gold-300 hover:text-navy-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-subtle"
                >
                  <span>Examine Full Advocate Brief</span>
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
