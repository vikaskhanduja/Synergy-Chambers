import React, { useState } from 'react';
import { 
  Scale, 
  MapPin, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Building2,
  Users2
} from 'lucide-react';
import { 
  FOUNDERS, 
  CHANDIGARH_TEAM, 
  HARYANA_TEAM, 
  Lawyer 
} from '../data/firmData';

interface AdvocatesDirectoryProps {
  onSelectLawyer: (id: string) => void;
  onOpenConsultation: () => void;
}

export const AdvocatesDirectory: React.FC<AdvocatesDirectoryProps> = ({ 
  onSelectLawyer,
  onOpenConsultation 
}) => {
  const [activeRegionalTab, setActiveRegionalTab] = useState<'all' | 'chandigarh' | 'haryana'>('all');

  return (
    <section id="advocates" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#088395] mb-2">
            <Users2 className="w-4 h-4" />
            <span>Advocates &amp; Bench Counsel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Chambers Leadership &amp; Counsel Roster
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Directed by our founding trial advocates at Patiala House Courts in New Delhi, supported by experienced appellate and district counsel across Chandigarh and Haryana.
          </p>
        </div>

        {/* 3 Large Vibrant Teal Horizontal Cards Stacked Vertically (Matches Screenshot Exactly) */}
        <div className="space-y-8 max-w-5xl mx-auto mb-20">
          {FOUNDERS.map((founder, idx) => (
            <div
              key={founder.id}
              className="bg-[#088395] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl text-white transition-all hover:shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Photo Column (Left, in a square rounded frame) */}
                <div className="md:col-span-4 flex justify-center md:justify-start">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-xl overflow-hidden shadow-lg border-2 border-white/30 shrink-0 bg-slate-800">
                    <img
                      src={founder.imageUrl}
                      alt={`Portrait of ${founder.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Details Column (Right, white text, stars, bio, name & role) */}
                <div className="md:col-span-8 space-y-4">
                  
                  {/* 5 Stars Rating / Quality Benchmark */}
                  <div className="flex items-center gap-1 text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
                    ))}
                    <span className="text-xs font-bold text-teal-100 ml-2 uppercase tracking-wider">
                      Patiala House Chambers 238
                    </span>
                  </div>

                  {/* Narrative Bio Quote */}
                  <blockquote className="text-sm sm:text-base text-white/95 leading-relaxed font-normal italic">
                    "{founder.bio.slice(0, 240)}..."
                  </blockquote>

                  {/* Name & Credentials */}
                  <div className="pt-2 border-t border-white/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {founder.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-teal-100 font-medium mt-0.5">
                        {founder.role} • {founder.location}
                      </p>
                      <p className="text-xs text-white/80 mt-1">
                        {founder.barAdmissions?.join(' • ') || 'Bar Council of Delhi'}
                      </p>
                    </div>

                    <button
                      onClick={() => onSelectLawyer(founder.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#088395] hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer self-start sm:self-auto"
                    >
                      <span>View Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Regional Counsel Section (Chandigarh & Haryana Advocates) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm max-w-5xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#088395]">
                Regional Litigation Corridors
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                High Court &amp; District Sessions Counsel
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveRegionalTab('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeRegionalTab === 'all'
                    ? 'bg-[#088395] text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                All Regional (6)
              </button>
              <button
                onClick={() => setActiveRegionalTab('chandigarh')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeRegionalTab === 'chandigarh'
                    ? 'bg-[#088395] text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Chandigarh (2)
              </button>
              <button
                onClick={() => setActiveRegionalTab('haryana')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeRegionalTab === 'haryana'
                    ? 'bg-[#088395] text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                Haryana (4)
              </button>
            </div>
          </div>

          {/* Regional Advocates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...CHANDIGARH_TEAM, ...HARYANA_TEAM]
              .filter(lawyer => {
                if (activeRegionalTab === 'chandigarh') return CHANDIGARH_TEAM.some(c => c.id === lawyer.id);
                if (activeRegionalTab === 'haryana') return HARYANA_TEAM.some(h => h.id === lawyer.id);
                return true;
              })
              .map((counsel) => (
                <div
                  key={counsel.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={counsel.imageUrl}
                      alt={counsel.name}
                      className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        {counsel.name}
                      </h4>
                      <p className="text-xs text-[#088395] font-semibold">
                        {counsel.role}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {counsel.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {counsel.bio}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      {counsel.qualifications[0]}
                    </span>
                    <button
                      onClick={() => onSelectLawyer(counsel.id)}
                      className="text-xs font-bold text-[#088395] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Credentials</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
          </div>

        </div>

      </div>
    </section>
  );
};
