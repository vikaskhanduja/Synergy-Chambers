import React from 'react';
import { 
  Award, 
  BookOpen, 
  Building, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Briefcase
} from 'lucide-react';
import { FOUNDERS, Lawyer } from '../data/firmData';

interface FoundersProps {
  onSelectLawyer: (id: string) => void;
  onOpenConsultation: () => void;
}

export const Founders: React.FC<FoundersProps> = ({ 
  onSelectLawyer,
  onOpenConsultation 
}) => {
  return (
    <section id="founders" className="py-20 lg:py-28 bg-white border-b border-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-600 mb-3">
            <span className="w-6 h-[1.5px] bg-gold-500" />
            <span>Firm Leadership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 mb-6">
            Founding Advocates
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Our co-founders lead Synergy Chambers from the Patiala House Courts in New Delhi, bringing extensive courtroom experience from prosecuting and defending high-stakes trial and appellate matters.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.id}
              className="bg-[#FDFBF7] rounded-2xl border border-charcoal-200 shadow-subtle hover:border-gold-400 hover:shadow-premium transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Profile Card Header */}
              <div className="p-7 sm:p-8 space-y-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-700 bg-gold-50 px-2.5 py-1 rounded border border-gold-200 inline-block mb-3">
                    {founder.role}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-xs text-charcoal-500 mt-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-gold-600" />
                    <span>{founder.location}</span>
                  </p>
                </div>

                {/* Academic & Bar Credentials */}
                <div className="space-y-2 pt-2 border-t border-charcoal-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block">
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
                <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                  {founder.bio}
                </p>

                {/* Key Practice Highlights */}
                {founder.notableHighlights && (
                  <div className="space-y-1.5 pt-3 border-t border-charcoal-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-2">
                      Distinguished Highlights
                    </span>
                    {founder.notableHighlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="text-xs text-navy-900 font-medium flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Trigger */}
              <div className="p-6 bg-white border-t border-charcoal-200 flex items-center justify-between">
                <button
                  onClick={() => onSelectLawyer(founder.id)}
                  className="text-xs font-bold text-navy-950 hover:text-gold-600 flex items-center gap-1.5 transition-colors group/btn"
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
