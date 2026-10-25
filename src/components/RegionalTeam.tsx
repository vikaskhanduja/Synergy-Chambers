import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  BookOpen, 
  ArrowRight, 
  GraduationCap, 
  Scale, 
  Award,
  ChevronRight
} from 'lucide-react';
import { CHANDIGARH_TEAM, HARYANA_TEAM, Lawyer } from '../data/firmData';

interface RegionalTeamProps {
  onSelectLawyer: (id: string) => void;
}

export const RegionalTeam: React.FC<RegionalTeamProps> = ({ onSelectLawyer }) => {
  const [activeTab, setActiveTab] = useState<'chandigarh' | 'haryana'>('chandigarh');

  return (
    <section id="regional-team" className="py-20 lg:py-28 bg-[#F8F9FA] border-b border-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-600 mb-3">
              <span className="w-6 h-[1.5px] bg-gold-500" />
              <span>Regional Bench Presence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-950">
              Regional Legal Teams
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 mt-4 leading-relaxed">
              Extending the firm&apos;s collaborative litigation practice across the Punjab &amp; Haryana High Court, regional administrative tribunals, and district courts.
            </p>
          </div>

          {/* Regional Selector Tabs */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-charcoal-300 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setActiveTab('chandigarh')}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'chandigarh'
                  ? 'bg-navy-900 text-gold-400 shadow'
                  : 'text-charcoal-600 hover:text-navy-950'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Chandigarh Chambers</span>
            </button>
            <button
              onClick={() => setActiveTab('haryana')}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'haryana'
                  ? 'bg-navy-900 text-gold-400 shadow'
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
            <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-gold-500/20 shadow-md">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                  Regional Jurisdiction
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Chandigarh High Court &amp; Central Administrative Tribunal
                </h3>
                <p className="text-charcoal-300 text-xs sm:text-sm leading-relaxed">
                  Synergy Chambers extends its practice to Chandigarh, offering dedicated legal representation across the region&apos;s courts and tribunals with local courtroom experience and academic legal research.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CHANDIGARH_TEAM.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="bg-white rounded-2xl p-8 border border-charcoal-200 shadow-subtle hover:border-gold-400 hover:shadow-premium transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200 inline-block mb-2">
                        {lawyer.role}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                        {lawyer.name}
                      </h4>
                      <p className="text-xs text-charcoal-500 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gold-600" />
                        <span>{lawyer.location}</span>
                      </p>
                    </div>

                    {/* Qualifications */}
                    <div className="space-y-1.5 pt-2 border-t border-charcoal-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block">
                        Qualifications &amp; Education
                      </span>
                      {lawyer.qualifications.map((q, qIdx) => (
                        <div key={qIdx} className="text-xs text-charcoal-700 flex items-start gap-2">
                          <GraduationCap className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                      {lawyer.bio}
                    </p>

                    {/* Practice Focus tags */}
                    <div className="pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-2">
                        Key Practice Focus
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {lawyer.practiceFocus.slice(0, 3).map((f, fIdx) => (
                          <span key={fIdx} className="text-[11px] bg-charcoal-100 text-charcoal-800 px-2.5 py-1 rounded-md border border-charcoal-200">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-charcoal-100">
                    <button
                      onClick={() => onSelectLawyer(lawyer.id)}
                      className="text-xs font-bold text-navy-950 hover:text-gold-600 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Read Complete Profile</span>
                      <ChevronRight className="w-4 h-4" />
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
            <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-gold-500/20 shadow-md">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                  District &amp; Sessions Practice
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Haryana District &amp; Sessions Courts Network
                </h3>
                <p className="text-charcoal-300 text-xs sm:text-sm leading-relaxed">
                  Synergy Chambers extends its practice beyond Delhi with a dedicated team based in Haryana, bringing local courtroom experience and prompt, focused advocacy to district and sessions courts from Karnal to Rewari, Gurugram, and Panipat.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HARYANA_TEAM.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="bg-white rounded-2xl p-6 border border-charcoal-200 shadow-subtle hover:border-gold-400 hover:shadow-premium transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200 inline-block mb-1.5">
                        Advocate
                      </span>
                      <h4 className="font-serif text-xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                        {lawyer.name}
                      </h4>
                      <p className="text-[11px] text-charcoal-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gold-600 shrink-0" />
                        <span className="line-clamp-1">{lawyer.location}</span>
                      </p>
                    </div>

                    <p className="text-charcoal-600 text-xs leading-relaxed line-clamp-3">
                      {lawyer.bio}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-charcoal-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block">
                        Practice Focus
                      </span>
                      {lawyer.practiceFocus.slice(0, 3).map((f, fIdx) => (
                        <div key={fIdx} className="text-xs text-charcoal-700 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-gold-500" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-charcoal-100">
                    <button
                      onClick={() => onSelectLawyer(lawyer.id)}
                      className="text-xs font-semibold text-navy-950 hover:text-gold-600 flex items-center gap-1 transition-colors"
                    >
                      <span>View Profile</span>
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
