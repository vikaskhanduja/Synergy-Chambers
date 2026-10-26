import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  GraduationCap, 
  ChevronRight,
  ArrowRight,
  BookOpen,
  Award
} from 'lucide-react';
import { CHANDIGARH_TEAM, HARYANA_TEAM } from '../data/firmData';

interface RegionalTeamProps {
  onSelectLawyer: (id: string) => void;
}

export const RegionalTeam: React.FC<RegionalTeamProps> = ({ onSelectLawyer }) => {
  const [activeTab, setActiveTab] = useState<'chandigarh' | 'haryana'>('chandigarh');

  return (
    <section id="regional-team" className="py-20 lg:py-28 bg-[#FAFBF8] border-b border-[#E1E8E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-700 mb-3">
              <span className="w-6 h-[1.5px] bg-gold-500" />
              <span>Regional Bench Presence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950 leading-tight">
              Regional Legal Teams
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 mt-4 leading-relaxed font-normal">
              Extending the firm&apos;s collaborative trial and appellate practice across the Punjab &amp; Haryana High Court, regional tribunals, and district sessions courts.
            </p>
          </div>

          {/* Regional Selector Tabs */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-[#E1E8E4] shadow-subtle self-start md:self-auto">
            <button
              onClick={() => setActiveTab('chandigarh')}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'chandigarh'
                  ? 'bg-navy-950 text-gold-300 shadow-subtle'
                  : 'text-charcoal-600 hover:text-navy-950'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Chandigarh Chambers</span>
            </button>
            <button
              onClick={() => setActiveTab('haryana')}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'haryana'
                  ? 'bg-navy-950 text-gold-300 shadow-subtle'
                  : 'text-charcoal-600 hover:text-navy-950'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Haryana District Practice</span>
            </button>
          </div>
        </div>

        {/* Chandigarh Team Content */}
        {activeTab === 'chandigarh' && (
          <div id="team-chandigarh" className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-850 shadow-elevated">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                  Regional Jurisdiction
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Chandigarh High Court &amp; Central Administrative Tribunal
                </h3>
                <p className="text-charcoal-300 text-xs sm:text-sm leading-relaxed font-light">
                  Synergy Chambers maintains active litigation practice in Chandigarh, representing clients before the High Court of Punjab &amp; Haryana, Central Administrative Tribunal (CAT), Armed Forces Tribunal (AFT), and regional commercial tribunals.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CHANDIGARH_TEAM.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="bg-white rounded-2xl p-8 border border-[#E1E8E4] shadow-subtle hover:border-gold-400 hover:shadow-card transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2.5 py-1 rounded border border-gold-200 inline-block mb-2">
                        {lawyer.role}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                        {lawyer.name}
                      </h4>
                      <p className="text-xs text-charcoal-500 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gold-600" />
                        <span>{lawyer.location}</span>
                      </p>
                    </div>

                    {/* Qualifications */}
                    <div className="space-y-1.5 bg-[#F7F9F5] p-4 rounded-xl border border-[#E1E8E4]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-1">
                        Academic Standing
                      </span>
                      {lawyer.qualifications.map((q, idx) => (
                        <div key={idx} className="text-xs text-charcoal-800 flex items-center gap-2">
                          <BookOpen className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span>{q}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bio */}
                    <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {lawyer.bio}
                    </p>

                    {/* Practice Focus tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {lawyer.practiceFocus.slice(0, 3).map((focus, fIdx) => (
                        <span key={fIdx} className="text-[11px] px-2.5 py-1 rounded bg-gold-50 text-gold-800 border border-gold-200">
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E7EDE7]">
                    <button
                      onClick={() => onSelectLawyer(lawyer.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-navy-950 hover:bg-gold-500 text-gold-300 hover:text-navy-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-subtle"
                    >
                      <span>Review Professional Docket</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Haryana Team Content */}
        {activeTab === 'haryana' && (
          <div id="team-haryana" className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-navy-850 shadow-elevated">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                  District Network
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Haryana District &amp; Sessions Courts Practice
                </h3>
                <p className="text-charcoal-300 text-xs sm:text-sm leading-relaxed font-light">
                  Providing verified trial representation across Haryana&apos;s key districts including Karnal, Rewari, Gurugram, Faridabad, Panipat, and Rohtak in civil suits, land tenure disputes, bail proceedings, and regulatory consumer forums.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HARYANA_TEAM.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="bg-white rounded-2xl p-6 border border-[#E1E8E4] shadow-subtle hover:border-gold-400 hover:shadow-card transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200 inline-block mb-2">
                        District Advocate
                      </span>
                      <h4 className="font-serif text-xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                        {lawyer.name}
                      </h4>
                      <p className="text-xs text-charcoal-500 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span className="line-clamp-1">{lawyer.location}</span>
                      </p>
                    </div>

                    <p className="text-charcoal-600 text-xs leading-relaxed line-clamp-3">
                      {lawyer.bio}
                    </p>

                    <div className="space-y-1 pt-2 border-t border-[#E7EDE7]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-1">
                        Core Focus
                      </span>
                      {lawyer.practiceFocus.slice(0, 2).map((focus, fIdx) => (
                        <div key={fIdx} className="text-xs text-charcoal-700 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-gold-600" />
                          <span className="line-clamp-1">{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E7EDE7]">
                    <button
                      onClick={() => onSelectLawyer(lawyer.id)}
                      className="w-full py-2 px-3 rounded-lg bg-gold-50 hover:bg-gold-500 hover:text-navy-950 text-gold-800 text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View Bio</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
